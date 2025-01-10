import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image priority src="/assets/images/services/ios.jpg" alt="iOS" className="-z-10" fill style={{ objectFit: "cover", objectPosition: "top" }} />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">/{t("mobile-services")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("ios-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-2xl">
          <p>
            Apple çok kullanamayan kişilerin merak ettiği konulardan biri olan nasıl Windows üzerinde yapıldığı sorusudur. Bu konuda size ençok yardımcı olacak
            uygulama olan Mac Os kurmanız önerilmektedir. Testler için ios yüklenmesine gerek bulunmaz. İpad,iphone ve ipod olması gerekmeyen Xcode ile birlikte
            geliştirme ortamında başarı sağlayan ios simülatörü bulunmaktadır. Hızlı kullanılabilen simülatör uygulama için kolaylık sağlamaktadır. Cihazların
            CPU’sunu kullanan ios simülatörü ios mobil uygulama kullanıcının daha kolay kullanmasında deneyim kazandırıyor. Satır kodlarının dönüşümden
            geçmesini sağlayan Android animatörleri cihazda CPU taklit ederek bu işlemi yapıyor.
          </p>
          <p>
            <strong>Mobil Uygulama Geliştirme</strong>
            <br />
            İlk cep telefonunun mucidi Martin Cooper tarafından GSM teknolojisi ortaya çıkmış, ardından 20 yıl sonra 1994 yıllarında cep telefonu görüşmesi
            gerçekleşmiştir. İlk sms 1992 yılında atılmıştır. Türkiye de sms kullanımı 1995 yılında olmuştur. Bu yıllardan sonra teknolojinin yenilenmesi ile
            birlikte akıllı telefon olan iphone 2G modelleri multimedya ve internet kullanılabilen özelikte telefonlar satışa çıkarılmıştır. Apple SDK gelişimi
            2007 yılının Ekim ayında gerçekleşmiş ve 2008 yılında SDK geliştiricilere açık bir şekilde kullanıma açılmıştır. Teknoloji ile birlikte internet
            kullanımı ile birlikte birçok özellikler gelişmiştir.
          </p>
          <p>
            <strong>Xcode İçin Hangi IDE Kullanılmalı</strong>
            <br />
            Ücretsiz şekilde Appstore’dan indirebileceğiniz tek IDE Xcode’dir. Ücretsiz olarak bu IDEyi MacOS işletim sistemi olan bilgisayarlara indirmeniz
            mümkün. Uygulama geliştirilen mecralar ise şu şekilde listelenmiştir.
          </p>
          <ul>
            <li>WatchOS – Akıllı saatler</li>
            <li>MacOS – Bilgisayarlar</li>
            <li>İos,İpod ve iPhone</li>
            <li>TvOS – Apple TV</li>
          </ul>
          <p>
            2015 yılında en çok rağbet gören programlama dilleri tack Overflow Developer olmuştur. 2015 te en sevilen programlama dili kategorisinde 2. Sırada
            yer almıştır. Bazı diller ne kadar karışık olsa da bazı programlama kodlarını öğrenerek ios mobil uygulama geliştirmelerini daha kolay bir şekilde
            yapabilirsiniz.
          </p>
          <p>
            <strong>Bilgisayar Ve MacBook İle İos Geliştirilir mi?</strong>
            <br />
            Bilgisayardan da ios geliştirilebilir. Bilgisayarınızın intel işlemci olması İos uygulama için yeterli olmaktadır. MacOS işletim sistemi sanal
            makine da kurulur. Bu uygulama maddi açıdan daha uygun olarak önerilecek uygulamalardan biridir. Bunun dışında Apple bilgisayarına sahip olmak
            gerekmektedir. Bu ürünler iMac, MacMini, MacBook gibi ürünlerdir. Programlama dilleri olarak iki dil seçeneği bulunan İos mobil uygulama
            işlemlerinde Objective C ve Swift dilleri kullanılmaktadır.
          </p>
          <p>
            <strong>Syntax: Farklı ve öğrenilmesi diğerlerine göre zordur.</strong>
          </p>
          <p>
            <strong>Objective C: OPP dil 1980’de smaltalk ile geliştirilmiş dil olarak kullanılır ve C temel alınmıştır.</strong>
          </p>
          <p>
            AppStore da uygulamalarında en çok kullanılan Objective kolay yok olmayacak özelliğe sahip dil olarak uygulamalarda kullanımı uygun İos mobil
            uygulama olarak yerini koruyacak. Uygulama olan ios mobil uygulamalarında mutlaka Objective ile karşılaşacağınızı unutmayın.Apple kütüphanesinden
            yararlanıp Swift’e geçiş yapıp sıkıntı yaşamadan kullanabilirsiniz. Genelde Objective ile kullanılan C fazla bilmeseniz de C101 geçiş yaptığınızda
            kodları anlamanız açısından daha yararlı olacaktır. Bu konuda C’ ye giriş derslerini izleyerek daha kolay şekilde İos mobil uygulama sistemini
            geliştirebilirsiniz.&nbsp;
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
