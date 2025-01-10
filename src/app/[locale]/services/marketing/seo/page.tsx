import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image priority src="/assets/images/services/seo.jpg" alt="SEO" className="-z-10" fill style={{ objectFit: "cover", objectPosition: "top" }} />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">{t("marketing")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("seo-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-xl">
          <p>{t("seo-intro")}</p>
          <p>{t("seo-importance")}</p>
          <p>
            <strong>{t("seo-benefits")}</strong>
            <br />
            {t("seo-marketing")}
          </p>
          <p>{t("seo-cost-effective")}</p>
          <p>{t("seo-services")}</p>
          <p>
            <strong>{t("website-optimization")}</strong>
            <br />
            {t("website-optimization-details")}
          </p>
          <p>{t("search-traffic")}</p>
          <p>{t("organic-traffic")}</p>
        </div>
      </div>
    </div>
  );
}
