import { NextResponse } from 'next/server'

const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit'
const MAX_FIELD_LENGTH = 500
const MAX_MESSAGE_LENGTH = 5000

type ContactPayload = {
  name?: string
  company?: string
  email?: string
  phone?: string
  message?: string
  botcheck?: string | boolean
}

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    return NextResponse.json(
      {
        success: false,
        message:
          'El formulario no está configurado. Añade WEB3FORMS_ACCESS_KEY en las variables de entorno.',
      },
      { status: 503 },
    )
  }

  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json(
      { success: false, message: 'Solicitud inválida.' },
      { status: 400 },
    )
  }

  if (payload.botcheck) {
    return NextResponse.json({ success: true, message: 'Mensaje enviado.' })
  }

  const name = sanitize(payload.name, MAX_FIELD_LENGTH)
  const company = sanitize(payload.company, MAX_FIELD_LENGTH)
  const email = sanitize(payload.email, MAX_FIELD_LENGTH)
  const phone = sanitize(payload.phone, MAX_FIELD_LENGTH)
  const message = sanitize(payload.message, MAX_MESSAGE_LENGTH)

  if (name.length < 2) {
    return NextResponse.json(
      { success: false, message: 'Ingresa tu nombre completo.' },
      { status: 400 },
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: 'Ingresa un correo electrónico válido.' },
      { status: 400 },
    )
  }

  if (message.length < 10) {
    return NextResponse.json(
      {
        success: false,
        message: 'El mensaje debe tener al menos 10 caracteres.',
      },
      { status: 400 },
    )
  }

  const web3formsResponse = await fetch(WEB3FORMS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: 'Nuevo contacto — ASKILL S.A.S',
      from_name: 'ASKILL Web',
      name,
      email,
      phone,
      company,
      message,
    }),
  })

  const result = (await web3formsResponse.json()) as {
    success?: boolean
    message?: string
  }

  if (!web3formsResponse.ok || !result.success) {
    return NextResponse.json(
      {
        success: false,
        message:
          result.message ??
          'No pudimos enviar tu mensaje. Intenta de nuevo en unos minutos.',
      },
      { status: 502 },
    )
  }

  return NextResponse.json({
    success: true,
    message:
      '¡Gracias! Recibimos tu mensaje y te responderemos pronto desde ingeniería.',
  })
}
