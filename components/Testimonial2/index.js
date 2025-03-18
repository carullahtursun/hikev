import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import ts1 from '/public/images/testimonial/img-1.jpg'
import ts2 from '/public/images/testimonial/img-2.jpg'
import ts3 from '/public/images/testimonial/img-3.jpg'

const Testimonial2 = (props) => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
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

    const icraatler = [
        {
            tsImg: ts1,
            Des: "Vakfımız, kreşten üniversiteye kadar eğitim kurumları açarak gençlerimizin geleceğini şekillendiriyor.",
            Title: 'Eğitim Kurumları Açma',
            Sub: "Okul, enstitü ve kolej desteği",
        },
        {
            tsImg: ts2,
            Des: "Bilimsel araştırma merkezleri, kütüphaneler ve laboratuvarlar kurarak akademik gelişimi destekliyoruz.",
            Title: 'Bilimsel Araştırma ve Geliştirme',
            Sub: "Bilim ve teknolojiye katkı",
        },
        {
            tsImg: ts3,
            Des: "Üstün yetenekli öğrenciler için özel eğitim programları ve burs desteği sağlıyoruz.",
            Title: 'Özel Eğitim ve Burslar',
            Sub: "Geleceğin liderlerini yetiştirme",
        },
        {
            tsImg: ts1,
            Des: "Meslek edindirme kursları, sanat ve yabancı dil eğitimleri ile bireylerin kendilerini geliştirmesine katkıda bulunuyoruz.",
            Title: 'Meslek ve Sanat Kursları',
            Sub: "İş dünyasına hazırlık",
        },
        {
            tsImg: ts2,
            Des: "Dini, ilmi, ahlaki ve edebi eserleri destekleyerek kültürel mirasımızı koruyoruz.",
            Title: 'Kültürel ve Eğitim Yayınları',
            Sub: "Kitap basımı ve tercümeler",
        },
        {
            tsImg: ts3,
            Des: "Devlet ve vakıf üniversiteleriyle ortak projeler geliştirerek eğitime maddi destek sağlıyoruz.",
            Title: 'Üniversitelerle İş Birliği',
            Sub: "Ortak projeler ve destek fonları",
        },
    ];

    return (
        <div className={`wpo-testimonial-area-s2 section-padding ${props.tClass}`}>
            <div className="">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>İcraatlerimiz</span>
                            <h2>Vakfımızın Eğitim ve Toplumsal Katkıları</h2>
                            <p>Hacı İsmail Kurt Eğitim Vakfı olarak eğitime destek veriyor, bireylerin akademik ve mesleki gelişimlerine katkıda bulunuyoruz.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-testimonial-wrap">
                    <div className="testimonial-slider owl-carousel">
                        <Slider {...settings}>
                            {icraatler.map((icraat, index) => (
                                <div className="wpo-testimonial-item" key={index}>
                                   
                                    <div className="wpo-testimonial-content">
                                        <p>{icraat.Des}</p>
                                        <h2>{icraat.Title}</h2>
                                        <span>{icraat.Sub}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial2;
