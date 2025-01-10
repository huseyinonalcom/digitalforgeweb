import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image
          priority
          src="/assets/images/services/catalogue.jpg"
          alt="Catalogue"
          className="-z-10"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">/{t("brand-services")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("catalogue-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-2xl">
          <p>
            İnternet artık hayatımızda oldukça önemli bir noktada yer alıyor. İnternet kullanımı o kadar küçük yaşlara kadar indi ki hayatımızın her bir anını
            internette yaşıyoruz. İnternet bu kadar önemli bir konumda iken dijital hayatın öncelikleri ve hayatımıza getirdikleri de zaman zaman
            farklılaşabiliyor. Artık internet üzerinden aradığımız her şeyi bulabiliyoruz. Bir çok kişi mağazaya gitmeye gerek görmüyor ve oturduğu yerden
            siparişini vererek istediklerini satın alabiliyor. İşte bu noktada da e katalog hizmetleri devreye giriyor.
          </p>
          <p>
            <strong>Neden E-Katalog?</strong>
            <br />
            E-kataloglar aslında bir internet sitesinin aynasıdır. Bu ayna ne kadar kaliteli olursa internet sitesine olan rağbet de o kadar artacaktır. Bu
            nedenle kullanacağınız e katalog tamamen sitenizi yansıtan ve ürünlerinizi tanıtan bir katalog şeklinde hazırlanmış olmalıdır. Bu hem müşteri
            kapasitenizi arttıracak hem de ürün satışlarınızı geliştirecektir. E katalog ile siteyi ziyaret eden müşteriler almak istedikleri ürünler hakkında
            detaylı bir şekilde bilgi sahibi olmayı isterler. Ürünün kısaca bilgisi ve fiyatı katalog içerisinde mutlaka yazmalıdır. Ayrıca e katalog sayesinde
            müşterileriniz almaya niyetli olmadığı bir ürünü bile satın alabiliyor. Bir ürün için e kataloğa bakınca diğer ürünün de örneğin indirimde olduğunu
            görünce alma niyeti yok ise bile bu ürünü kolayca satın alabiliyor.
          </p>
          <p>
            <strong>E-Kataloğun Önemi</strong>
            <br />
            E-katalog aslında kurumsal kimliğin bir göstergesi olmaktadır. Firmalar baskılı ortamda müşterilerine sundukları imkanları artan teknoloji ile
            birlikte internet ortamına geçirmeyi amaçlamaktadırlar. E kataloğun renkli görselleri sayesinde ürün bilgileri rahatça tanıtılabilmektedir. Bu da
            hem müşteri hem de şirket açısından büyük rahatlık oluşturmaktadır. Firmamız bu anlamda kurumsal bir kimliğe önem verdiği e katalog hizmetini
            oldukça önemsiyoruz.
          </p>
          <p>
            <strong>Dijital Kataloğun Eşşsiz Deneyimi Uygun Fiyata!</strong>
            <br />
            Firma olarak günümüzde oldukça rağbet gören e-katalog hizmetini oldukça uygun fiyata müşterilerimize sunmaktayız. Yılların tecrübesi ve modern çağın
            getirmiş olduğu teknolojiler ile beğeni ile sunmak istediğiniz e-katalog çeşitlerini size sunuyoruz. E-Katalog hizmeti oldukça ön plana çıkan bir
            hizmet olarak karşımıza çıkıyor. Böylesine rağbet gören hizmetin çok uygun fiyata yapılıyor olması müşterilerimize verdiğimiz önemin ve müşteri
            memnuniyetini çok fazla önemsediğimizin bir göstergesidir. E katalog hizmetimizde siz talep ettiğiniz hizmete göre fiyat ödemesi yaparsınız.
            Talebinizde olmayan ya da bilgi sahibi olmadığınız herhangi bir uygulama için sizden fiyat alınmaz. Yukarıda da bahsettiğimiz gibi piyasa
            koşullarına göre firma olarak uygun fiyat garantisini müşterilerimize vermekteyiz. Bu anlamda müşterilerimizden olumlu geri bildirimler almaktayız.
          </p>
          <p>
            <strong>E-Kataloglarımız Hakkında</strong>
            <br />
            E-kataloglarda görselliğe çok önem veriyoruz. Bu nedenle de renkli baskıları kullanıyoruz. Ön plana çıkmasını istediğiniz bilgileri sizden aldığımız
            için katalogta bu şekilde düzenlemeler yapıyoruz. Müşterilerin dikkatini çekecek noktalar için yoğun renk tonlaması kullanıyoruz. Kataloglarımız
            internet üzerinden hangi sürüm kullanılırsa kullanılsın çok rahat bir şekilde açılmaktadır. Özenli bir içerik ile hazırlandığını siz hazırlanma
            aşamasında zaten anlayacaksınız. Her türlü güncellemeyi yapabilme imkanına sahipsiniz. Kullanımı oldukça kolay olan e-katalogumuz sayfa düzeninde
            belirli bir kural içermektedir. Bu kural tamamen müşterinin rahat kullanımı içindir. Dilerseniz kataloglarımıza video ve fon müziği de
            ekleyebiliyoruz. Müşterilerimizin kullanmakta olduğu bir slogan var ise bunu da kataloğun ana sayfasında görsel olarak sunabiliyoruz.
          </p>
          <p>
            E-katalog yukarıda da bahsettiğimi gibi kurumsal bir kimliğin göstergesidir. Biz firma olarak bu hizmeti müşterilerimizi önemsediğimiz için uzman
            ekibimiz ile birlikte çok uyun fiyata sunmaktayız. Fiyat garantili çalışmamız ve işinde tecrübeli personelimiz sayesinde müşteri memnuniyetimiz her
            geçen gün artarak devam etmektedir.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
