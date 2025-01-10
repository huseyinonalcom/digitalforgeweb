import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image priority src="/assets/images/services/seo.jpg" alt="SEO" className="-z-10" fill style={{ objectFit: "cover", objectPosition: "top" }} />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">/{t("marketing-services")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("seo-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-2xl">
          <p>
            SEO, diğer bir deyişle arama motoru optimizasyon hizmeti Google, Yahoo! ve Bing gibi arama motorlarında ilgili sonuç sayfalarındaki görünürlüğünüzü,
            sıralamanızı artırır. Görünürlüğünüzü artırmak için web sitesi trafiğinin artmasına kapı aralayabilecek bir strateji ve teknik planlar kullanır.
            SEO, arama motoru reklamcılığı gibi diğer dijital pazarlama stratejileriyle karşılaştırıldığında, bir gecede sonuç sunmamaktadır. SEO’nun sonuç
            vermesi birkaç ay sürebilir. Ancak, bu sonuçlar genellikle beklemeye değer. Ciddi bir iş büyümesi arıyorsanız, SEO veya arama motoru optimizasyonu
            sizin için bir stratejidir. Birçok iç pazarlama departmanı birden fazla sorumluluk üstlendiğinden ve SEO konusunda bir özgeçmişe sahip olmadığından,
            işletmelerin profesyonel SEO yönetim hizmetlerine yatırım yapması yaygındır. İşletmenizin bir ajansla ortak olup olmadığı veya stratejinizi şirket
            içinde yönetip yönetmemek, SEO yönetiminin neler içerdiğini anlamak çok önemlidir. Bu şekilde, aslında şirketiniz için geliri sağlayan rekabetçi bir
            strateji için bir temel oluşturabilirsiniz.
          </p>
          <p>
            Günümüzde, bir SEO (arama motoru optimizasyonu) stratejiniz yoksa, bir pazarlama kampanyanız olmaz! İşte bu yüzden SEO söz konusu olduğunda nasıl
            sonuç alacağını bilen bir SEO yönetim şirketine ihtiyacınız var. Tecrübeli SEO pazarlama ajansı ekibimiz, ihtiyaçlarınız ne olursa olsun için bir
            çözüm üretebilir. SEO’da internet pazarlamacılığına web sitenize birkaç anahtar kelime koymaktan çok daha fazlası var.{" "}
            <strong>Uygun fiyatlı SEO</strong> pazarlamasının da önemli olduğunu biliyoruz.
          </p>
          <p>
            Bu yüzden diğer SEO pazarlama şirketleri gibi ihtiyacınız olmayan SEO hizmetleri için ödeme yapmıyoruz. İşinizi analiz eder, en çok yardım
            edebileceğimiz yeri buluruz ve size ihtiyaçlarınıza uygun bir SEO paketi sunarız. Yüzlerce işletmenin web sitelerini geliştirmelerine yardımcı olan,
            böylece büyük arama motorlarındaki sıralamalarını geliştiren ve daha fazla web trafiği getiren ve ardından satış sayılarını, gelirlerini ve
            karlarını artıran bir SEO pazarlama ajansıyız. İnternet pazarlamacılığınızla ilgili yardıma ihtiyacınız olduğunda, yalnızca herhangi bir SEO
            firmasına gitmeyin. Size özel hizmet vermek için DigitalForge’e güvenebilirsiniz, böylece ürünlerinizi pazarlama stratejinizden en iyi şekilde
            yararlanabilirsiniz!
          </p>
          <p>
            <strong>Web Sitesi Optimizasyonu</strong>
            <br />
            Hedef pazarınız ve rakiplerinizin araştırmasıyla DigitalForge, web sitenizi arama için optimize etme sürecine başlar. Arama sonuçlarında bir başlık etiketi
            görüntülenir. Bu, sayfanızın başlığıdır ve okuyucuyu bağlamalı ve web sitenizi tıklamaları için teşvik etmelidir. Başlık etiketiniz, hedeflenmiş
            anahtar kelimenizi de kullanmalıdır. Arama sonuçlarında bir meta açıklaması da görünür. Sayfanızın açıklamasıdır ve kullanıcıları sitenizi ziyaret
            etmeye motive etmek için başlığınızı genişletir. Başlık etiketiniz gibi, meta açıklamanız da hedeflenen ve alakalı anahtar kelimelerinizi
            içermelidir. Bir sayfa, kullanıcılar için faydalı resimler içermelidir. Resimler , sayfanızın okunabilirliğini artı karmaşık konuların okuyucunun
            anlaşılmasını artırabilir. Arama motoru optimizasyonundaki ilk adım, gerçekte ne için optimize ettiğinize karar vermektir. Bu , web sitenizin Google
            gibi arama motorlarında sıralamasını istediğiniz “anahtar kelimeler” olarak da bilinen kişilerin aradığı terimleri tanımlamak anlamına gelir .&nbsp;
          </p>
          <p>
            Her gün milyarlarca arama çevrimiçi olarak yapılmaktadır. Bu, çok büyük miktarda özel, yüksek amaçlı trafik anlamına gelir . Pek çok insan, bunun
            için para ödemek amacıyla belirli ürün ve hizmetleri arar. Bu aramaların ticari amaçlara sahip oldukları bilinmektedir , yani aramalarıyla
            sundukları bir şeyi satın almak istediklerini açıkça belirtirler .
          </p>
          <p>
            Sitenizi organik arama için optimize etmeye hazır mısınız? SEO ekibimizden yalnızca şirketinizin arama motoru sıralamasını iyileştirmekle kalmayıp,
            aynı zamanda onlardan daha fazla gelir elde etmekle ilgili deneyimli bir stratejistle görüşmek için bize ulaşın.
          </p>
        </div>
      </div>
    </div>
  );
}
