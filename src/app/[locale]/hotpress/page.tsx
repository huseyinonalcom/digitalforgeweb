import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

export default function HotPress({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <Image priority src="/assets/logos/hotpress.svg" alt="Digital Forge Logo" width={200} height={200} />
    </div>
  );
}
