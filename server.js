const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve resume.html for the /resume route
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resume.html'));
});

// Serve resume-display.html for the /resume-display route
app.get('/resume-display', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resume-display.html'));
});

// Serve contact.html for the /contact route
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Receive contact form submissions and relay them to the QuickResume inbox
const CONTACT_EMAIL = 'gouldevelop798@gmail.com';

app.use(express.json());

app.post('/contact/send', async (req, res) => {
  const b = req.body || {};
  const payload = {
    'Full Name': String(b.fullName || '').trim(),
    'Date of Birth': String(b.dob || '').trim(),
    'Email Account': String(b.email || '').trim(),
    'Phone Number': String(b.phone || '').trim(),
    'Subject': String(b.subject || '').trim(),
    'What Do You Want To Say': String(b.message || '').trim()
  };

  // Server-side sanity checks mirroring the page rules
  const required = Object.values(payload);
  if (required.some(v => !v)) {
    return res.status(400).json({ ok: false, message: 'All fields are required.' });
  }
  if (payload['Full Name'].length > 50) {
    return res.status(400).json({ ok: false, message: 'Maximum of 50 Characters Required.' });
  }
  if (!payload['Email Account'].toLowerCase().endsWith('@gmail.com')) {
    return res.status(400).json({ ok: false, message: 'Only Gmail Accounts Are Allowed.' });
  }

  try {
    const referer = `${req.protocol}://${req.get('host')}/contact`;
    const upstream = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Referer': referer
      },
      body: JSON.stringify({
        _subject: `QuickResume Contact: ${payload['Subject']}`,
        _template: 'table',
        _captcha: 'false',
        ...payload
      }),
      signal: AbortSignal.timeout(15000)
    });

    const text = await upstream.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    const ok = upstream.ok && String(data.success).toLowerCase() === 'true';
    console.log(`[contact] relay responded ${upstream.status}: ${data.message || data.raw || 'ok'}`);

    if (!ok) {
      return res.status(502).json({ ok: false, message: data.message || data.raw || 'Mail relay rejected the message.' });
    }
    res.json({ ok: true, message: data.message || 'Message sent.' });
  } catch (err) {
    console.error('[contact] relay error:', err.message);
    res.status(502).json({ ok: false, message: 'Could not reach the mail relay. Try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
