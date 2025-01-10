import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image priority src="/assets/images/services/adwords.jpg" alt="AdWords" className="-z-10" fill style={{ objectFit: "cover", objectPosition: "top" }} />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">{t("marketing")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("adwords-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-xl">
          <p>{t("google-ads-intro")}</p>
          <p>{t("google-ads-importance")}</p>
          <p>
            <strong>{t("google-ads-why-use")}</strong>
            <br />
            {t("google-ads-features")}
          </p>
          <p>{t("google-ads-quality-score")}</p>
          <p>{t("google-ads-benefits")}</p>
          <p>
            <strong>{t("google-ads-ppc")}</strong>
            <br />
            {t("google-ads-ppc-benefits")}
          </p>
          <p>
            <strong>{t("google-ads-competitor-analysis")}</strong>
            <br />
            {t("google-ads-competitor-analysis-details")}
          </p>
          <p>{t("google-ads-campaign-creation")}</p>
        </div>
      </div>
    </div>
  );
}
