const CONTACT_EMAIL = 'gouldevelop798@gmail.com';

exports.handler = async (event) => {
  const respond = (statusCode, obj) => ({
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(obj)
  });

  let body = {};
  if (event.body) {
    try {
      body = JSON.parse(event.body);
    } catch {
      return respond(400, { ok: false, message: 'Invalid request body.' });
    }
  }
  const b = body || {};

  const payload = {
    'Full Name': String(b.fullName || '').trim(),
    'Date of Birth': String(b.dob || '').trim(),
    'Email Account': String(b.email || '').trim(),
    'Phone Number': String(b.phone || '').trim(),
    'Subject': String(b.subject || '').trim(),
    'What Do You Want To Say': String(b.message || '').trim()
  };

  const required = Object.values(payload);
  if (required.some(v => !v)) {
    return respond(400, { ok: false, message: 'All fields are required.' });
  }
  if (payload['Full Name'].length > 50) {
    return respond(400, { ok: false, message: 'Maximum of 50 Characters Required.' });
  }
  if (!payload['Email Account'].toLowerCase().endsWith('@gmail.com')) {
    return respond(400, { ok: false, message: 'Only Gmail Accounts Are Allowed.' });
  }

  try {
    const host = event.headers && (event.headers.host || event.headers['x-forwarded-host'] || '');
    const protocol = event.headers && (event.headers['x-forwarded-proto'] || 'https');
    const referer = `${protocol}://${host}/contact`;

    const signal = typeof AbortSignal.timeout === 'function'
      ? AbortSignal.timeout(15000)
      : undefined;

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
      ...(signal ? { signal } : {})
    });

    const text = await upstream.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    const ok = upstream.ok && String(data.success).toLowerCase() === 'true';
    console.log(`[contact] relay responded ${upstream.status}: ${data.message || data.raw || 'ok'}`);

    if (!ok) {
      const raw = String(data.message || data.raw || '');
      if (/activation|activate/i.test(raw)) {
        return respond(200, {
          ok: false,
          activation: true,
          message: 'Form not activated yet. The inbox owner must visit formsubmit.co/email/gouldevelop798@gmail.com and click the "Activate Form" link sent to gouldevelop798@gmail.com once.'
        });
      }
      return respond(502, { ok: false, message: raw || 'Mail relay rejected the message.' });
    }
    return respond(200, { ok: true, message: data.message || 'Message sent.' });
  } catch (err) {
    console.error('[contact] relay error:', err.message || err);
    return respond(502, { ok: false, message: 'Could not reach the mail relay. Try again.' });
  }
};
