import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image priority src="/assets/images/services/android.jpg" alt="Android" className="-z-10" fill style={{ objectFit: "cover", objectPosition: "top" }} />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">/{t("mobile-services")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("android-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-2xl">
          <p>
            Günümüzde hiç şüphesiz Android işletim sistemleri mobil cihazlar için tartışmasız en popüler platformlardan bir tanesidir. Android işletim sistemi
            tüm interneti, tablet, akıllı telefon ve diğer bütün mobil cihazlar için kullanıcıya uygun bir hale getirmektedir. Bu süreç içerisinde birbirimizle
            iletişim kurma biçimimizi değiştirmektedir.
          </p>
          <p>
            <strong>Android Mobil Uygulama Hakkında</strong>
            <br />
            Android mobil uygulama konusunda neredeyse bütün kullanım alanı içerisindedir diyebiliriz. Ev ortamı içerisinde, ofiste, kameralarımızda,
            saatlerimizde, arabalarımızın içerisinde ve hatta TV’lerin içerisinde dahi Android bulunuyor diyebiliriz. Uygulama geliştiriciliği ile uğraşmakta
            olan kişiler için Android, akla gelebilecek her türlü uygulamayı geliştirmek için heyecan verici fırsatların sunmakta olan açık bir platformdur. Her
            geçen zaman dilimi içerisinde kullanıcı sayısını artırmakta olan bir tabana sahip olan Android, yeni uygulamarı dağıtmak için yeroleşik bir açık
            Pazar alanına sahiptir. Yüzlerce uygulamanız var olsun ya da olmasın, Android platformu sayesinde mobil iletişimin gücünü yakalamanız için benzeri
            görülmemiş fırsatları yakalayacaksınız.
          </p>
          <p>
            Java, özellikle Android platformunun altını önemle çizmektedir. Bundan dolayı firmamız içerisinde çalışmakta olan Java konusunda uzman olan teknik
            arkadaşlarımız Android telefonlarında ve diğer cihazlarınız içerisinde kusursuz bir şekilde performans gösterecek olan uygulamak geliştirmek adına
            geniş tabanlı Java kaynaklarını kullanabilmektedirler. Siz değerli müşterilerimiz için sorunsuz bir şekilde çalışmakta olan uygulamalar geliştirmek
            son derece önem verdiğimiz bir konudur. Bu hizmetlerimizden son derece memnun kalacağınızı belirtebiliriz.
          </p>
          <p>
            <strong>Firmamız Hakkında Bazı Bilgiler</strong>
            <br />
            Android mobil uygulama geliştirme konusunda kendini geliştirmekte olan firmamız bünyesi içerisinde çalışmakta olan deneyimli elemanlar sayesinde
            Android uygulamalarını oldukça rahat bir şekilde geliştiriciliğini üstlenebilmektedirler. Android Emulator. Android eklenti araçları (ADT) ve diğer
            son derece değerli mobil uygulamalarını geliştirmek adına kullanılmakta olan araçlarını içermekte olan Android Yazılım Geliştirme Kitini oldukça
            rahat ve profesyonel bir biçimde kullanabilmektedirler. Bu araçlar iyi bir ortam içerisinde kullanılır ve mobil uygulama geliştiriciliği içerisinde
            iş gereksinimlerinizin en iyi şekilde karşılayan sürekli olarak yüksek performans sağlayan mobil uygulamalar oluşturmanıza oldukça yardım edecektir.
            Firmamız içerisinde üretimini gerçekleştirdiğimiz mobil uygulamaları kusursuz bir şekilde kullanabilirsiniz.
          </p>
          <p>
            <strong>Android Mobil Uygulamaları Geliştirme Sonrası Süreç</strong>
            <br />
            Android mobil uygulamaları içerisinde geliştirme işlemlerini tamamlamış olduğumuz programların birinci sınıf bir şekilde açık pazara açık erişime
            hazır olduğunu söyleyebiliriz. Google Play, sizlere ait olan şirketinizin Google Play üzerinde yeni bir uygulama yayınladığınız zaman dünyada
            Android sisteme sahip olan ve Google Play kullanan milyonlarca kullanıcıya erişim olanağı sunmaktadır. Aynı zaman içerisinde kontrolün sizlerin
            elinde kalmasına yardımcı olmaktadır. Bunun nedeni Google Play sizlere ait olan uygulamalarınızı nasıl satacağınıza karar vermeniz amacıyla sizlere
            izin vermektedir. Ne zaman ya da kaç uygulamaya sahip olacağınız konusunda herhangi bir şekilde sizlere bir kısıtlama getirmemektedir. Hangi müşteri
            gruplarına satış gerçekleştirdiğiniz gibi kontrol işlemleri her daim sizlerin elinde durmaktadır.
          </p>
          <p>
            Google Play üzerinde kullanıma sunmuş olduğunuz uygulamalarınız direkt olarak kullanıcılara ulaştığından dolayı herhangi bir şekilde gecikme olmaz
            ve kullanıcılar indirdikleri gibi uygulamanızı kullanabilmektedirler.
          </p>
          <p>
            Google Play içerisinde bir uygulama yayınlandığınız zaman ücretsiz bir şekilde mi sunum yapacağınızın ya da belli bir miktar ücret ile mi satılacağı
            gibi konular da karar vermek sizlerin elindedir. Ayrıca uygulama geliştirici olarak sizler gerektiği zaman satış içerisinde kullanılacak para
            birimini ve satış miktarını değiştirme haklarına sahip olmaktasınız.
          </p>
          <p>
            Firma olarak biz sizlere bu süreçler içerisinde; Sunucu uygulama geliştirici, Android ahize test çözümleri, Google Play üzerinde uygulama sunumu,
            Özel uygulama geliştirme gibi birçok konuda hizmet ve destek sunmaktayız.&nbsp;
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
