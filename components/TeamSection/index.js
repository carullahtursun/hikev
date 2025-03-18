import React from "react";
import Teams from '../../api/team'
import Slider from "react-slick";
import Link from 'next/link'
import Image from "next/image";


const TeamSection = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
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

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="wpo-team-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                        
                            <h2>MÜTEVELLİ HEYETİMİZ</h2>
                            <p>Vakfın yönetimini ve stratejik hedeflerini belirleyen mütevelii heyetimiz, alanında uzman ve eğitim gönüllüsü kişilerden oluşmaktadır</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="team-slider">
                        <Slider {...settings}>
                            {Teams.map((Team, tm) => (
                                <div className="wpo-team-item" key={tm}>
                                    <div className="wpo-team-img">
                                        <Image src={Team.tImg} alt="" />
                                    </div>
                                    <div className="wpo-team-content">
                                        <h2><Link onClick={ClickHandler} href='/team-single/[slug]' as={`/team-single/${Team.slug}`}>{Team.name}</Link></h2>
                                        <span>{Team.title}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamSection;