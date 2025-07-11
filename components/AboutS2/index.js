import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/kurucu.jpg'
import Image from 'next/image'

const AboutS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section-s2 section-padding mt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt="HİKEV Vakfı"/>
                               {/*  <div className="wpo-total-raised">
                                    <div className="wpo-total-raised-wrap">
                                        <div className="wpo-total-raised-icon">
                                            <i className="fi flaticon-wallet-filled-money-tool"></i>
                                        </div>
                                        <div className="wpo-total-raised-text">
                                            <ul>
                                                <li>Verilen Burs<span>120+</span></li>
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
                                </div> */}
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
                            <h2>Hacı İsmail Kurt Eğitim Vakfı</h2>
                            <p>Hacı İsmail Kurt Eğitim Vakfı (HİKEV), 2009 yılında kurucumuz merhum Hacı İsmail Kurt tarafından kurulmuştur. Vakfımız, eğitim alanında faaliyet gösteren, hayır ve iyilik işlerini yaygınlaştırmayı amaçlayan gönüllü bir kuruluştur.</p>
                            <p>Ülkemizin daha adil ve akil bir eğitim modeline kavuşması için çalışan vakfımız, manevi, insani, milli-medeni değerleri ön planda tutan bir eğitim anlayışını benimser.</p>
                            <ul>
                                <li>Eğitim kurumları kurmak ve işletmek</li>
                                <li>Başarılı öğrencilere burs ve eğitim desteği sağlamak</li>
                                <li>Bilimsel araştırma ve geliştirme faaliyetlerini desteklemek</li>
                                <li>Kültürel miras ve değerlerin korunmasına katkı sağlamak</li>
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
