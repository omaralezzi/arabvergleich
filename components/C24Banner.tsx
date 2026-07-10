import Link from "next/link";

import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Container } from "@/components/Container";
import { affiliateTools } from "@/src/config/affiliateTools";
import type { Locale } from "@/src/config/site";

export function C24Banner({ locale }: { locale: Locale }) {
  return (
    <section className="section-gap">
      <Container>
        <div className="surface overflow-hidden">
          <Link
            href={affiliateTools.c24BankLink}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="block bg-gradient-to-r from-[#003CC8] via-[#0B54E8] to-[#25B4E3] text-white"
          >
            <div className="flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8 md:py-10">
              <div className="max-w-2xl">
                <img src={affiliateTools.c24BankBanner} alt="C24 Bank" className="h-10 w-auto" />
                <h2 className="mt-6 text-3xl font-bold">
                  {locale === "ar" ? "الحساب الرقمي من C24" : "Das digitale Konto von C24"}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/90 md:text-base">
                  {locale === "ar"
                    ? "بانر رسمي مبني باستخدام شعار C24 الرسمي مع رابط الشراكة الخاص بك للوصول السريع إلى صفحة العرض."
                    : "Offizieller Banner mit dem echten C24 Logo und deinem Partnerlink fuer den direkten Einstieg."}
                </p>
              </div>
              <span className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0046D5]">
                {locale === "ar" ? "الانتقال إلى C24" : "Zu C24"}
              </span>
            </div>
          </Link>
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-brand-navy">
              {locale === "ar" ? "البانر الرسمي لـ C24" : "Offizielles C24 Banner"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {locale === "ar"
                ? "يمكنك الضغط على البانر الرسمي للانتقال إلى عرض C24 عبر رابط الشراكة ومتابعة فتح الحساب من الصفحة الرسمية."
                : "Nutze das offizielle Banner, um ueber den Partnerlink zum C24 Angebot zu wechseln und dort die Kontoeroeffnung fortzusetzen."}
            </p>
            <Link
              href={affiliateTools.c24BankLink}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              {locale === "ar" ? "فتح صفحة C24 الرسمية" : "Offizielle C24 Seite oeffnen"}
            </Link>
            <AffiliateDisclosure locale={locale} />
          </div>
        </div>
      </Container>
    </section>
  );
}
