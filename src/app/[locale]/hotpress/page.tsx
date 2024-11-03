import { use } from "react";
import { useTranslations } from "next-intl";


import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function HotPress(props: Props) {
  const params = use(props.params);

  const {
    locale
  } = params;

  const t = useTranslations();

  return (
    <div className="w-full flex flex-col gap-5 items-center p-12">
      <Image priority src="/assets/logos/hotpress.svg" alt="Digital Forge Logo" width={200} height={200} />
    </div>
  );
}
