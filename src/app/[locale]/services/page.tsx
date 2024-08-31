import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const Title = ({ text }: { text: string }) => {
  return (
    <h2 className="text-2xl font-semibold pt-4" id={text.replace(/\s+/g, "-").toLowerCase()}>
      {text}
    </h2>
  );
};

const SubTitle = ({ text }: { text: string }) => {
  return <h3 className="pl-4 text-xl font-semibold">{text}</h3>;
};
const Text = ({ text }: { text: string }) => {
  return <p className="pl-8 text-justify font-medium">{text}</p>;
};

export default function Services({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <div className="flex flex-col w-full items-center p-8">
      <h1 className="text-5xl font-bold mx-auto">{t("services-title")}</h1>
      <div className="flex flex-row w-full max-w-[1500px] items-start justify-between">
        <div className="flex flex-col w-full max-w-[1000px] gap-6 items-start justify-center">
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

          <Title text={t("service-7-title")} />
          <SubTitle text={t("service-7-subtitle-1")} />
          <Text text={t("service-7-subtext-1")} />
          <SubTitle text={t("service-7-subtitle-2")} />
          <Text text={t("service-7-subtext-2")} />
          <SubTitle text={t("service-7-subtitle-3")} />
          <Text text={t("service-7-subtext-3")} />
          <SubTitle text={t("service-7-subtitle-4")} />
          <Text text={t("service-7-subtext-4")} />

          <Title text={t("service-8-title")} />
          <SubTitle text={t("service-8-subtitle-1")} />
          <Text text={t("service-8-subtext-1")} />
          <SubTitle text={t("service-8-subtitle-2")} />
          <Text text={t("service-8-subtext-2")} />
          <SubTitle text={t("service-8-subtitle-3")} />
          <Text text={t("service-8-subtext-3")} />
          <SubTitle text={t("service-8-subtitle-4")} />
          <Text text={t("service-8-subtext-4")} />

          <Title text={t("service-9-title")} />
          <SubTitle text={t("service-9-subtitle-1")} />
          <Text text={t("service-9-subtext-1")} />
          <SubTitle text={t("service-9-subtitle-2")} />
          <Text text={t("service-9-subtext-2")} />
          <SubTitle text={t("service-9-subtitle-3")} />
          <Text text={t("service-9-subtext-3")} />
          <SubTitle text={t("service-9-subtitle-4")} />
          <Text text={t("service-9-subtext-4")} />
          <SubTitle text={t("service-9-subtitle-5")} />
          <Text text={t("service-9-subtext-5")} />

          <Title text={t("service-10-title")} />
          <SubTitle text={t("service-10-subtitle-1")} />
          <Text text={t("service-10-subtext-1")} />
          <SubTitle text={t("service-10-subtitle-2")} />
          <Text text={t("service-10-subtext-2")} />
          <SubTitle text={t("service-10-subtitle-3")} />
          <Text text={t("service-10-subtext-3")} />

          <Title text={t("service-11-title")} />
          <SubTitle text={t("service-11-subtitle-1")} />
          <Text text={t("service-11-subtext-1")} />
          <SubTitle text={t("service-11-subtitle-2")} />
          <Text text={t("service-11-subtext-2")} />
          <SubTitle text={t("service-11-subtitle-3")} />
          <Text text={t("service-11-subtext-3")} />
          <SubTitle text={t("service-11-subtitle-4")} />
          <Text text={t("service-11-subtext-4")} />

          <Title text={t("service-12-title")} />
          <SubTitle text={t("service-12-subtitle-1")} />
          <Text text={t("service-12-subtext-1")} />
          <SubTitle text={t("service-12-subtitle-2")} />
          <Text text={t("service-12-subtext-2")} />

          <Title text={t("service-13-title")} />
          <SubTitle text={t("service-13-subtitle-1")} />
          <Text text={t("service-13-subtext-1")} />
          <SubTitle text={t("service-13-subtitle-2")} />
          <Text text={t("service-13-subtext-2")} />

          <Title text={t("service-14-title")} />
          <SubTitle text={t("service-14-subtitle-1")} />
          <Text text={t("service-14-subtext-1")} />
          <SubTitle text={t("service-14-subtitle-2")} />
          <Text text={t("service-14-subtext-2")} />
          <SubTitle text={t("service-14-subtitle-3")} />
          <Text text={t("service-14-subtext-3")} />
          <SubTitle text={t("service-14-subtitle-4")} />
          <Text text={t("service-14-subtext-4")} />
          <SubTitle text={t("service-14-subtitle-5")} />
          <Text text={t("service-14-subtext-5")} />

          <Title text={t("service-15-title")} />
          <SubTitle text={t("service-15-subtitle-1")} />
          <Text text={t("service-15-subtext-1")} />
          <SubTitle text={t("service-15-subtitle-2")} />
          <Text text={t("service-15-subtext-2")} />
          <SubTitle text={t("service-15-subtitle-3")} />
          <Text text={t("service-15-subtext-3")} />
          <SubTitle text={t("service-15-subtitle-4")} />
          <Text text={t("service-15-subtext-4")} />
          <SubTitle text={t("service-15-subtitle-5")} />
          <Text text={t("service-15-subtext-5")} />

          <Title text={t("service-16-title")} />
          <SubTitle text={t("service-16-subtitle-1")} />
          <Text text={t("service-16-subtext-1")} />
          <SubTitle text={t("service-16-subtitle-2")} />
          <Text text={t("service-16-subtext-2")} />
          <SubTitle text={t("service-16-subtitle-3")} />
          <Text text={t("service-16-subtext-3")} />
          <SubTitle text={t("service-16-subtitle-4")} />
          <Text text={t("service-16-subtext-4")} />
          <SubTitle text={t("service-16-subtitle-5")} />
          <Text text={t("service-16-subtext-5")} />
        </div>
        <nav className="flex flex-col sticky top-10 gap-4 w-full max-w-[300px] items-end">
          {Array.from({ length: 16 }, (_, i) => (
            <a
              href={`#${t(`service-${i + 1}-title`)
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="nav-link"
              key={i}
            >
              {t(`service-${i + 1}-title`)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
