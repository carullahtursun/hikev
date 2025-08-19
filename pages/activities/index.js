import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.svg'
import Image from 'next/image'

const Activities = (props) => {
    // Tanıtım fotoğrafları
    const activityImages = [
        {
            id: 1,
            src: '/images/tanitim/HİKEV Tanıtım (1).png',
            title: 'Bursiyerlerle Geleneksel Kahvaltı',
            description: 'Bursiyerlerimizle düzenlediğimiz geleneksel kahvaltı buluşmaları'
        },
        {
            id: 2,
            src: '/images/tanitim/HİKEV Tanıtım (2).png',
            title: 'Bursiyerlerle Geleneksel Kahvaltı',
            description: 'Öğrencilerimizle samimi bir ortamda buluşma imkânı'
        },
        {
            id: 3,
            src: '/images/tanitim/HİKEV Tanıtım (3).png',
            title: 'Buluşma ve Yarışma Programları',
            description: 'Bursiyerlerimizi bir araya getiren buluşma programları'
        },
        {
            id: 4,
            src: '/images/tanitim/HİKEV Tanıtım (4).png',
            title: 'Eğitim ve Kültür Yarışmaları',
            description: 'Gençleri eğitim ve kültür temalı yarışmalarla buluşturuyoruz'
        },
        {
            id: 5,
            src: '/images/tanitim/HİKEV Tanıtım (5).png',
            title: 'Alan Bazlı Kariyer Danışmanlığı',
            description: 'Gençlerin mesleki gelişimlerine yönelik kariyer danışmanlık toplantıları'
        },
        {
            id: 6,
            src: '/images/tanitim/HİKEV Tanıtım (6).png',
            title: 'Eğitim Panelleri',
            description: 'Alanında uzman isimlerin katılımıyla eğitim panelleri'
        },
        {
            id: 7,
            src: '/images/tanitim/HİKEV Tanıtım (7).png',
            title: 'Kitap Okuma Bursu Programı',
            description: 'Gençlerin entelektüel gelişimini destekleyen kitap okuma bursu'
        },
        {
            id: 8,
            src: '/images/tanitim/HİKEV Tanıtım (8).png',
            title: 'Ufuk Yıldızları İzcilik Kulübü',
            description: 'Doğada eğitim ile ahlaklı bireyler yetiştiren izcilik faaliyetleri'
        },
        {
            id: 9,
            src: '/images/tanitim/HİKEV Tanıtım (9).png',
            title: 'İzcilerle Doğa Eğitimi',
            description: 'Ruhsal, fiziksel, zihinsel gelişimi destekleyen doğa kampları'
        },
        {
            id: 10,
            src: '/images/tanitim/HİKEV Tanıtım (10).png',
            title: 'İzcilik Kulübü Etkinlikleri',
            description: '126 genç izci ve 30 gönüllü ile gerçekleştirilen etkinlikler'
        },
        {
            id: 11,
            src: '/images/tanitim/HİKEV Tanıtım (11).png',
            title: 'Kız İzciler Kampı',
            description: 'Kız izcilerimizle düzenlenen kamp programları'
        },
        {
            id: 12,
            src: '/images/tanitim/HİKEV Tanıtım (12).png',
            title: 'Hacı İsmail Kurt Merkezi Derslikler Binası',
            description: 'İstanbul Sabahattin Zaim Üniversitesi\'ne kazandırdığımız eğitim binası açılış töreni'
        },
        {
            id: 13,
            src: '/images/tanitim/HİKEV Tanıtım (13).jpg',
            title: 'Derslikler Binası Açılış Töreni',
            description: 'HİKEV\'in üniversiteye kazandırdığı Hacı İsmail Kurt Merkezi Derslikler Binası açılış anı'
        }
    ];

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Faaliyetler'} pagesub={'Hikevimiz'} pageTop={'Faaliyetler'} />
            
            {/* Ana Açıklama Bölümü */}
            <div className="wpo-activities-intro-section p-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="wpo-section-title text-center">
                                <h2>Faaliyetlerimiz</h2>
                                <h3>Hacı İsmail Kurt Eğitim Vakfı olarak, eğitim alanında gerçekleştirdiğimiz çeşitli faaliyetler ve projelerle topluma değer katmaya devam ediyoruz. İşte bizim için önemli olan bazı anlar ve çalışmalarımız...</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fotoğraf Galerisi */}
            <div className="wpo-activities-gallery-section p-5">
                <div className="container">
                    <div className="activities-gallery">
                        <div className="row">
                            {activityImages.map((image, index) => (
                                <div key={image.id} className="col-lg-4 col-md-6 col-12">
                                    <div className="activity-item">
                                        <div className="activity-img">
                                            <Image 
                                                src={image.src} 
                                                alt={image.title}
                                                width={400}
                                                height={300}
                                                style={{
                                                    width: '100%',
                                                    height: '250px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <div className="activity-overlay">
                                                <div className="activity-content">
                                                    <h4>{image.title}</h4>
                                                    <p>{image.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
            <Scrollbar/>
            
            <style jsx>{`
                .wpo-activities-intro-section {
                    background: var(--hikev-gray-light);
                    position: relative;
                }
                
                .wpo-activities-intro-section h2 {
                    color: var(--hikev-primary-dark);
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                
                .wpo-activities-intro-section p {
                    color: var(--hikev-primary-dark);
                    font-size: 16px;
                    line-height: 1.7;
                    margin: 0;
                }
                
                .wpo-activities-gallery-section {
                    background: var(--hikev-white);
                    position: relative;
                }
                
                .activities-gallery .row {
                    gap: 30px 0;
                }
                
                .activity-item {
                    background: var(--hikev-white);
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 5px 20px var(--hikev-shadow-light);
                    transition: all 0.3s ease;
                    margin-bottom: 30px;
                }
                
                .activity-item:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 40px var(--hikev-shadow-medium);
                }
                
                .activity-img {
                    position: relative;
                    overflow: hidden;
                }
                
                .activity-img img {
                    transition: all 0.3s ease;
                }
                
                .activity-item:hover .activity-img img {
                    transform: scale(1.05);
                }
                
                .activity-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        45deg, 
                        rgba(0, 55, 100, 0.9), 
                        rgba(0, 179, 227, 0.9)
                    );
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: all 0.3s ease;
                }
                
                .activity-item:hover .activity-overlay {
                    opacity: 1;
                }
                
                .activity-content {
                    text-align: center;
                    padding: 20px;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                }
                
                .activity-item:hover .activity-content {
                    transform: translateY(0);
                }
                
                .activity-content h4 {
                    color: var(--hikev-white);
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }
                
                .activity-content p {
                    color: var(--hikev-white);
                    font-size: 14px;
                    line-height: 1.5;
                    margin: 0;
                }
                
                @media (max-width: 991px) {
                    .wpo-activities-intro-section h2 {
                        font-size: 30px;
                    }
                    
                    .activity-item {
                        margin-bottom: 25px;
                    }
                }
                
                @media (max-width: 767px) {
                    .wpo-activities-intro-section h2 {
                        font-size: 26px;
                    }
                    
                    .activity-content h4 {
                        font-size: 18px;
                    }
                    
                    .activity-content p {
                        font-size: 13px;
                    }
                }
                
                @media (max-width: 576px) {
                    .activities-gallery .col-12 {
                        padding: 0 10px;
                    }
                    
                    .activity-item {
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </Fragment>
    )
};

export default Activities;
