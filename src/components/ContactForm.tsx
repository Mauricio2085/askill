'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'

import { contactContent } from '@/content/contact'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

const inputClassName =
  'h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-askill-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60'

const textareaClassName =
  'w-full resize-y rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-askill-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!accessKey) {
      setStatus('error')
      setFeedbackMessage(contactContent.form.errorMessage)
      return
    }

    const form = event.currentTarget

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setStatus('submitting')
    setFeedbackMessage('')

    const formData = new FormData(form)

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Nuevo contacto — ASKILL S.A.S',
          from_name: 'ASKILL Web',
          name: formData.get('name'),
          company: formData.get('company'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          privacy_consent: formData.get('privacy') === 'on',
          botcheck: formData.get('botcheck'),
        }),
      })

      const result = (await response.json()) as {
        success?: boolean
        message?: string
      }

      if (!response.ok || !result.success) {
        setStatus('error')
        setFeedbackMessage(contactContent.form.errorMessage)
        return
      }

      setStatus('success')
      setFeedbackMessage(contactContent.form.successMessage)
      form.reset()
    } catch {
      setStatus('error')
      setFeedbackMessage(contactContent.form.errorMessage)
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-foreground sm:text-xl">
        Escríbenos
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {contactContent.form.helperText}
      </p>

      <form
        className="mt-8 space-y-5"
        aria-label="Formulario de contacto"
        onSubmit={handleSubmit}
      >
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-left">
            <span className="mb-2 block text-sm font-medium text-foreground">
              {contactContent.form.nameLabel}
            </span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              disabled={isSubmitting}
              className={inputClassName}
              placeholder="Tu nombre"
            />
          </label>
          <label className="block text-left">
            <span className="mb-2 block text-sm font-medium text-foreground">
              {contactContent.form.companyLabel}
            </span>
            <input
              type="text"
              name="company"
              autoComplete="organization"
              disabled={isSubmitting}
              className={inputClassName}
              placeholder="Nombre de la empresa"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-left">
            <span className="mb-2 block text-sm font-medium text-foreground">
              {contactContent.form.emailLabel}
            </span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              disabled={isSubmitting}
              className={inputClassName}
              placeholder="correo@empresa.com"
            />
          </label>
          <label className="block text-left">
            <span className="mb-2 block text-sm font-medium text-foreground">
              {contactContent.form.phoneLabel}
            </span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              disabled={isSubmitting}
              className={inputClassName}
              placeholder="+57 300 000 0000"
            />
          </label>
        </div>

        <label className="block text-left">
          <span className="mb-2 block text-sm font-medium text-foreground">
            {contactContent.form.messageLabel}
          </span>
          <textarea
            name="message"
            rows={5}
            required
            disabled={isSubmitting}
            className={textareaClassName}
            placeholder="Cuéntanos sobre tu proyecto o necesidad operativa"
          />
        </label>

        <label className="flex items-start gap-3 text-left">
          <input
            type="checkbox"
            name="privacy"
            required
            disabled={isSubmitting}
            className="mt-1 size-4 shrink-0 rounded border-border text-askill-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-askill-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60"
          />
          <span className="text-sm leading-relaxed text-muted-foreground">
            {contactContent.form.privacyLabel}{' '}
            <Link
              href="/politica-privacidad"
              className="font-medium text-askill-primary underline-offset-4 hover:underline"
            >
              {contactContent.form.privacyLinkLabel}
            </Link>
            .
          </span>
        </label>

        <div className="space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-askill-primary px-6 text-sm font-semibold text-askill-primary-foreground hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting
              ? contactContent.form.submittingLabel
              : contactContent.form.submitLabel}
          </button>

          {feedbackMessage ? (
            <p
              role="status"
              aria-live="polite"
              className={
                status === 'success'
                  ? 'text-sm text-green-600 dark:text-green-400'
                  : 'text-sm text-red-600 dark:text-red-400'
              }
            >
              {feedbackMessage}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  )
}
