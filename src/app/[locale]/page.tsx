import dflogo from "../../../public/assets/logos/dflogo.svg";
import bannerone from "../../../public/assets/images/homepagebanner.jpg";
import AnimatedBackground from "@/components/fluff/AnimatedBackground";
import marketing from "../../../public/assets/images/marketing.png";
import website from "../../../public/assets/images/website.png";
import map from "../../../public/assets/images/map.png";
import maplogos from "../../../public/assets/images/mapslogos.png";
import InfiniteCarousel from "@/components/fluff/AutoCarousel";
import design from "../../../public/assets/images/design.png";
import { ButtonColorOut } from "@/components/ButtonColorOut";
import { NavLink } from "@/components/navigation/NavLink";
import { BoxDiv } from "@/components/containers/box-div";
import { FaArrowUp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Service = ({
  title,
  text,
  image,
  alt,
  buttonText,
  href,
  right,
}: {
  title: string;
  text: string;
  image: StaticImport;
  alt: string;
  buttonText: string;
  href: string;
  right?: boolean;
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 items-start rounded-md text-white p-4 lg:hidden">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-3xl font-bold text-center">{title}</h1>
        </div>
        <div className="relative h-48 w-full">
          <Image priority src={image} alt={alt} className="absolute" fill style={{ objectFit: "contain" }} />
        </div>
        <p>{text}</p>
        <Link href={href} className="bg-black text-white rounded-md pr-8 pl-4 py-2 mt-4 flex flex-row gap-1 items-center mx-auto">
          {buttonText}
          <div className="h-8 animate-bounce" style={{ rotate: "90deg" }}>
            <FaArrowUp size={16} />
          </div>
        </Link>
      </div>
      {!right ? (
        <div className="hidden flex-row gap-2 items-center justify-center w-full rounded-md text-white p-4 lg:flex">
          <div className="w-1/2 flex flex-col items-end">
            <div className="w-[530px] flex flex-col items-end gap-12">
              <h1 className="text-3xl font-bold text-right">{title}</h1>
              <p className="text-right">{text}</p>
              <Link href={href} className="bg-black text-white rounded-md pr-8 pl-4 py-2 mt-4 flex flex-row gap-1 items-center ml-auto">
                {buttonText}
                <div className="h-8 animate-bounce" style={{ rotate: "90deg" }}>
                  <FaArrowUp size={16} />
                </div>
              </Link>
            </div>
          </div>
          <div className="relative h-96 w-1/2">
            <Image priority src={image} alt={alt} className="absolute" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      ) : (
        <div className="hidden flex-row gap-2 items-center justify-center w-full rounded-md text-white p-4 lg:flex">
          <div className="relative h-96 w-1/2">
            <Image priority src={image} alt={alt} className="absolute" fill style={{ objectFit: "contain" }} />
          </div>
          <div className="w-1/2 flex flex-col items-start">
            <div className="w-[530px] flex flex-col items-start gap-12">
              <h1 className="text-3xl font-bold text-left">{title}</h1>
              <p className="text-left">{text}</p>
              <Link href={href} className="bg-black text-white rounded-md pr-8 pl-4 py-2 mt-4 flex flex-row gap-1 items-center mr-auto">
                {buttonText}
                <div className="h-8 animate-bounce" style={{ rotate: "90deg" }}>
                  <FaArrowUp size={16} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function Home() {
  const t = useTranslations();

  const introTR = (
    <h2 className="text-3xl lg:text-5xl font-bold w-[250px] md:w-[390px] text-center">
      <span className="whitespace-nowrap">“Dijital başarınız</span>
      <br />
      için o <span className="text-red-600">son adım</span>”
    </h2>
  );
  const introEN = (
    <h2 className="text-3xl lg:text-5xl font-bold w-[290px] md:w-[490px] text-center">
      “<span className="text-red-600">The final step</span> to
      <br />
      your digital success”
    </h2>
  );
  const introFR = (
    <h2 className="text-2xl lg:text-4xl font-bold w-[290px] md:w-[490px] text-center">
      “<span className="text-red-600">La dernière étape</span> pour
      <br />
      votre succès digitale”
    </h2>
  );
  const introNL = (
    <h2 className="text-3xl lg:text-5xl font-bold w-[310px] md:w-[490px] text-center">
      “<span className="text-red-600">Het laatste stap</span> naar
      <br />
      uw digitale success”
    </h2>
  );

  const Intro = ({ locale }: { locale: string }) => {
    switch (locale) {
      case "tr":
        return introTR;
      case "en":
        return introEN;
      case "nl":
        return introNL;
      case "fr":
        return introFR;
    }
  };

  return (
    <div className="flex flex-col w-full items-center bg-red-500">
      <AnimatedBackground />
      <BoxDiv className="min-h-[70vh] relative">
        <Image priority src={bannerone} alt="Digital Forge Banner" className="w-full absolute -z-10" fill style={{ objectFit: "cover" }} />
        <div className="text-black flex flex-col lg:flex-row justify-start pt-14 gap-5 h-full max-w-[1500px] mx-auto">
          <div className="flex flex-col gap-6 items-center justify-center">
            <Intro locale={t("locale")} />
            <div className="flex flex-row gap-4">
              <NavLink href="projects">
                <ButtonColorOut>{t("intro-projects")}</ButtonColorOut>
              </NavLink>
              <NavLink href="contact">
                <ButtonColorOut>{t("intro-contact")}</ButtonColorOut>
              </NavLink>
            </div>
          </div>
        </div>
      </BoxDiv>
      <BoxDiv>
        <div className="flex flex-col gap-6 items-center text-white justify-center max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 gap-12 w-full">
            <Service
              text={t("services-2-text")}
              title={t("services-2-title")}
              image={website}
              buttonText={t("services-1-button")}
              href={"/services/web/web-design"}
              alt={"Website Image"}
            />
            <Service
              right
              text={t("services-3-text")}
              title={t("services-3-title")}
              image={design}
              buttonText={t("services-1-button")}
              href={"/services/brand-identity/design"}
              alt={"Design Image"}
            />
            <Service
              text={t("services-1-text")}
              title={t("services-1-title")}
              image={marketing}
              buttonText={t("services-1-button")}
              href={"/services/marketing/social-media"}
              alt={"Marketing Image"}
            />
          </div>
        </div>
      </BoxDiv>
      <BoxDiv className="bg-black/90">
        <div className="grid max-w-[1500px] grid-cols-1 lg:grid-cols-2 w-full mx-auto">
          <div className="relative h-[400px] w-full">
            <Image priority src={map} alt="Maps on phone" className="w-full absolute -z-10" fill style={{ objectFit: "contain" }} />
          </div>
          <div className="h-[400px] gap-12 w-full text-white flex flex-col items-start justify-center">
            <h2 className="text-2xl font-bold">{t("maps-title")}</h2>
            <p className="font-semibold">{t("maps-text")}</p>
            <div className="relative h-[100px] w-full">
              <Image priority src={maplogos} alt="Maps on phone" className="w-full absolute -z-10" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </BoxDiv>
      <BoxDiv className="bg-white">
        <div className="flex flex-col gap-6 items-center justify-center max-w-[1500px] mx-auto">
          <h1 className="text-4xl font-bold">{t("our-partners")}</h1>
          <InfiniteCarousel />
        </div>
      </BoxDiv>
      <BoxDiv className="bg-white">
        <div className="grid max-w-[1500px] grid-cols-1 lg:grid-cols-3 mx-auto">
          <div className="col-span-1 my-auto">
            <h1 className="text-4xl font-black ml-auto">{t("why-us-title")}</h1>
            <div className="pr-20">
              <div className="relative w-full h-48">
                <Image priority src={dflogo} alt="DigitalForge" className="absolute" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-2 items-start rounded-md p-4 min-h-36">
              <p>{t("why-us-4-text")}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
              <div className="flex flex-col gap-2 items-start rounded-md p-4 min-h-36">
                <div className="flex flex-row items-center justify-between w-full">
                  <h1 className="text-lg font-bold">{t("why-us-1-title")}</h1>
                </div>
                <p>{t("why-us-1-text")}</p>
              </div>
              <div className="flex flex-col gap-2 items-start rounded-md p-4 min-h-36">
                <div className="flex flex-row items-center justify-between w-full">
                  <h1 className="text-lg font-bold">{t("why-us-2-title")}</h1>
                </div>
                <p>{t("why-us-2-text")}</p>
              </div>
              <div className="flex flex-col gap-2 items-start rounded-md p-4 min-h-36">
                <div className="flex flex-row items-center justify-between w-full">
                  <h1 className="text-lg font-bold">{t("why-us-3-title")}</h1>
                </div>
                <p>{t("why-us-3-text")}</p>
              </div>
            </div>
          </div>
        </div>
      </BoxDiv>
      <BoxDiv className="relative w-full bg-white/90">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center max-w-[1200px] mx-auto">
          <a href="https://api.whatsapp.com/send?phone=32494550687" target="_blank" rel="noreferrer" className="flex flex-row gap-2 items-center">
            <IoLogoWhatsapp size={128} className="h-12 w-12 lg:h-24 lg:w-24" color="#5a916e" />
            <p className="bg-gradient-to-r blur-xs from-[#5a916e] py-2 to-teal-500 bg-clip-text text-xl lg:text-4xl box-content font-extrabold text-transparent text-center select-none">
              {t("contact-whatsapp")}
            </p>
          </a>
          <a href="mailto:info@digitalforge.be" rel="noreferrer" className="flex flex-row gap-2 items-center">
            <MdEmail size={128} className="h-12 w-12 lg:h-24 lg:w-24" color="#3954ed" />
            <p className="bg-gradient-to-r blur-xs from-[#3954ed] to-blue-400 py-2 bg-clip-text overflow-visible text-xl lg:text-4xl box-content font-extrabold text-transparent text-center select-none">
              {t("contact-mail")}
            </p>
          </a>
        </div>
      </BoxDiv>
    </div>
  );
}
