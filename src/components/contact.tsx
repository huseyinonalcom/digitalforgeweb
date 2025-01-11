import { ButtonColorOut } from "@/components/ButtonColorOut";
import { OutlinedInput } from "@/components/input/OutlinedInput";
import { useTranslations } from "next-intl";
import { BoxDiv } from "./containers/box-div";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const t = useTranslations();

  return (
    <>
      <BoxDiv className="relative w-full bg-white">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center max-w-[1200px] mx-auto">
          <a href="https://api.whatsapp.com/send?phone=32494550687" target="_blank" rel="noreferrer" className="flex flex-row gap-2 items-center">
            <IoLogoWhatsapp size={128} className="h-12 w-12 lg:h-24 lg:w-24 animate-wiggle" color="#5a916e" />
            <p className="bg-gradient-to-r blur-xs from-[#5a916e] py-2 to-teal-500 bg-clip-text text-xl lg:text-4xl box-content font-extrabold text-transparent text-center select-none">
              {t("contact-whatsapp")}
            </p>
          </a>
          <a href="mailto:info@digitalforge.be" rel="noreferrer" className="flex flex-row gap-2 items-center">
            <MdEmail size={128} className="h-12 w-12 lg:h-24 lg:w-24 animate-wiggle" color="#3954ed" />
            <p className="bg-gradient-to-r blur-xs from-[#3954ed] to-blue-400 py-2 bg-clip-text overflow-visible text-xl lg:text-4xl box-content font-extrabold text-transparent text-center select-none">
              {t("contact-mail")}
            </p>
          </a>
        </div>
      </BoxDiv>
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
    </>
  );
}
