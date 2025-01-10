import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image
          priority
          src="/assets/images/services/e-commerce.jpg"
          alt="E-Commerce"
          className="-z-10"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-red-500 font-semibold">/{t("web-services")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("e-commerce-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-2xl">
          <p>{t("e-commerce-intro")}</p>
          <p>
            <strong>{t("e-commerce-title-1")}</strong>
            <br />
            {t("e-commerce-text-1")}
          </p>
          <p>{t("e-commerce-text-1-b")}</p>
          <p>
            <strong>{t("e-commerce-title-2")}</strong>
            <br />
            {t("e-commerce-text-2")}
          </p>
          <p>
           {t("e-commerce-text-2-b")}
          </p>
          <p>
            <strong>Sunduğumuz B2B E Ticaret Sitesi</strong>
            <br />
            Küçük işletmeler için oluşturmuş olduğumuz e-ticaret sitesi içerisinde firma olarak ülkemizin dev firmalarına kadar ölçeklenebilir B2B bay
            otomasyonları konusunda gerekli olan bütün işlemleri sunmaktayız. Binlerce fiyat ve kampanya içerisinde sizlere sunduğumuz en uygun otomasyon
            sayesinde bayilerimizle sürekli olarak sizlere destek vermekteyiz. Firma olarak sizlere sunmuş olduğumuz bu e-ticaret siteleri içerisinde farklı
            para birimleri ile satışlar gerçekleştirebilirsiniz. Satış ve pazarlama otomasyonumuz sayesinde plasiyerleriniz daha güçlü ve anlık veri akışının
            keyfini doyasıya yaşayabilirsiniz.
          </p>
          <p>
            <strong>Firma Olarak Sizlere Verdiğimiz Hizmetler</strong>
            <br />
            E-ticaret yazılımı konusunda ya sizler için gerektiği kadarını vermek ya da ufkunuzu geliştirmek adına çalışmalar yapmaktayız. Neirt firması olarak
            birbirinden eşsiz sektörel modüller ve kullanıcı dostu zengin ara yüz tasarımları sayesinde güçlü bir e-ticaret hizmeti sizlere sunmaktayız. Firma
            olarak sizlere bağımsız hosting, sunucu gibi barındırma hizmetlerini istediğiniz şekilde sağlayabiliriz. Ayrıca aldığınız ürünün ücretini
            istediğiniz şekilde bizlere ödeyebilirsiniz. Ayrıca sizlere sunduğumuz pazaryeri entegrasyonu sayesinde birçok platforma entegre olabilirsiniz.
          </p>
          <p>
            Firma olarak siz değerli müşterilerimize satın almış olduğunuz ürün ve hizmetler doğrultusunda destek ve yardım sunabilmek adına her türlü yardımı
            sunabilmekteyiz. Her daim müşterilerimiz bizlerle iletişime geçebilmektedir. Satın alacağınız e-ticaret sitesi içerisinde çoklu ve para biri gibi
            farklı seçenekleri kullanabilirsiniz. XML ile binlerce ürünü en hızlı şekilde sitenize entegre edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
