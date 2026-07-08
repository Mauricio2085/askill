import { ContactForm } from '@/components/ContactForm'
import { contactContent } from '@/content/contact'

export function ContactPageContent() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-askill-primary sm:text-4xl lg:text-5xl">
            {contactContent.title}
          </h1>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {contactContent.intro}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
          <ContactForm />

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-askill-primary sm:text-xl">
                {contactContent.info.title}
              </h2>
              <dl className="mt-6 space-y-5 text-sm sm:text-base">
                <div>
                  <dt className="font-medium text-foreground">Correo</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${contactContent.info.email}`}
                      className="text-muted-foreground hover:text-askill-primary"
                    >
                      {contactContent.info.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Teléfono</dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${contactContent.info.phone.replace(/\s/g, '')}`}
                      className="text-muted-foreground hover:text-askill-primary"
                    >
                      {contactContent.info.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Ubicación</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {contactContent.info.location}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Horario</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {contactContent.info.hours}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-dashed border-askill-primary/40 bg-askill-primary/5 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {contactContent.info.responseNote}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
