import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image
          priority
          src="/assets/images/services/socialmedia.jpg"
          alt="Social Media"
          className="-z-10"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">/{t("marketing")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("social-media-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-xl">
          <p>{t("marketing-social-media-intro")}</p>
          <p>
            <strong>{t("marketing-social-media-title-1")}</strong>
            <br />
            {t("marketing-social-media-text-1")}
          </p>
          <p>{t("marketing-social-media-text-1-b")}</p>
          <p>
            <strong>{t("marketing-social-media-title-2")}</strong>
            <br />
            {t("marketing-social-media-text-2")}
          </p>
          <p>{t("marketing-social-media-text-2-b")}</p>
          <p>
            <strong>{t("marketing-social-media-title-3")}</strong>
            <br />
            {t("marketing-social-media-text-3")}
          </p>
        </div>
      </div>
    </div>
  );
}
