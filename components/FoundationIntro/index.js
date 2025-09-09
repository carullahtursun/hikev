import React from 'react';
import Image from 'next/image';

const FoundationIntro = () => {
    // Vakfın faaliyetleri ve başarıları
    const achievements = [
        {
            id: 1,
            title: "Üsküdar Üniversitesi Kuruluş Çalışması",
            description: "Eğitim alanında öncü projelerimizden biri olan Üsküdar Üniversitesi kuruluş çalışmalarına katkı sağladık",
            image: "/images/tanitim/HİKEV Tanıtım (13).jpg",
            icon: "fi flaticon-university",
            timelineIcon: "ti-home"
        },
        {
            id: 2,
            title: "Merkezi Derslik Binası Projesi",
            description: "Sabahattin Zaim Üniversitesi Eğitim Fakültesi'ne Hacı İsmail Kurt Eğitim Vakfı adına Merkezi derslik binası yapılmıştır",
            image: "/images/tanitim/HİKEV Tanıtım (12).png",
            icon: "fi flaticon-education",
            timelineIcon: "ti-write"
        },
        {
            id: 3,
            title: "Burs ve Eğitim Destekleri",
            description: "Toplamda 648 öğrenciye burs, muhtelif eğitim destekleri ve izcilik kulübü faaliyetleri sağlıyoruz",
            image: "/images/tanitim/HİKEV Tanıtım (1).png",
            icon: "fi flaticon-money",
            timelineIcon: "ti-money"
        },
        {
            id: 4,
            title: "Toplumsal Sorumluluk Projeleri",
            description: "Gayri insani hadiselere karşı toplum gönüllüsü kuruluşlarla iş birliği yaparak öğrencilerin adalet duygularını geliştiriyoruz",
            image: "/images/tanitim/HİKEV Tanıtım (3).png",
            icon: "fi flaticon-world",
            timelineIcon: "ti-world"
        },
        {
            id: 5,
            title: "Gazze Destek Projeleri",
            description: "Bilhassa Gazze'de on binlerce paralimpik çocuk ve gencin geleceğine katkı sağlayacak projeler üretiyoruz",
            image: "/images/tanitim/HİKEV Tanıtım (4).png",
            icon: "fi flaticon-help",
            timelineIcon: "ti-heart"
        },
        {
            id: 6,
            title: "Kafkasya Yetim Destek Programı",
            description: "Kafkasya'dan hicret eden yetim çocukların geleceğine el uzatacak projeler geliştiriyoruz",
            image: "/images/tanitim/HİKEV Tanıtım (7).png",
            icon: "fi flaticon-care",
            timelineIcon: "ti-user"
        },
        {
            id: 7,
            title: "Doğu Türkistan Farkındalık Etkinlikleri",
            description: "Doğu Türkistan'da yapılan zulümlere dikkat çeken etkinlikler düzenleyip çözüm süreçlerinde aktif rol alıyoruz",
            image: "/images/tanitim/HİKEV Tanıtım (6).png",
            icon: "fi flaticon-solidarity",
            timelineIcon: "ti-flag"
        }
    ];

    return (
        <div className="wpo-about-foundation-section section-padding">
            <div className="container">
                {/* Ana Başlık */}
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="wpo-section-title text-center">
                            <h2>Hacı İsmail Kurt Eğitim Vakfı</h2>
                            <h3>Eğitim ve Hayır Hizmetlerinde Öncü</h3>
                            <p>
                                Vakfımızın amacı; insani, içtimai, ilmi, iktisadi ve siyasi aşamalar doğrultusunda 
                                eğitim kurumları açmak ve işletmektir. İşte gerçekleştirdiğimiz başlıca projeler ve faaliyetler:
                            </p>
                        </div>
                    </div>
                </div>

                {/* Başarılar Timeline */}
                <div className="achievements-timeline">
                    <div className="timeline-container">
                        {achievements.map((achievement, index) => (
                            <div key={achievement.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-number">
                                    <i className={achievement.timelineIcon}></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="achievement-card">
                                        <div className="achievement-image">
                                            <Image 
                                                src={achievement.image}
                                                alt={achievement.title}
                                                width={400}
                                                height={300}
                                                style={{
                                                    width: '100%',
                                                    height: '280px',
                                                    objectFit: 'cover',
                                                    borderRadius: '10px 10px 0 0'
                                                }}
                                            />
                                            <div className="achievement-icon">
                                                <i className={achievement.icon}></i>
                                            </div>
                                        </div>
                                        <div className="achievement-text">
                                            <h4>{achievement.title}</h4>
                                            <p>{achievement.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .wpo-about-foundation-section {
                    background: var(--hikev-gray-light);
                    position: relative;
                }
                
                .wpo-section-title {
                    margin-bottom: 60px;
                }
                
                .wpo-section-title h2 {
                    color: var(--hikev-primary-dark);
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 10px;
                    line-height: 1.2;
                }
                
                .wpo-section-title h3 {
                    color: var(--hikev-primary-light);
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 25px;
                }
                
                .wpo-section-title p {
                    color: var(--hikev-primary-dark);
                    font-size: 16px;
                    line-height: 1.7;
                    margin: 0 auto;
                    max-width: 600px;
                }
                
                .achievements-timeline {
                    position: relative;
                }
                
                .timeline-container {
                    position: relative;
                }
                
                .timeline-container::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: var(--hikev-gradient);
                    transform: translateX(-50%);
                    border-radius: 2px;
                }
                
                .timeline-item {
                    position: relative;
                    margin-bottom: 50px;
                    width: 100%;
                }
                
                .timeline-number {
                    position: absolute;
                    left: 50%;
                    top: 20px;
                    width: 50px;
                    height: 50px;
                    background: var(--hikev-gradient);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(-50%);
                    z-index: 2;
                    box-shadow: 0 4px 15px var(--hikev-shadow-blue);
                }
                
                .timeline-number i {
                    color: var(--hikev-white);
                    font-size: 20px;
                }
                
                .timeline-number span {
                    color: var(--hikev-white);
                    font-weight: 700;
                    font-size: 18px;
                }
                
                .timeline-content {
                    width: 45%;
                    position: relative;
                }
                
                .timeline-item.left .timeline-content {
                    margin-left: 0;
                    margin-right: auto;
                    padding-right: 30px;
                }
                
                .timeline-item.right .timeline-content {
                    margin-left: auto;
                    margin-right: 0;
                    padding-left: 30px;
                }
                
                .achievement-card {
                    background: var(--hikev-white);
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px var(--hikev-shadow-light);
                    transition: all 0.3s ease;
                }
                
                .achievement-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px var(--hikev-shadow-medium);
                }
                
                .achievement-image {
                    position: relative;
                    overflow: hidden;
                }
                
                .achievement-image img {
                    transition: all 0.3s ease;
                }
                
                .achievement-card:hover .achievement-image img {
                    transform: scale(1.05);
                }
                
                .achievement-icon {
                    position: absolute;
                    bottom: -25px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                    background: var(--hikev-gradient);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 15px var(--hikev-shadow-blue);
                }
                
                .achievement-icon i {
                    color: var(--hikev-white);
                    font-size: 20px;
                }
                
                .achievement-text {
                    padding: 35px 25px 30px;
                }
                
                .achievement-text h4 {
                    color: var(--hikev-primary-dark);
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 18px;
                    line-height: 1.3;
                }
                
                .achievement-text p {
                    color: var(--hikev-primary-dark);
                    font-size: 15px;
                    line-height: 1.7;
                    margin: 0;
                }
                
                /* Timeline connector arrows */
                .timeline-item.left .achievement-card::after {
                    content: '';
                    position: absolute;
                    right: -15px;
                    top: 30px;
                    width: 0;
                    height: 0;
                    border-left: 15px solid var(--hikev-white);
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                }
                
                .timeline-item.right .achievement-card::after {
                    content: '';
                    position: absolute;
                    left: -15px;
                    top: 30px;
                    width: 0;
                    height: 0;
                    border-right: 15px solid var(--hikev-white);
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                }
                
                @media (max-width: 991px) {
                    .timeline-container::before {
                        left: 30px;
                    }
                    
                    .timeline-number {
                        left: 30px;
                    }
                    
                    .timeline-content {
                        width: calc(100% - 80px);
                        margin-left: 80px !important;
                        padding: 0 !important;
                    }
                    
                    .timeline-item.left .achievement-card::after,
                    .timeline-item.right .achievement-card::after {
                        left: -15px;
                        border-right: 15px solid var(--hikev-white);
                        border-left: none;
                    }
                    
                    .wpo-section-title h2 {
                        font-size: 30px;
                    }
                }
                
                @media (max-width: 767px) {
                    .wpo-section-title h2 {
                        font-size: 26px;
                    }
                    
                    .achievement-text {
                        padding: 30px 20px 25px;
                    }
                    
                    .achievement-text h4 {
                        font-size: 18px;
                    }
                    
                    .achievement-text p {
                        font-size: 14px;
                    }
                    
                    .achievement-image img {
                        height: 250px !important;
                    }
                    
                    .timeline-item {
                        margin-bottom: 40px;
                    }
                }
                
                @media (max-width: 576px) {
                    .timeline-container::before {
                        left: 20px;
                    }
                    
                    .timeline-number {
                        left: 20px;
                        width: 40px;
                        height: 40px;
                    }
                    
                    .timeline-number i {
                        font-size: 18px;
                    }
                    
                    .timeline-number span {
                        font-size: 16px;
                    }
                    
                    .timeline-content {
                        width: calc(100% - 70px);
                        margin-left: 70px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default FoundationIntro;
