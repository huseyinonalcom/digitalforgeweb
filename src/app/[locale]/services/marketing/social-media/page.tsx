import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[500px] relative">
        <Image
          priority
          src="/assets/images/services/socialmedia.jpg"
          alt="Social Media"
          className="-z-10"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-center p-4">
            <h3 className="text-red-500 font-semibold">/{t("marketing-services")}</h3>
            <h1 className="text-5xl font-bold text-white">{t("social-media-title")}</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full items-center p-8 max-w-screen-2xl">
          <p>
            Her işletme, sosyal varlığının marka üzerindeki etkisine dikkat etmelidir. Sosyal platformlarda gerçekleşen paylaşımlar, müşterilerin sizi ürün veya
            hizmet algısı üzerinde güçlü bir etkiye sahip olabilir ve hatta şirketinizin güvenilirliğini doğrudan etkileyebilir.{" "}
            <strong>Sosyal medya danışmanlığı</strong> hizmetimiz ile, kampanyanızın tüm yönleriyle ilgili önerilerde bulunabiliriz. Hangi ağların
            hedefleneceğine karar vermek için yardıma ihtiyacınız veya markanız için uzun vadeli bir sosyal strateji geliştirmemizi istediğinizde, sosyal
            danışmanlarımız projenize yeni bir bakış açısı getirmeye hazırdır.&nbsp;
          </p>
          <p>
            Markanızın önünüzde olması, işinizi takip eden ve ürününüzü çevrimiçi gören kişilerin miktarını artırarak, konuşma sayısını ve işletmenize
            yönlendirme oranlarını artırması esastır. Uzman kurum içi danışmanlarımız, abone kitlenizi büyüterek içeriğinizin hedef kitlesini en üst düzeye
            çıkarmak için yenilikçi teknoloji ve içgörülerle hedef kitlenizle iletişim kurar. Rakip hedefleme, ilgili trafiği sosyal medya kanallarına ve bir
            işletmenin web sitesine yönlendirmenin etkili bir yoludur. Rakiplerin sosyal medya kanallarıyla etkileşime giren müşteriler ürününüz veya
            hizmetinizle zaten ilgileniyor. Demografik ve yer hedefleme, organik Sosyal Medya Yönetimi aracılığıyla gerçekleştirilebilir ve Ücretli Hedefleme
            Stratejisi ile eşleştirildiğinde çok güçlü olabilir. Sosyal Medya kullanıcılarını yaşa, cinsiyete, konuma ve hatta çeşitli sosyal medya
            kanallarındaki iş unvanına göre hedefleyebiliriz. İçeriğinizi bu çeşitli demografik veriler için özelleştirmek, dönüşümleri artıracak ve reklam
            harcamalarına yatırım getirisini artıracaktır.
          </p>
          <p>
            Sosyal medya ekibimiz, hedef kitlenize hitap eden gerçek marka sesini bulmak için sizinle birlikte çalışır. Her platformda sonuç üreten kapsamlı
            deneyime sahip sosyal stratejistiniz, markanızı en yüksek sosyal ulaşıma ulaşacak şekilde nasıl konumlandıracağını belirler. Her bir platformun
            kendine özgü tarzını ve tonunu takip ederken, çevrimiçi sesinizin sürekli marka üzerinde olmasını sağlıyoruz.
          </p>
          <p>
            Güncellemelere ve trendlere ayak uyduruyoruz, böylece hedef kitlenizin beklentilerine ayak uydurabilmek için stratejinizi uyarlayabiliriz. Sosyal
            medya ekibimiz, kitlenizi meşgul etmek için yeni yaklaşımları test etme ve içeriği değiştirme konusunda proaktifdir. Sosyal medyadaki hızlı
            değişikliklerin sizi toz içinde bırakmasına izin vermeyin.
          </p>
          <p>
            DigitalForge sosyal medya danışmanları, ilgili, ilgi çekici ve sonuç odaklı sosyal medya varlığınızı mümkün kılar. Amaç ve hedeflerinizi tam olarak anlamak
            için size danışırız daha sonra bunları geliştirmek için bir strateji belirleriz. Bu, en etkili anahtar kelime stratejisini geliştirmek, kitlenizin
            en muhtemel olduğu kanalları vurgulamak ve kişiye özel çözümler geliştirmek için kapsamlı araştırmaları içerir. Sosyal stratejinizi şekillendiren
            ölçümleri izliyor, ölçüyor ve rapor ediyoruz. DigitalForge, markanızın çevrimiçi varlığını geliştirmek için ihtiyaç duyduğu çözümleri sunar.
          </p>
          <p>
            Hiç şüphesiz, sosyal medya dijital pazarlama ortamlarından biri haline geldi, ancak birçok işletme bunun kaynakları basitleştirdiğini ve ölçülebilir
            kazançlar elde etmediğini görüyor. Dijital pazarlama tamamen ölçülebilirlikle ilgilidir, performansınızı geliştirmek ve gerçek sonuçlar elde etmek
            için neyin işe yaradığını değerlendirebilir ve stratejinizi ve aktivitenizi düzenleyebilirsiniz
          </p>
          <p>
            Herhangi bir stratejinin başlangıcında mevcut pazarlama kanallarını, müşteri rakiplerini ve hedef kitleyi analiz ediyoruz. Şirket varlıklarına ve
            personeline bakarız ve organizasyonlar içerisinde maksimum optimizasyon sağlamak için stratejiyi geliştirirken mevcut altyapıyı en iyi şekilde
            kullanmak için bunu planlamamıza dahil ederiz. Müşterilerimiz için seçkin sosyal kanallar, gerektiğinde eğitim, içerik planlama ve yürütme, ayrıca
            analitik ve yatırım getirisi sunumuna odaklanan bir strateji oluşturuyoruz. Sosyal medya pazarlama hizmetlerimiz, girişimcilerin ve işletmelerin
            izleyicilerini Twitter, Facebook, Youtube, Instagram ve diğer platformlarda kullanmalarına yardımcı olmaktadır. Sosyal medya uzmanları web sitenizi,
            uygulamanızı, tanıtımınızı, medyanızı, SEO ve çevrimiçi reklamcılığınızı anlarlar; bunların hepsi siz ve müşterileriniz arasında hiç bitmeyen iki
            yönlü konuşmaya katkıda bulunur.
          </p>
          <p>
            <strong>Reklam vermek istediğiniz sosyal medya kanalını seçerken</strong>
          </p>
          <ul>
            <li>Reklamınızın hangi kitlelere yönelik olacağı</li>
            <li>Yaptığınız reklamı ulaştırmak için gereken coğrafi bölgeyi</li>
            <li>Reklamların ne zaman yayınlanacağını gösteren zaman planlamasını</li>
            <li>Harcanacak olan bütçeyi</li>
            <li>Reklam verme amacınızın ve stratejinizin ne olduğu</li>
            <li>İyi bir planlama belirleyip, kaliteli görseller kullanarak, güçlü ve anlaşılır bir iletişim dili kurup etkileşime geçmelisiniz.</li>
          </ul>
          <p>
            <strong>Sosyal Medyada Reklam Vermenin Aşamaları:</strong>
            <br />
            Sizlerden alınan bilgilerle, öne çıkartmak istediğiniz ürün veya hizmetlerinizin içerik ve pazarlama üretimleri netleştirilerek sosyal medya
            kampanyaları oluşturulur.
          </p>
          <p>
            Oluşturduğunuz kampanyalar sayesinde hangi sosyal medya kanalı üzerinden paylaşacağınızı ve nasıl bir erişim olacağının belirlenmesinin durumunda
            kampaya sürecine başlanır ve etkileşim raporları belirlenir.
          </p>
          <p>
            Bu etkileşim raporları sayesinde yapılan kampanya ve uygulanan stratejinin ölçüm ve değerlendirmeleri yapılarak,kampanyanın devamlılığında izlenecek
            yollar daha sağlıklı bir şekilde seçilerek sosyal medya yönetimi sağlanmaktadır.
          </p>
          <p>
            Sosyal medya üzerinden verilmiş olunan reklamların amacı çok büyük kitleler olduğundan dolayı ürünlerin ve hizmetlerin tanıtımı daha basit , daha
            hızlı ve geniş kitlelere yapılabilmekte , ürünler daha fazla alıcı bulabilmektedir.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
