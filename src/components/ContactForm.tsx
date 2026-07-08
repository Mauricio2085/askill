'use client'

import { useState, type FormEvent } from 'react'

import { contactContent } from '@/content/contact'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const inputClassName =
  'h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-askill-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60'

const textareaClassName =
  'w-full resize-y rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-askill-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setFeedbackMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          company: formData.get('company'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          botcheck: formData.get('botcheck'),
        }),
      })

      const result = (await response.json()) as {
        success?: boolean
        message?: string
      }

      if (!response.ok || !result.success) {
        setStatus('error')
        setFeedbackMessage(result.message ?? contactContent.form.errorMessage)
        return
      }

      setStatus('success')
      setFeedbackMessage(result.message ?? contactContent.form.successMessage)
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
        noValidate
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
