import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import pimg1 from '/public/images/partners/zaim.png'
import pimg2 from '/public/images/partners/uskudar.png'
import pimg3 from '/public/images/partners/ilim_yayma.png'
import pimg4 from '/public/images/partners/yesilay.png'
import pimg5 from '/public/images/partners/kizil_ay.png'
import pimg6 from '/public/images/partners/maarif.png'

const partners = [
    {
        pImg: pimg1,
        name: "İstanbul Sabahattin Zaim Üniversitesi"
    },
    {
        pImg: pimg2,
        name: "Üsküdar Üniversitesi"
    },
    {
        pImg: pimg3,
        name: "İlim Yayma Vakfı"
    },
    {
        pImg: pimg4,
        name: "Türkiye Yeşilay Cemiyeti"
    },
    {
        pImg: pimg5,
        name: "Türkiye Kızılay Cemiyeti"
    },
    {
        pImg: pimg6,
        name: "Maarif Vakfı"
    },
]


const PartnerSection = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className={`partners-section section-padding ${props.tNone}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="wpo-section-title text-center">
                            <span>Bizimle Yol Alanlar</span>
                            <h2>Paydaşlarımız ve Destekçilerimiz</h2>
                            <p>Eğitim ve hayır işlerindeki misyonumuzda bizimle birlikte olan değerli kurumlar ve ortaklarımız. Birlikte daha güçlü, birlikte daha etkili projeler gerçekleştiriyoruz.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids partners-slider">
                            <Slider {...settings}>
                                {partners.map((partner, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="partner-item d-flex flex-column justify-content-center align-items-center m-3">
                                            <div className="partner-logo">
                                                <Image src={partner.pImg} alt={partner.name} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .partners-section {
                    background: #f8f9fa;
                }
                
                .wpo-section-title span {
                    color: var(--hikev-primary-light);
                    font-weight: 600;
                    font-size: 16px;
                    margin-bottom: 10px;
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .wpo-section-title h2 {
                    color: var(--hikev-primary-dark);
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-size: 36px;
                }
                
                .wpo-section-title p {
                    color: var(--hikev-primary-dark);
                    font-size: 16px;
                    line-height: 1.6;
                    margin-bottom: 50px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .partner-item {
                    background: white;
                    border-radius: 15px;
                    padding: 30px 20px;
                    margin: 0 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    text-align: center;
                    height: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                
                .partner-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,55,100,0.15);
                }
                
                .partner-logo {
                    background: white;
                    border-radius: 15px;
                    padding: 15px;
                    margin-bottom: 15px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                
                .partner-logo img {
                    max-width: 100%;
                    max-height: 80px;
                    object-fit: contain;
                    filter: grayscale(100%);
                    transition: all 0.3s ease;
                }
            
                
                .partner-name h4 {
                    color: var(--hikev-primary-dark);
                    font-weight: 600;
                    font-size: 14px;
                    margin: 0;
                    line-height: 1.4;
                    text-align: center;
                }
                
                .partners-slider .slick-track {
                    display: flex;
                    align-items: center;
                }
                
                .partners-slider .slick-slide {
                    height: auto;
                }
                
                .partners-slider .slick-slide > div {
                    height: 100%;
                }
                
                @media (max-width: 768px) {
                    .partner-item {
                        height: 160px;
                        padding: 20px 15px;
                        margin: 0 10px;
                    }
                    
                    .partner-logo {
                        height: 60px;
                        margin-bottom: 10px;
                    }
                    
                    .partner-logo img {
                        max-height: 60px;
                    }
                    
                    .partner-name h4 {
                        font-size: 12px;
                    }
                    
                    .wpo-section-title h2 {
                        font-size: 28px;
                    }
                    
                    .wpo-section-title p {
                        font-size: 14px;
                        margin-bottom: 30px;
                    }
                }
            `}</style>
        </section>
    );
}

export default PartnerSection;