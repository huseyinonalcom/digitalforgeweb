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
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">/{t("web-services")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("e-commerce-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-2xl">
          <p>
            Ülkemizin önde gelen firmalarından biri olarak siz değerli müşterilerimize profesyonel ve geniş bir iş yelpazemiz içerisinde sizler için kurumsal
            web tasarım, web yazılım, kurumsal kimlik tasarımı ve dijital pazarlama alanı içerisinde çözümler sunmaktayız. Firma olarak bizler için artık iş
            olmaktan ziyade bir sanat ve parlak fikirlerin beraber harmanlandığı bir üretim süreci olan web tasarım geliştirme süreci içerisinde hedef kitlemize
            her daim en doğru görsel mesajları iletmek birinci ilkemiz konumundadır. Bizlere sipariş verdiğiniz işe bağlı olarak her daim marka mesajınızı en
            kalıcı ve doğru şekilde aktarmak adına sürekli olarak dijital dünyanın sunmuş olduğu kolay kullanım ve mükemmel tasarlanan web sitelerini sizlere
            sunmaktayız.&nbsp;
          </p>
          <p>
            <strong>Web Tasarım Konusun da Sunduğumuz Hizmetler</strong>
            <br />
            Neirt firması olarak özel web tasarım tasarlama süreci içerisinde ve sonunda müşterilerimize sunmuş olduğumuz bazı avantajlarımızın mevcut olduğunu
            söyleyebiliriz. Bu süreç içerisinde ilk olarak pratik bir yönetim paneline sahip, modern ara yüzlü tasarımlı web siteler aracılığıyla 7/24 açık
            olacak şekilde kurumsal sanal ofisimizle hizmet sunmaktayız. Bu sayede müşterilerimiz bizlerle iletişim haline geçmek istedikleri zaman kendileri
            ile ilgilenebilmekteyiz.
          </p>
          <p>
            Bununla birlikte müşterilerimize son teknolojik özelliklere sahip olan yazılım alt yapısı ile gelişmiş modül sistemleri ve özel yazılım çözümlerini
            sunabilmekteyiz. Ayrıca özel teklif stratejilerimiz sayesinde Google aramaları içerisinde ilk sıralar içerisinde çıkmanız konusunda size destek
            olmaktayız. Bununla birlikte optimizasyon analizlerini doğru bir şekilde gerçekleştirerek müşterilerimizin arama motorları içerisinde sağlam bir yer
            edinmelerini sağlamaktayız. Firma olarak akıllarda kalıcı olacak, unutulmayan konsept tasarım kalitesi içerisinde kurumsal kimlikler meydana
            getirmekteyiz. Bunun yanında sizler adına sosyal medya sayfalarınızı kontrol ederek sahip olduğunuz kitlenin artması konusunda destek olmaktayız.
          </p>
          <p>
            Firma olarak vermiş olduğumuz hizmet içerisinde ayrıca web sitenizi sürekli olarak değişmekte olan mobil dünyaya duyarlı bir web tasarımı şekline
            getirmekteyiz. E-ticaret ürün ekleme hizmeti iş süreçlerinizin hızlı bir şekilde gerçekleşmesini sağlayarak sizlere avantaj sağlayacaktır. Ayrıca
            markanızı ve ürünlerinizi tescil ederek sizler adına patentli bir hale getirmekteyiz. Böylece internet ortamı içerisinde üretmiş olduğunuz
            içeriklerin çalınma ihtimalini en alt düzeylere indirmekteyiz.
          </p>
          <p>
            <strong>Özel Web Tasarım Süreci Nasıl Gerçekleşmektedir?</strong>
            <br />
            Özel web tasarım konusunda bizleri tercih edecek olan müşterilerimizin ilk olarak bizlerle iletişime geçmeleri gerekmektedir. Bizlerle iletişim
            kuran kişi hangi konu için bir web tasarımı istediğini belirttikten sonra gerekli olan bütün bilgiler alındıktan sonra gerekli olan bütün süreçler
            başlamaktadır. Bu süreç içerisinde müşterilerimizin bizlerden talep etmiş oldukları isteğe bağlı ara yüz çizimleri, özel kodlama işlemleri gibi
            konularda ayrıcalık tanımaktayız. Bu işlemler içerisinde ayrıca özel olarak oluşturmuş olduğumuz web tasarımlarımızın son derece özgün ve güvenlikli
            kodlama sürecinden geçtiğini söyleyebiliriz. Tasarımlarınız bittikten sonra işlem içerisinde çıkarmak ya da eklemek istediğiniz durumları bizlere
            iletebilirsiniz.
          </p>
          <p>
            <strong>Özel Web Tasarım Fiyatları</strong>
            <br />
            Özel web tasarım konusunda net bir fiyat çıkarılması neredeyse zordur. Bu işlemler içerisinde seçilen pakete ve işlem özelliğine bağlı olarak farklı
            fiyatlandırmalar ortaya çıkabilmektedir. Firma olarak her daim müşterilerimize en uygun fiyatları ortaya çıkarmak adına fiyatlandırma konusunda
            çeşitli paketler içerisinde hareket etmekteyiz. Firmamız içerisinde 500 TL’den başlayan fiyatlarla özel web tasarım hizmetlerinden
            faydalanabilirsiniz. Bu fiyat içerisine çeşitli hizmetlerin eklenmesi sonucunda değişiklikler meydana gelebilmektedir. Site içerisinde herhangi bir
            güvenlik açığının olmamasına ya da sitenin çökme gibi durumlarına karşı hemen sizlere destek olacak teknik ekibimiz bulunmaktadır. Böylece zaman ve
            kitle kaybı yaşamazsınız.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
