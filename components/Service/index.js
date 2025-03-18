import React from 'react'
import Link from 'next/link'

const Service = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

     const services = [
        {
          fIcon1: "flaticon-salary",
            title: "Burs",
            description: "Başarılı ve maddi desteğe ihtiyacı olan lisans, yüksek lisans ve doktora öğrencilerine burs imkânı sağlayarak onların eğitim sürecini destekliyoruz."
        },
        {
          fIcon1: "flaticon-checked",
            title: "Bağış",
            description: "Vakfımıza yapılan bağışlar, eğitim projelerimizin hayata geçirilmesine ve öğrencilere destek olunmasına katkı sağlamaktadır."
        },
        {
          fIcon1: "flaticon-wallet-filled-money-tool",
            title: "Zekat",
            description: "Zekât bağışlarınızı, ihtiyaç sahibi öğrencilerin eğitimi için değerlendiriyor, onların akademik başarılarını destekliyoruz."
        },
        {
          fIcon1: "flaticon-wallet-filled-money-tool",
            title: "IBAN",
            description: "Vakfımıza bağış yapmak isteyen hayırseverler için hesap bilgilerimizi paylaşıyor, desteklerinizi kolaylaştırıyoruz."
        },
        {
          fIcon1: "flaticon-user",
            title: "Ayni Destek",
            description: "Kitap, kırtasiye, tablet, bilgisayar gibi ayni yardımlarla öğrencilerimize eğitim desteği sağlayabilirsiniz."
        }
        ];

    return(

        <section className={`${props.Fclass} section-padding mt-5  ${props.vclassClass}`}>
            <div className="conttainer">
                <div className="row   d-flex justify-content-center">
                    {services.slice(0, 5).map((service, sitem) => (
                        <div className="col col-xl-2 col-lg-6 col-sm-6 col-10" key={sitem}>
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <i className={`fi  ${service.fIcon1}`}></i>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2>{service.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service;