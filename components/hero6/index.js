import React from "react";
import Slider from "react-slick";
import Link from 'next/link'



const Hero6 = (props) => {


    const slidesData = [
        {
            id: 1,
            image: '/images/slider/slide-1.jpg',
            title: 'Eğitime Destek, Geleceğe Yatırım.',
            subtitle: 'Öğrencilere burs vererek onların geleceğine katkıda bulunun.'
        },
        {
            id: 2,
            image: '/images/slider/slide-2.jpg',
            title: 'Bağışlarınızla Umut Olun.',
            subtitle: 'Bağışlarınızla daha fazla öğrenciye destek olabilirsiniz.'
        },
        {
            id: 3,
            image: '/images/slider/slide-3.jpg',
            title: 'Birlikte Daha Güçlüyüz.',
            subtitle: 'Topluma katkı sağlamak için birlikte çalışalım.'
        }
    ];

    var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className={`wpo-hero-slider ${props.heroClass}`}>
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        {
                            slidesData.map(slide => (
                                <div className="hero-slide" key={slide.id}>
                                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${slide.image})` }}>
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div className="wpo-hero-title">
                                                    <h2>{slide.title}</h2>
                                                </div>
                                                <div className="wpo-hero-subtitle">
                                                    <p>{slide.subtitle}</p>
                                                </div>
                                                <div className="clearfix"></div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero6;