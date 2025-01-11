import { ButtonColorOut } from "@/components/ButtonColorOut";
import { OutlinedInput } from "@/components/input/OutlinedInput";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations();

  return (
    <div className="w-full flex lg:flex-row flex-col justify-center items-center max-w-screen-xl gap-5 p-12 mx-auto">
      <div className="flex flex-col items-end max-w-[400px] gap-4">
        <p className="mt-4 font-semibold text-lg max-w-[400px]">{t("contact-us-text")}</p>
        <p>-DigitalForge</p>
      </div>
      <form
        className="mx-auto w-full max-w-[500px] grid grid-cols-1 items-center justify-center gap-2"
        action="https://formsubmit.co/info@digitalforge.be"
        encType="multipart/form-data"
        method="POST"
      >
        <h2 className="mx-auto text-4xl font-bold text-[#363332]">{t("contact-us")}</h2>
        <div className="flex w-full flex-col gap-2">
          <div className="w-full">
            <OutlinedInput required type="text" name="Name" label={t("your-name")} placeholder={t("your-name")} />
          </div>
          <div className="w-full">
            <OutlinedInput required type="text" name="E-mail" label={t("your-email")} placeholder={t("your-email")} />
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="w-full">
            <OutlinedInput type="text" name="Phone" label={t("your-phone")} placeholder={t("your-phone")} />
          </div>
          <div className="w-full">
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
          <div className="w-full">{t("send")}</div>
        </ButtonColorOut>
      </form>
    </div>
  );
}
