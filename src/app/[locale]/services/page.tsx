import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const Title = ({ text }: { text: string }) => {
  return <h2 className="text-2xl font-semibold">{text}</h2>;
};

const Text = ({ text }: { text: string }) => {
  return <p className="pl-4 text-justify font-medium">{text}</p>;
};

export default function Services({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <div className="flex flex-col w-full items-center p-8">
      <div className="flex flex-col max-w-[1500px] gap-6 items-start justify-center">
        <h1 className="text-5xl font-bold mx-auto">{t("services-title")}</h1>
        <Title text={t("service-1-title")} />
        <Text text={t("service-1-text")} />
        <Title text={t("service-2-title")} />
        <Text text={t("service-2-text")} />
        <Title text={t("service-3-title")} />
        <Text text={t("service-3-text")} />
        <Title text={t("service-4-title")} />
        <Text text={t("service-4-text")} />
        <Title text={t("service-5-title")} />
        <Text text={t("service-5-text")} />
        <Title text={t("service-6-title")} />
        <Text text={t("service-6-text")} />
      </div>
    </div>
  );
}
