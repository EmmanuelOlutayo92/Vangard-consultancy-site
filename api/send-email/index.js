module.exports = async function (context, req) {
  try {
    const { name, email, message } = req.body || {}

    if (!name || !email || !message) {
      context.res = {
        status: 400,
        body: { error: 'Missing required fields.' }
      }
      return
    }

    const baseUrl = process.env.LOGIC_APP_URL
    const code = process.env.LOGIC_APP_CODE

    if (!baseUrl || !code) {
      context.res = {
        status: 500,
        body: { error: 'Email service is not configured.' }
      }
      return
    }

    const url = `${baseUrl}?code=${encodeURIComponent(code)}`

    const payload = {
      toEmail: 'info@vangardconsultancy.com',
      toName: 'Vangard Consultancy',
      subject: `Website inquiry from ${name}`,
      htmlBody: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      `,
      textBody: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => '')
      context.res = {
        status: 502,
        body: { error: 'Failed to send email.', details: errorText }
      }
      return
    }

    context.res = {
      status: 200,
      body: { ok: true }
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: { error: 'Unexpected error.' }
    }
  }
}
