import React from 'react'
import Link from 'next/link'
import Services from '../../api/service'

const Service5 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

     const data = [
        {
          icon: "🎓",
          title: "Burs",
          description: "Başarılı ve maddi desteğe ihtiyacı olan lisans, yüksek lisans ve doktora öğrencilerine burs imkânı sağlayarak onların eğitim sürecini destekliyoruz."
        },
        {
          icon: "💖",
          title: "Bağış",
          description: "Vakfımıza yapılan bağışlar, eğitim projelerimizin hayata geçirilmesine ve öğrencilere destek olunmasına katkı sağlamaktadır."
        },
        {
          icon: "🕌",
          title: "Zekat",
          description: "Zekât bağışlarınızı, ihtiyaç sahibi öğrencilerin eğitimi için değerlendiriyor, onların akademik başarılarını destekliyoruz."
        },
        {
          icon: "🏦",
          title: "IBAN",
          description: "Vakfımıza bağış yapmak isteyen hayırseverler için hesap bilgilerimizi paylaşıyor, desteklerinizi kolaylaştırıyoruz."
        },
        {
          icon: "📚",
          title: "Ayni Destek",
          description: "Kitap, kırtasiye, tablet, bilgisayar gibi ayni yardımlarla öğrencilerimize eğitim desteği sağlayabilirsiniz."
        }
      ];

    return(
        <section className="wpo-features-section-s6 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>HAYR NOKTASI</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data?.map((service, sitem) => (
                        <div className="col col-xl-4 col-lg-4 col-sm-6 col-12" key={sitem}>
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service5;