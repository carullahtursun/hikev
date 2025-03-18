import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/ab.png'
import Image from 'next/image'

const AboutS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt="HİKEV Vakfı"/>
                                <div className="wpo-total-raised">
                                    <div className="wpo-total-raised-wrap">
                                        <div className="wpo-total-raised-icon">
                                            <i className="fi flaticon-wallet-filled-money-tool"></i>
                                        </div>
                                        <div className="wpo-total-raised-text">
                                            <ul>
                                                <li>Toplam Destek<span>$25000</span></li>
                                            </ul>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar">
                                                            <div className="progress-value"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="round-ball-1"></div>
                                <div className="round-ball-2"></div>
                                <div className="round-ball-3"></div>
                                <div className="round-ball-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span>Hakkımızda</span>
                            <h2>Geleceğe Umut Olun, Eğitime Destek Verin!</h2>
                            <p>Hacı İsmail Kurt Eğitim Vakfı (HİKEV), ülkemizin ihtiyaç duyduğu alanlarda 
                                nitelikli bireyler yetiştirmek amacıyla eğitim projeleri yürütmektedir. 
                                Vakfımız, maddi imkânı kısıtlı öğrencilere burs sağlamak, eğitim kurumlarını 
                                desteklemek ve geleceğe ışık tutacak projeleri hayata geçirmek için çalışmaktadır.</p>
                            <ul>
                                <li>Eğitim kalitesinin yükselmesine katkı sağlıyoruz.</li>
                                <li>Maddi imkânı kısıtlı öğrencilere burs desteği sunuyoruz.</li>
                                <li>Bilimsel araştırmalar, sosyal projeler ve eğitim kurumlarına destek veriyoruz.</li>
                            </ul>
                           {/*  <Link onClick={ClickHandler} className="theme-btn-s2" href="/about">Daha Fazla Bilgi</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutS2;
