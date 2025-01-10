import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image priority src="/assets/images/services/adwords.jpg" alt="AdWords" className="-z-10" fill style={{ objectFit: "cover", objectPosition: "top" }} />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">/{t("marketing-services")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("adwords-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-2xl">
          <p>
            Google Adwords Reklamları, müşterilerinizi en ilgili ve spesifik şekilde hedeflemenizi sağlayan, ücretli arama ağı reklamcılığı için önde gelen bir
            platformdur. Çevrimiçi reklam pazarında, Google hakimdir. Bu yüzden birçok sektördeki şirketler, çevrimiçi reklam vermek için reklam yönetimi
            platformu Google Reklamları kullanıyor .
          </p>
          <p>
            Çevrimiçi etkileşim ve iletişimlere gittikçe daha fazla önem verildiğinden, işletmeler mevcut muazzam potansiyel çevrimiçi reklam fırsatlarını
            gerçekleştirmeye başlıyor. DigitalForge’te, özel Google Adwords Reklam yöneticilerimiz bütçeniz içerisinde maksimum sonuç almak için çalışıyor.
            İşletmelerinizin benzersiz kampanyasında daimi iyileştirmeler oluşturmak için işinizle yakından ilgileniyoruz.
          </p>
          <p>
            <strong>Şirketiniz Neden Google Reklamları Kullanmalı?</strong>
            <br />
            Google Adwords Reklamları, Bing Ads gibi rakiplerinden çok daha iyi performans gösteren ücretli arama için en gelişmiş platforma sahiptir. Google
            Reklamları, reklamverenlerin her kampanya için günlük bir bütçe belirlemesine, her reklam grubu ve anahtar kelime için teklif seçmesine olanak
            tanır. Kampanya ayarları, reklam programları, yer ayarları ve mobil cihaz ayarları gibi özellikleri içerir. Ayrıca, Reklam Anahtar Kelime
            Planlayıcısı, kampanyalarınız için anahtar kelimelerin gücünü beyin fırtınasıyla değerlendirmenize olanak tanır.
          </p>
          <p>
            Google, reklam kampanyasındaki her anahtar kelimeye bir kalite puanı atar. Kalite puanı, Google aramadaki en üst konumda bulunan bir reklamın
            tıklama başına maliyetini kısmen belirler. Reklam kampanyalarınızın kalite puanını artırmak istiyorsanız, DigitalForge size yardımcı olabilir. Tıklama
            oranını ve çevrimiçi dönüşüm oranını iyileştirmek için reklam alaka düzeyi ve açılış sayfası içeriğini optimize ederek, Adwords uzmanlarımız
            hesabınıza ilişkin kalite puanını artırabilir ve bu sayede web sitenize en nitelikli ziyaretleri yapmanızı sağlar.
          </p>
          <p>
            Müşterinin işini, kendi uzmanlığımızla yıllarca süren uzman Adwords yönetimi tecrübesiyle birleştirme haline getirme arzumuz, muazzam erişime ve
            potansiyele sahip düşük maliyetli bir reklam biçimine eşittir.
          </p>
          <p>
            PPC (tıklama başına ödeme) reklamcılığı, sizi arama motoru sonuç sayfalarında en üst sıralara yerleştirerek anında trafik sunar. Tüm Türkiye’de ki
            aramaların üçte ikisini Google’ın muhasebeleştirmesiyle <strong>Google Reklamları (AdWords)</strong>, en etkili PPC reklam aracı olmaya devam
            etmektedir. Sitenizi yalnızca arama yapanları öne çıkarmayacak şekilde yerleştirmekle kalmaz, aynı zamanda Google Reklamları kaydıyla mevcut SEO
            stratejilerinizi tamamlayarak anahtar kelimeleri doğru bir şekilde test edebiliriz.
          </p>
          <p>
            <strong>Rakip Kampanya Analizi</strong>
            <br />
            Rakiplerinizin Google reklam kampanyalarını nasıl yürüttüğünü anlamak, onların önüne geçebileceğiniz anlamına gelir. Size tekliflerine,
            harcamalarına ve açılış sayfalarına ilişkin analizleri düzenli olarak iletiyoruz.
          </p>
          <p>
            Sertifikalı profesyoneller tarafından oluşturulan ve sonuç odaklı kampanyalar içeren bu geniş potansiyel müşteri ağlarından yararlandığınızdan emin
            olun. Kampanya yönetiminizi, AdWords’ü yönetme konusunda yetkinliği olan bir uzmana bırakın. Web sitesi sahiplerinin, anahtar kelimeler ve tıklama
            başına ödeme reklamcılığı kullanarak istedikleri trafik türünü oluşturmasına yardımcı olmaya çalışıyoruz. Adwords danışmanlık hizmetlerimiz her
            ölçekteki kuruluşlar için tasarlanmıştır ve ölçeklenebilir ve yönetilebilir kampanyalar oluşturmaya odaklanır.
          </p>
          <p>
            Bir kampanya oluşturduğunuzda, ekibinizin konusu veya odağıyla uyumlu bir reklam grubu oluşturması şarttır. Spor ayakkabılar için bir kampanya
            başlatıyorsanız, örneğin, reklam gruplarınız kırmızı spor ayakkabılar, kahverengi spor ayakkabılar ve yeşil spor ayakkabılar içerebilir. Bu reklam
            grupları farklı anahtar kelimeler içeriyor. Örneğin, kırmızı spor ayakkabılar için reklam grubunuz, “kırmızı spor ayakkabılar”, “kırmızı bağcıklı
            spor ayakkabılar” ve “gündelik kırmızı spor ayakkabılar” gibi anahtar kelimeler içerebilir. Tüm bu anahtar kelimeler ürününüzü açıklar ve yüksek
            değerli aramaları hedefler. Ekibiniz uyumsuz reklam grupları ve anahtar kelimeler oluşturursa, reklam kampanyanızın performansını düşürebilir (ve
            maliyetlerini artırabilir). Bunun nedeni, reklamlarınızın , reklamlarınızın, anahtar kelimelerinizin ve açılış sayfalarınızın alaka düzeyini ve
            kalitesini değerlendiren bir kalite puanı almasıdır.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
