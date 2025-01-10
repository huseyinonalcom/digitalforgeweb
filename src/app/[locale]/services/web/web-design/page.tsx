import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image
          priority
          src="/assets/images/services/webdesign.jpg"
          alt="Web Design"
          className="-z-10"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">/{t("web-services")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("web-design-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-xl">
          <p>{t("web-design-intro")}</p>
          <p>
            <strong>{t("web-design-title-1")}</strong>
            <br />
            {t("web-design-text-1")}
          </p>
          <p>{t("web-design-text-1-b")}</p>
          <p>{t("web-design-text-1-c")}</p>
          <p>
            <strong>{t("web-design-title-2")}</strong>
            <br />
            {t("web-design-text-2")}
          </p>
        </div>
      </div>
    </div>
  );
}
