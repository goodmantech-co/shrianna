import { Download, FileText, Mail, MapPin, Phone } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/container";
import { TenderStatus } from "@/components/tenders/tender-status";
import { site } from "@/lib/site";
import { submissionAddress, tenders } from "@/lib/tenders";

export const metadata = {
  title: "Tenders",
  description:
    "Current tenders and requests for quotation from Shrianna Federation (Shrianna Protsahan Consortium of Farmer Producer Company Ltd.), Bhopal. Download tender documents in English and Hindi.",
  alternates: { canonical: "/tenders" },
};

export default function TendersPage() {
  return (
    <>
      <Section variant="hero">
        <Container size="wide">
          <div className="max-w-3xl">
            <Eyebrow>Tenders &amp; notices</Eyebrow>
            <h1 className="mt-4 type-h1">Tenders</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Requests for quotation and tender notices from Shrianna Protsahan Consortium of Farmer Producer Company Ltd.
              Download the full tender document, in English or Hindi, before you submit.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="flush">
        <Container size="wide">
          <div className="space-y-8">
            {tenders.map((t) => (
              <article key={t.ref} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="border-b border-border p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <TenderStatus deadline={t.deadline} />
                    <span>Ref. {t.ref}</span>
                    <span aria-hidden className="hidden sm:inline">|</span>
                    <span>Issued {t.issued}</span>
                  </div>
                  <h2 className="mt-4 max-w-3xl type-h3">{t.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground" lang="hi">
                    {t.titleHi}
                  </p>
                  <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{t.summary}</p>

                  <div className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl bg-primary/10 px-4 py-3">
                    <span className="text-sm text-muted-foreground">Last date for submission</span>
                    <span className="font-semibold text-primary">{t.deadlineLabel}</span>
                  </div>
                </div>

                <div className="grid gap-0 lg:grid-cols-[1.5fr_1fr]">
                  <dl className="divide-y divide-border p-6 sm:p-8">
                    {t.facts.map((f) => (
                      <div key={f.label} className="grid gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-6">
                        <dt className="text-sm text-muted-foreground">{f.label}</dt>
                        <dd className="text-sm leading-relaxed">{f.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="border-t border-border bg-muted/40 p-6 sm:p-8 lg:border-t-0 lg:border-l">
                    <h3 className="type-h6">Download tender documents</h3>
                    <ul className="mt-4 space-y-3">
                      {t.documents.map((d) => (
                        <li key={d.href}>
                          <a
                            href={d.href}
                            download
                            className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
                          >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <FileText className="h-5 w-5" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-medium">{d.label}</span>
                              <span className="block text-xs text-muted-foreground">
                                {d.language}, PDF, {d.size}
                              </span>
                            </span>
                            <Download className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-y-0.5" aria-hidden />
                            <span className="sr-only">Download</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                      The documents include the full terms, specifications (Annexure I) and the quotation form (Annexure II).
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Eyebrow>How to submit</Eyebrow>
              <h2 className="mt-3 type-h2">Send your quotation</h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Quotations received after the last date and time will not be considered. For questions about a tender, write or
                call us.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 sm:col-span-2">
                <MapPin className="h-5 w-5 text-primary" aria-hidden />
                <h3 className="mt-3 type-h6">By post</h3>
                <address className="mt-2 text-sm leading-relaxed text-muted-foreground not-italic">
                  {submissionAddress.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <a href={`mailto:${site.email}`} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <Mail className="h-5 w-5 text-primary" aria-hidden />
                <h3 className="mt-3 type-h6">By email</h3>
                <p className="mt-2 text-sm break-all text-muted-foreground">{site.email}</p>
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <Phone className="h-5 w-5 text-primary" aria-hidden />
                <h3 className="mt-3 type-h6">Phone</h3>
                <p className="mt-2 text-sm text-muted-foreground">{site.phone}</p>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
