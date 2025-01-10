import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image
          priority
          src="/assets/images/services/branddesign.jpg"
          alt="Brand Design"
          className="-z-10"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">/{t("brand-services")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("brand-design-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-2xl">
          <p>
            Markanız, işinizin özüdür. Bir şirketin <strong>kurumsal kimliği çalışması</strong>, kurumun özünü içine alan benzersiz bir ticari marka, renk
            paleti, tema ve grafik görüntülerin tamamıdır. Logolar, sloganlar ve renkler, bir şirketi rakiplerinden farklı kılan kurumsal kimlik tasarım
            paketlerinin bir parçasıdır. Marka kimliği tasarım hizmetlerinin önemli bir kısmı pazarlanabilirliktir. Bir ürün, kişi veya kuruluş, sosyal medyada
            ve diğer iletişim kanallarında rahatlamak için tanımlanmış ve uyumlu bir marka stratejisine ihtiyaç duyar. Reklamlar, yazılar ve web tasarımı
            sayesinde, marka kimliğinin etkili olması için aynı olması gerekir. DigitalForge olarak, marka kimliği tasarım uzmanlarımız, güzel ve etkili bir marka
            kimliği oluşturduğumuz ve yarattığımız kurumsal kimlik tasarımı hizmetleri sunmak için şirketlerle yakın işbirliği içindedir.
          </p>
          <p>
            Marka kimliği tasarım hizmetlerimizin bir parçası olarak, şirketler, reklam ve marka kullanımları için tam bir tasarım ve grafik görüntüleri paketi
            alır. Bizimle çalışın, şirketinizin neyle ilgili olduğunu keşfetmenize yardımcı olacağız. Marka kültürünüz kurumsal markalaşma kimliğinin en önemli
            parçalarından biridir. Çalışanlarınızı ve görev beyanınızı göstermeden kendinizi rakiplerinizden nasıl ayrı tutabileceksiniz? Şirketinizin doğasında
            var olan marka kültürü, çalışanlarınızın ve işinizin bir karışımıdır, bir marka vaadiyle birlikte. Başarılı markaları ve garantili sonuçları ve ürün
            memnuniyetini nasıl sunduğunu düşünün; DigitalForge’in marka kimliği tasarım hizmetleri ile elde edeceğiniz şey budur.
          </p>
          <p>
            Kurumsal bir marka kimliğinde her şey görsellerle ilgilidir. Bir logo, resim veya reklam tüketicilerden duygusal bir tepki almalı ve şirketinize
            bağlandıkları zihinsel bir imaj oluşturmalıdır. Yazı tipleri, tasarım, renkler, doku ve diğer grafik tasarım taktikleri, sizin ve sektörünüz için
            mantıklı ve tutarlı bir kurumsal kimlik tasarımı oluşturmak için marka kimliği tasarım hizmetlerinize bağlanmak için kullanılır.
          </p>
          <p>
            DigitalForge, markanızı belirlemede ve müşteri marka bilincini oluştururken size yardımcı olmamıza yardımcı olmak için pazarlama sektöründe lider
            yönergeleri kullanır. Kurumsal kimlik tasarımı hizmetlerimizde, yeni şirketinizi kurmaya veya yepyeni kimliğinizi sadık müşterilerinize göstermeye
            hazır olmanızı sağlayan eksiksiz bir tam paket hizmet kümesi sunuyoruz.
          </p>
          <p>
            Demografik tanımlamaya benzer şekilde, kurumsal kimlik tasarımı hizmetlerinde hedef bir müşteri tanımlanması sonuçta çok önemlidir. Ürün veya
            hizmetlerinizi kimlerin satın alma ihtimalinin yüksek olduğunu bulmak ve bunları ortak davranış ve özelliklerle ilişkilendirmek için pazar
            araştırması uzmanlarını kullanıyoruz.
          </p>
          <p>
            Kurumsal kimlik tasarımı paketinin en önemli kısımlarından biri logonuzdur.. Logonuz, müşterilerinizin logonuzu hizmetlerinizle zihinsel olarak
            ilişkilendirmeleri için görsel bir ipucudur. Marka kimliği tasarım hizmetlerinde aradığınız sonuçları elde etmek için temiz, açık ve özlü olması
            gerekir.
          </p>
          <p>
            <strong>DigitalForge, markanız için ne sunar?</strong>
            <br />
            <strong>Akılda kalıcılık:</strong> Hedef kitlenizin aklında unutulmazsınız. Göze çarpmanızı ve tanınmanızı sağlarız.
          </p>
          <p>
            <strong>Markalaşma:</strong> Kurumsal kimlik tasarımı hizmetlerimizden oluşturulmuş bir marka kimliği ile, markanız rakiplerinizden ayrışacak ve
            şirketiniz için bir miras yaratacaktır.
          </p>
          <p>
            <strong>Arzu yaratma:</strong> Duygu ve düşündürücü imajlar, grafikler sayesinde DigitalForge, şirketinize ürünleriniz ve hizmetleriniz için mükemmel marka
            kimliği tasarım hizmetleri sayesinde arzu yaratma olanağı sağlar.
          </p>
          <p>
            Kurumsal kimliği yaratan görsel varlıklar ve tasarım öğeleri doğru kullanılmalı ve güncel tutulmalıdır. Kurumsal kimlik yönetimi, tüm ilgili görsel
            yönleri ve tasarım öğelerini kontrol etme ve yönetme ve tüm çalışanlar tarafından doğru kullanılmalarını sağlama sürecidir.
          </p>
          <p>
            ‘Markanız’, şirketinizin pazarda oluşturduğu itibardır. Kişisel marka kimliği tasarımı hedef kitleye, ürün veya hizmet bağlayan güçlü bir iletişim
            aracıdır. Bir Markalaşma ve Kimlik tasarımı yapıldığında, müşteri ile ürün veya hizmet arasında güçlü bir bağlantı oluşturur. Şirketin iş üretmesi
            için gereken mesajları iletir. Mesaj, ‘Beni Satın Al’ ile ‘Rakipler arasından Beni Seç’ den herhangi bir şey olabilir. Müşterileri harekete geçmeye
            teşvik etmek istiyorsanız, bu mesajı dikkatle iletmelisiniz.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
