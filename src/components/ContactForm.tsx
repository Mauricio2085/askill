'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'

import {
  contactContent,
  contactNeedOptions,
  contactPreferenceOptions,
  contactUrgencyOptions,
  isPlatformNeed,
  resolveContactNeedValue,
  type ContactIntent,
} from '@/content/contact'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

type ContactFormProps = {
  intent?: ContactIntent
  defaultNeed?: string
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

const inputClassName =
  'h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-askill-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60'

const selectClassName = `${inputClassName} appearance-none`

const textareaClassName =
  'w-full resize-y rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-askill-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60'

function optionLabel(
  options: readonly { value: string; label: string }[],
  value: FormDataEntryValue | null,
) {
  if (typeof value !== 'string' || !value) return 'No indicado'
  return options.find((option) => option.value === value)?.label ?? value
}

export function ContactForm({
  intent = 'engineering',
  defaultNeed,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [need, setNeed] = useState(() =>
    resolveContactNeedValue(defaultNeed, intent),
  )

  const isPlatform = isPlatformNeed(need)
  const formCopy = isPlatform
    ? {
        title: contactContent.platformForm.title,
        helperText: contactContent.platformForm.helperText,
        submitLabel: contactContent.platformForm.submitLabel,
        successMessage: contactContent.platformForm.successMessage,
        messageLabel: contactContent.platformForm.messageLabel,
        messagePlaceholder: contactContent.platformForm.messagePlaceholder,
        subject: contactContent.platformForm.subject,
        ariaLabel: 'Formulario de solicitud de demo de plataforma',
      }
    : {
        title: contactContent.form.title,
        helperText: contactContent.form.helperText,
        submitLabel: contactContent.form.submitLabel,
        successMessage: contactContent.form.successMessage,
        messageLabel: contactContent.form.messageLabel,
        messagePlaceholder: contactContent.form.messagePlaceholder,
        subject: contactContent.form.subject,
        ariaLabel: 'Formulario de solicitud de visita técnica',
      }

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
    const needValue = formData.get('need')
    const urgencyValue = formData.get('urgency')
    const preferenceValue = formData.get('preference')
    const platformRequest = isPlatformNeed(
      typeof needValue === 'string' ? needValue : null,
    )

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: platformRequest
            ? contactContent.platformForm.subject
            : contactContent.form.subject,
          from_name: 'ASKILL Web',
          name: formData.get('name'),
          company: formData.get('company'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          plant_city: formData.get('plant_city'),
          need: needValue,
          need_label: optionLabel(contactNeedOptions, needValue),
          urgency: urgencyValue,
          urgency_label: optionLabel(contactUrgencyOptions, urgencyValue),
          preference: preferenceValue,
          preference_label: optionLabel(
            contactPreferenceOptions,
            preferenceValue,
          ),
          intent: platformRequest ? 'platform' : 'engineering',
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
      setFeedbackMessage(formCopy.successMessage)
      form.reset()
      setNeed(resolveContactNeedValue(defaultNeed, intent))
    } catch {
      setStatus('error')
      setFeedbackMessage(contactContent.form.errorMessage)
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-foreground sm:text-xl">
        {formCopy.title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {formCopy.helperText}
      </p>

      <form
        className="mt-8 space-y-5"
        aria-label={formCopy.ariaLabel}
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
            {contactContent.form.plantCityLabel}
          </span>
          <input
            type="text"
            name="plant_city"
            autoComplete="address-level2"
            required
            disabled={isSubmitting}
            className={inputClassName}
            placeholder={contactContent.form.plantCityPlaceholder}
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-left">
            <span className="mb-2 block text-sm font-medium text-foreground">
              {contactContent.form.needLabel}
            </span>
            <select
              name="need"
              required
              disabled={isSubmitting}
              value={need}
              onChange={(event) => setNeed(event.target.value)}
              className={selectClassName}
            >
              <option value="" disabled>
                {contactContent.form.needPlaceholder}
              </option>
              {contactNeedOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-left">
            <span className="mb-2 block text-sm font-medium text-foreground">
              {contactContent.form.urgencyLabel}
            </span>
            <select
              name="urgency"
              required
              disabled={isSubmitting}
              defaultValue={intent === 'platform' ? 'demo' : ''}
              className={selectClassName}
            >
              <option value="" disabled>
                {contactContent.form.urgencyPlaceholder}
              </option>
              {contactUrgencyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block text-left">
          <span className="mb-2 block text-sm font-medium text-foreground">
            {contactContent.form.preferenceLabel}
          </span>
          <select
            name="preference"
            required
            disabled={isSubmitting}
            defaultValue={intent === 'platform' ? 'whatsapp' : 'visita'}
            className={selectClassName}
          >
            <option value="" disabled>
              {contactContent.form.preferencePlaceholder}
            </option>
            {contactPreferenceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-left">
          <span className="mb-2 block text-sm font-medium text-foreground">
            {formCopy.messageLabel}
          </span>
          <textarea
            name="message"
            rows={5}
            required
            disabled={isSubmitting}
            className={textareaClassName}
            placeholder={formCopy.messagePlaceholder}
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
              : formCopy.submitLabel}
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
