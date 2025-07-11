import React from 'react';
import Image from 'next/image';
import founderImg from '/public/images/kurucu.jpg';

const FounderSection = () => {
    return (
        <section className="founder-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="founder-content">
                            <div className="wpo-section-title">
                                <span>Merhum Kurucumuz</span>
                                <h2>Hacı İsmail Kurt</h2>
                                <h4>(1935-2009)</h4>
                            </div>
                            <div className="founder-text">
                                <p>
                                    Hacı İsmail Kurt (1935-2009), Trabzon'un Of ilçesinde doğdu. İstanbul'da geçen 
                                    yaklaşık 80 yıllık ömrüne sayısız proje ve hizmet sığdırdı. Doğduğu ilçeye 
                                    yaptırdığı cami ve Kur'an kursları ile başlayan hayır mesaisini zamanla büyüttü.
                                </p>
                                <p>
                                    Başka yardım kuruluşlarıyla yaptığı iş birliği hizmetleriyle de tanınan Hacı 
                                    İsmail Kurt, başta bir üniversite olmak üzere muhtelif eğitim kurumlarını 
                                    kurabilmek ve hayır, iyilik, ilim, kültür ve eğitim faaliyetlerini büyütmek 
                                    amacıyla 2009 yılında Hacı İsmail Kurt Eğitim Vakfı'nı (HİKEV) kurdu.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="founder-image">
                            <div className="image-wrapper">
                                <div className="image-frame">
                                    <Image 
                                        src={founderImg} 
                                        alt="Hacı İsmail Kurt - Kurucumuz" 
                                        className="founder-photo"
                                        width={600}
                                        height={700}
                                    />
                                    <div className="image-overlay">
                                        <div className="overlay-content">
                                            <h3>Hacı İsmail Kurt</h3>
                                            <span>HİKEV Kurucusu</span>
                                            <p>1935 - 2009</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="decorative-elements">
                                    <div className="decorative-circle decorative-circle-1"></div>
                                    <div className="decorative-circle decorative-circle-2"></div>
                                    <div className="decorative-quote">
                                        <i className="fi flaticon-quotation"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Prayer Section */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="founder-prayer">
                            <div className="prayer-content">
                                <div className="prayer-icon">
                                    <i className="fi flaticon-mosque"></i>
                                </div>
                                <p className="prayer-text">
                                    Hayır ve hasenat defterinin, umduğu iyilik ve güzelliklerle, zenginliklerle, 
                                    kıyamete dek dolmasını niyaz ediyoruz.
                                </p>
                                <p className="memorial-text">
                                    2009 yılında vefat eden merhum kurucumuz Hacı İsmail Kurt Beyefendi'yi; 
                                    evlat ve yakınlarına sabır ve selamet diliyor, geçmişlerine ve zatına vasi 
                                    ve gani rahmetle, minnetle yâd ediyor, hayır ve hasene çeşmesine sahip çıkıyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Achievements Section */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="achievements-section">
                            <div className="wpo-section-title text-center">
                                <h3>Miras ve Değerler</h3>
                                <h6>Kurucumuzun bıraktığı değerli miras</h6>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="achievement-item">
                                        <div className="achievement-icon">
                                            <i className="fi flaticon-mosque"></i>
                                        </div>
                                        <h4>Cami ve Kur'an Kursları</h4>
                                        <p>Doğduğu Of ilçesinde inşa ettirdiği cami ve Kur'an kursları ile başlayan hayır mesaisi</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="achievement-item">
                                        <div className="achievement-icon">
                                            <i className="fi flaticon-university"></i>
                                        </div>
                                        <h4>Eğitim Kurumları</h4>
                                        <p>Başta üniversite olmak üzere muhtelif eğitim kurumlarının kurulması vizyonu</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="achievement-item">
                                        <div className="achievement-icon">
                                            <i className="fi flaticon-heart"></i>
                                        </div>
                                        <h4>HİKEV Vakfı</h4>
                                        <p>2009 yılında kurulan Hacı İsmail Kurt Eğitim Vakfı ile sürdürülen hayır hizmetleri</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .founder-section {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .founder-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="%23003764" opacity="0.1"/></svg>') repeat;
                    background-size: 50px 50px;
                    z-index: 1;
                }
                
                .founder-content {
                    padding-right: 40px;
                    position: relative;
                    z-index: 2;
                }
                
                .wpo-section-title span {
                    color: var(--hikev-primary-light);
                    font-weight: 600;
                    font-size: 20px;
                    margin-bottom: 15px;
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .wpo-section-title h2 {
                    color: var(--hikev-primary-dark);
                    font-weight: 700;
                    font-size: 52px;
                    margin-bottom: 15px;
                    line-height: 1.2;
                }
                
                .wpo-section-title h4 {
                    color: #666;
                    font-style: italic;
                    margin-bottom: 40px;
                    font-weight: 400;
                    font-size: 20px;
                    border-left: 4px solid var(--hikev-primary-light);
                    padding-left: 20px;
                }
                
                .founder-text p {
                    color: var(--hikev-primary-dark);
                    font-size: 18px;
                    line-height: 1.8;
                    margin-bottom: 25px;
                    text-align: justify;
                    font-weight: 400;
                }
                
                .founder-image {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    z-index: 2;
                }
                
                .image-wrapper {
                    position: relative;
                    width: 100%;
                    max-width: 550px;
                }
                
                .image-frame {
                    position: relative;
                    border-radius: 30px;
                    overflow: hidden;
                
                    background: linear-gradient(45deg, var(--hikev-primary-dark), var(--hikev-primary-light));
                    padding: 8px;
                    transform: perspective(1000px) rotateY(-5deg);
                    transition: all 0.5s ease;
                }
                
                .image-frame:hover {
                    transform: perspective(1000px) rotateY(0deg) translateY(-10px);
                    box-shadow: 0 35px 100px rgba(0,55,100,0.4);
                }
                
                .founder-photo {
                    width: 100%;
                    height: 600px;
                    object-fit: cover;
                    border-radius: 22px;
                    display: block;
                }
                
                .image-overlay {
                    position: absolute;
                    bottom: 8px;
                    left: 8px;
                    right: 8px;
                    background: linear-gradient(transparent, rgba(0,55,100,0.95));
                    color: white;
                    border-radius: 0 0 22px 22px;
                    padding: 40px 30px 30px;
                    backdrop-filter: blur(10px);
                }
                
                .overlay-content h3 {
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }
                
                .overlay-content span {
                    color: var(--hikev-primary-light);
                    font-weight: 600;
                    display: block;
                    margin-bottom: 8px;
                    font-size: 16px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .overlay-content p {
                    margin: 0;
                    font-size: 16px;
                
                    font-weight: 500;
                }
                
                .decorative-elements {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                }
                
                .decorative-circle {
                    position: absolute;
                    border: 3px solid var(--hikev-primary-light);
                    border-radius: 50%;
                    opacity: 0.3;
                    animation: float 6s ease-in-out infinite;
                }
                
                .decorative-circle-1 {
                    width: 100px;
                    height: 100px;
                    top: -20px;
                    right: -20px;
                    animation-delay: 0s;
                }
                
                .decorative-circle-2 {
                    width: 60px;
                    height: 60px;
                    bottom: 50px;
                    left: -10px;
                    animation-delay: 3s;
                }
                
                .decorative-quote {
                    position: absolute;
                    top: 30px;
                    left: 30px;
                    width: 60px;
                    height: 60px;
                    background: var(--hikev-primary-light);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0.8;
                }
                
                .decorative-quote i {
                    font-size: 24px;
                    color: white;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                .founder-prayer {
                    background: linear-gradient(135deg, white 0%, #f8f9fa 100%);
                    padding: 60px;
                    border-radius: 25px;
                    box-shadow: 0 15px 50px rgba(0,0,0,0.1);
                    border: 1px solid rgba(0,179,227,0.1);
                    position: relative;
                    overflow: hidden;
                }
                
                .founder-prayer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 5px;
                    background: linear-gradient(90deg, var(--hikev-primary-dark), var(--hikev-primary-light));
                }
                
                .prayer-content {
                    text-align: center;
                    position: relative;
                }
                
                .prayer-icon {
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(135deg, var(--hikev-primary-light), var(--hikev-primary-dark));
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 30px;
                    box-shadow: 0 10px 30px rgba(0,179,227,0.3);
                }
                
                .prayer-icon i {
                    font-size: 40px;
                    color: white;
                }
                
                .prayer-text {
                    font-style: italic;
                    color: var(--hikev-primary-light);
                    font-weight: 600;
                    margin-bottom: 30px !important;
                    font-size: 20px;
                    line-height: 1.6;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .memorial-text {
                    color: var(--hikev-primary-dark);
                    font-weight: 500;
                    margin-bottom: 0 !important;
                    font-size: 18px;
                    line-height: 1.7;
                    max-width: 900px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .achievements-section {
                    background: white;
                    padding: 60px 30px;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .achievements-section .wpo-section-title h3 {
                    color: var(--hikev-primary-dark);
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                
                .achievements-section .wpo-section-title p {
                    color: #666;
                    margin-bottom: 40px;
                }
                
                .achievement-item {
                    text-align: center;
                    padding: 30px 20px;
                    margin-bottom: 30px;
                }
                
                .achievement-icon {
                    width: 80px;
                    height: 80px;
                    background: var(--hikev-primary-light);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    transition: all 0.3s ease;
                }
                
                .achievement-icon i {
                    font-size: 36px;
                    color: white;
                }
                
                .achievement-item:hover .achievement-icon {
                    background: var(--hikev-primary-dark);
                    transform: translateY(-5px);
                }
                
                .achievement-item h4 {
                    color: var(--hikev-primary-dark);
                    font-weight: 600;
                    margin-bottom: 15px;
                    font-size: 20px;
                }
                
                .achievement-item p {
                    color: #666;
                    line-height: 1.6;
                    margin: 0;
                }
                
                @media (max-width: 991px) {
                    .founder-content {
                        padding-right: 0;
                        margin-bottom: 50px;
                    }
                    
                    .wpo-section-title h2 {
                        font-size: 42px;
                    }
                    
                    .image-frame {
                        transform: none;
                        max-width: 450px;
                        margin: 0 auto;
                    }
                    
                    .image-frame:hover {
                        transform: translateY(-5px);
                    }
                    
                    .founder-photo {
                        height: 500px;
                    }
                    
                    .founder-prayer {
                        padding: 40px 30px;
                        margin-top: 40px;
                    }
                }
                
                @media (max-width: 768px) {
                    .wpo-section-title h2 {
                        font-size: 36px;
                    }
                    
                    .wpo-section-title span {
                        font-size: 16px;
                    }
                    
                    .wpo-section-title h4 {
                        font-size: 18px;
                    }
                    
                    .founder-text p {
                        font-size: 16px;
                    }
                    
                    .image-frame {
                        max-width: 350px;
                    }
                    
                    .founder-photo {
                        height: 400px;
                    }
                    
                    .founder-prayer {
                        padding: 30px 20px;
                    }
                    
                    .prayer-text {
                        font-size: 18px;
                    }
                    
                    .memorial-text {
                        font-size: 16px;
                    }
                    
                    .prayer-icon {
                        width: 80px;
                        height: 80px;
                        margin-bottom: 25px;
                    }
                    
                    .prayer-icon i {
                        font-size: 32px;
                    }
                    
                    .decorative-circle-1 {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .decorative-circle-2 {
                        width: 40px;
                        height: 40px;
                    }
                    
                    .decorative-quote {
                        width: 50px;
                        height: 50px;
                        top: 20px;
                        left: 20px;
                    }
                    
                    .decorative-quote i {
                        font-size: 20px;
                    }
                }
                
                @media (max-width: 576px) {
                    .wpo-section-title h2 {
                        font-size: 28px;
                    }
                    
                    .founder-photo {
                        height: 350px;
                    }
                    
                    .overlay-content h3 {
                        font-size: 22px;
                    }
                    
                    .overlay-content span {
                        font-size: 14px;
                    }
                    
                    .prayer-text {
                        font-size: 16px;
                    }
                    
                    .memorial-text {
                        font-size: 15px;
                    }
                }
            `}</style>
        </section>
    );
};

export default FounderSection;
