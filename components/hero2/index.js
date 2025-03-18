import React from "react";
import Link from 'next/link'
import hero1 from '/public/images/slider/right-img3.png'
import shape1 from '/public/images/slider/sp1.png'
import shape2 from '/public/images/slider/sp2.png'
import shape3 from '/public/images/slider/sp3.png'
import Image from "next/image";

const Hero2 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-hero-section-2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2>Geleceğe <span>Umut</span> Ol, Eğitime Destek Ver</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>Vakfımız, vatana, millete ve kültürel değerlerine bağlı, ülkemizin ihtiyaç duyduğu alanlarda 
                                nitelikli bireyler yetiştirmek için çalışmalar yürütmektedir.</p>
                            </div>
                            <div className="btns">
                                <Link onClick={ClickHandler} href="/about" className="btn theme-btn-s2">Daha Fazla Bilgi</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    <div className="r-img">
                                        <Image src={hero1} alt="HİKEV Eğitim Desteği"/>
                                    </div>
                                    <div className="sp-1"><Image src={shape1} alt=""/></div>
                                    <div className="sp-2"><Image src={shape2} alt=""/></div>
                                    <div className="sp-3"><Image src={shape3} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;
