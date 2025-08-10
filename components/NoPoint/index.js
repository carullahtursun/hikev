import React from "react";
import Link from "next/link";
import VideoModal from "../../components/ModalVideo";
import simg from "/public/images/slider/right-img5.png";
import hikevqr from "/public/images/qr/hikevqr.png";
import Image from "next/image";

const NoPoint = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const data = {
    title: "Burs ve Bağışlarınızla Öğrencilere Destek Olun",
    description:
      "",
    points: [
      " Başarılı ve maddi desteğe ihtiyacı olan lisans, yüksek lisans ve doktora öğrencilerine burs imkânı sağlayarak onların eğitim sürecini destekliyoruz.",
      "Vakfımıza yapılan bağışlar, eğitim projelerimizin hayata geçirilmesine ve öğrencilere destek olunmasına katkı sağlamaktadır. ",
      "Zekât bağışlarınızı, ihtiyaç sahibi öğrencilerin eğitimi için değerlendiriyor, onların akademik başarılarını destekliyoruz. ",
      "Vakfımıza bağış yapmak isteyen hayırseverler için hesap bilgilerimizi paylaşıyor, desteklerinizi kolaylaştırıyoruz. ",
      "Kitap, kırtasiye, tablet, bilgisayar gibi ayni yardımlarla öğrencilerimize eğitim desteği sağlayabilirsiniz."
    ],
  };

  return (
    <section
      className={`wpo-about-section-s4 section-padding  ${props.abClass}  `}
    >
      <div className="container">
        <div className="wpo-about-items">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="wpo-about-wrap">
                <div className="wpo-about-img">
                  <Image src={hikevqr} alt="" />
                  <div className="shp-1"></div>
                  <div className="shp-2"></div>
                </div>
                <div className="ab-shape">
                  <Image src={simg} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <h2>{data.title}</h2>

                <p>{data.description}</p>
                {data?.points?.map((point, fitem) => (
                  <ul key={fitem}>
                    <li>{point}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default NoPoint;
