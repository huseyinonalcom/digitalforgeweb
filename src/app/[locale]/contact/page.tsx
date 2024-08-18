import { ButtonColorOut } from "@/components/ButtonColorOut";
import { OutlinedInput } from "@/components/input/OutlinedInput";
import { NavLink } from "@/components/navigation/NavLink";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

export default function Contact({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <div className="w-full flex flex-row justify-around gap-5 p-12">
      <form
        className="mx-auto flex w-[95%] max-w-[900px] flex-col items-center justify-center gap-2"
        action="https://formsubmit.co/form@digitalforge.be"
        encType="multipart/form-data"
        method="POST"
      >
        <h2 className="flex flex-row items-center gap-2 text-4xl font-bold text-[#363332]">{t("contact-us")}</h2>
        <div className="flex w-full flex-col gap-2 md:flex-row">
          <div className="w-full md:w-6/12">
            <OutlinedInput required type="text" name="Name" label={t("your-name")} placeholder={t("your-name")} />
          </div>
          <div className="w-full md:w-6/12">
            <OutlinedInput required type="text" name="E-mail" label={t("your-email")} placeholder={t("your-email")} />
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 md:flex-row">
          <div className="w-full md:w-6/12">
            <OutlinedInput type="text" name="Phone" label={t("your-phone")} placeholder={t("your-phone")} />
          </div>
          <div className="w-full md:w-6/12">
            <OutlinedInput type="text" name="Company" label={t("your-company")} placeholder={t("your-company")} />
          </div>
        </div>

        <div className="w-full">
          <OutlinedInput required name="Message" label={t("your-message")} placeholder={t("your-message")} />
        </div>

        <input type="text" name="_honey" className="hidden" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <ButtonColorOut name="Send" aria-label="Send" type="submit">
          {t("send")}
        </ButtonColorOut>
      </form>
    </div>
  );
}
