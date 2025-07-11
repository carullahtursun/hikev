import React, { useState } from 'react'

const AccordionSection = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const aboutData = [
        {
            title: "Kurucumuz",
            content: `Hacı İsmail Kurt (1935-2009), Trabzon'un Of ilçesinde doğdu. İstanbul'da geçen yaklaşık 80 yıllık ömrüne sayısız proje ve hizmet sığdırdı. Doğduğu ilçeye yaptırdığı cami ve Kur'an kursları ile başlayan hayır mesaisini zamanla büyüttü. Başka yardım kuruluşlarıyla yaptığı iş birliği hizmetleriyle de tanınan Hacı İsmail Kurt, başta bir üniversite olmak üzere muhtelif eğitim kurumlarını kurabilmek ve hayır, iyilik, ilim, kültür ve eğitim faaliyetlerini büyütmek amacıyla 2009 yılında Hacı İsmail Kurt Eğitim Vakfı'nı (HİKEV) kurdu.

Hayır ve hasenat defterinin, umduğu iyilik ve güzelliklerle, zenginliklerle, kıyamete dek dolmasını niyaz ediyoruz.

2009 yılında vefat eden merhum kurucumuz Hacı İsmail Kurt Beyefendi'yi; evlat ve yakınlarına sabır ve selamet diliyor, geçmişlerine ve zatına vasi ve gani rahmetle, minnetle yâd ediyor, hayır ve hasene çeşmesine sahip çıkıyoruz.`
        },
        {
            title: "Amacımız",
            content: `Kuruluş Amacımız
Hacı İsmail Kurt Eğitim Vakfı (HİKEV), vakfiyesi çerçevesinde, Türkiye'mizin daha adil, daha akil bir eğitim modeline kavuşmasını gözeten gönüllü bir teşekküldür. Ülkemizin ve zamanın kıymetini bilen, marifet ve irfan sahibi, "maarif zarfında mazrufuna" (eğitim kabında özüne) manevi, insani, milli-medeni, çevre ve tabiat bütünlüğünü dört temel eksende işleyen ve tarif eden gelişkin bir eğitim sistemi, asli kuruluş amacımızdır.

Bu çerçevede asli amaçlarımız:

• Manevi, insani, milli-medeni, çevre ve tabiat dostluğu ile hukuk bütünlüğünü ilke edinen; kul, insan, yurttaş-kardeş, çevre ve tabiat dostu mizan ve izan sahibi, iyi mizaca ve şahsiyete sahip, vasıflı ve özgüvenli bireylerin yetişmesine vesile olmak.

• İnsani, içtimai, ilmi, iktisadi ve siyasi sahaların birinde veya birkaçında söz sahibi, gayretli; ilim, bilim ve sanatta sesi gür, tabiatı hür, gayreti dolu, şuurlu ve mesuliyet sahibi çocuk ve gençlerin yetişmesine vesile olmak.

• Eğitimin ve öğretimin kalitesini yükselten; bedeni, ruhi ve akli sağlığın zindeliğini gözeten; her türlü bağımlılığa karşı hassas; kültürel, ideolojik, sosyolojik ve teolojik (KİST'ik) ayrımcılığa dikkat eden bir maarif şuurunun oluşmasına katkı sağlamak.

• Maharet sahiplerini tarayan, onları ehliyetle buluşturan; liyakati, istidatla (yeteneğin) buluşturan; ehliyet, liyakat ve maharet gözeterek eğitim, öğretim ve gelişim seçenekleri sunan; çocuk ve gençlerin bilgi, istidat ve kabiliyetlerini geliştirerek doğru istihsal (üretim) projelerinde doğru görev, yetki ve imkânlarla buluşmalarını sağlayacak strateji ve tedbirlerin tesisine ve geliştirilmesine katkı sağlamak.

• Meslek seçimi taramalarını en erken süreçlerde başlatmaya, yönlendirmeye ve işlemeye çalışan bir maarif anlayışını hayata geçirmek.`
        },
        {
            title: "Vizyon",
            content: `GELECEK Öngörümüz (Vizyon);

HİKEV, kurucu gönüllümüz ve ilham kaynağımız merhum Hacı İsmail Kurt'un vakfiyesinin niyet ve akdine sadakatle bağlı kalmayı önemsemekte; meşru ve mevzu hukukuna layıkıyla sahip çıkmayı amaçlamaktadır.

Geleceği doğru idrak ettiren, geçmişin şuurunu veren, anı doğru değerlendirmeyi öğreten şahsiyet sahibi bireyler yetiştirmeyi önemseyen maarif ve yönetim şekillerine mesai harcamak istiyoruz.

HİKEV'in halis hedeflerine hadim, mihmandar ve muvaffak bir yolda; ayrıca pek manidar bir akrostiş ve aksiyonel örtüşmeyle "Hayır ve İlim, Kültür ve Eğitim" mesaisi, asli mottomuzdur.`
        },
        {
            title: "Misyon",
            content: `GÖREV Öngörümüz (Misyon);

Gönüllülükle mücehhez Vakıf HİKEV'in mütevelli, yönetici ve çalışan emanetçileri olarak; şahsi ölçekte ömrümüzün vakti, nakdi, akli, kalbi, kabiliyet ve imkânlarımızdan kifayetince pay ayırarak, merhum Hacı İsmail Kurt'un vakfi vasiyetlerine gönüllü mesai katkısı yapmayı hedefliyoruz.

İyilik, güzellik, doğruluk ve adaleti yayan, çoğaltan örnek şahsiyetlerin sayısının artmasını ve bu vasıfların toplumda çoğalmasını sağlamak istiyoruz.`
        },
        {
            title: "Aksiyon",
            content: `GAYRET Öngörümüz (Aksiyon);

• Stratejik, güncel ve özel alanlarda; ihtiyaç duyulan konularda nitelikli istihsal, istihdam ve eğitim projeleri geliştirmek.

• Ortak kurumlarla, ilgili sektörlerle ve paydaş gönüllülerle 3. sektör projeleri geliştirmek, desteklemek ve parlak projeleri hayata geçirmek için mesai harcamak.

• Eğitim-öğretim şuurunun ve kalitesinin yükselmesine doğrudan ya da dolaylı katkı sağlamak.

• Maddi imkânı kısıtlı öğrencilere adil ve takipli burs desteği sunmak.

• Bilimsel araştırmalara, sosyal projelere ve eğitim kurumlarına doğrudan ya da dolaylı destek vermek.`
        }
    ];

    return (
        <section className="wpo-accordion-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-section-title text-center mb-5">
                            <h2>Hakkımızda</h2>
                        </div>
                        <div className="accordion-wrapper">
                            {aboutData.map((item, index) => (
                                <div className="accordion-item" key={index}>
                                    <div 
                                        className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <h4>{item.title}</h4>
                                        <span className="accordion-icon">
                                            <i className={activeIndex === index ? 'ti-minus' : 'ti-plus'}></i>
                                        </span>
                                    </div>
                                    <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                                        <div className="content-inner">
                                            <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .accordion-wrapper {
                    background: white;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    overflow: hidden;
                }
                .accordion-item {
                    border-bottom: 1px solid #f0f0f0;
                }
                .accordion-item:last-child {
                    border-bottom: none;
                }
                .accordion-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 25px 30px;
                    background: #f8f9fa;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border-left: 4px solid transparent;
                }
                .accordion-header:hover {
                    background: var(--hikev-gray-hover);
                    border-left-color: var(--hikev-primary-light);
                }
                .accordion-header.active {
                    background: var(--hikev-primary-dark);
                    color: var(--hikev-white);
                    border-left-color: var(--hikev-primary-light);
                }
                .accordion-header h4 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                }
                .accordion-icon {
                    font-size: 16px;
                    transition: transform 0.3s ease;
                }
                .accordion-header.active .accordion-icon {
                    transform: rotate(180deg);
                }
                .accordion-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                }
                .accordion-content.active {
                    max-height: 1000px;
                }
                .content-inner {
                    padding: 30px;
                    background: white;
                }
                .content-inner p {
                    color: var(--hikev-primary-dark);
                    line-height: 1.8;
                    margin: 0;
                    font-size: 15px;
                }
            `}</style>
        </section>
    )
}

export default AccordionSection;
