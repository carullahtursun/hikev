import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import AboutS4 from '../../components/AboutS4'
import Logo from '/public/images/logo.svg'
import abimg from '/public/images/about.jpg'

const Scholarships = (props) => {
    const scholarshipData = {
        title: "Burs ve Eğitim Programları",
        description: "Vakfımız, Türkiye'nin dört bir yanından gelen öğrencilere eğitim hayatlarında destek olmaktan büyük mutluluk duymaktadır. Eğitimin geleceğin anahtarı olduğuna inanan vakfımız, başarılı ve ihtiyaç sahibi öğrencilere kapılarını açmıştır.",
        items: [
            "Lise, Lisans ve Yüksek Lisans seviyelerinde öğrencilere burs desteği",
            "Başarılı öğrencilere nakdi yardım programları",
            "Eğitim materyali ve kaynak desteği",
            "Mentörlük ve rehberlik hizmetleri",
            "Kariyer danışmanlığı ve iş bulma desteği",
            "Sosyal ve kültürel aktivite imkânları",
            "Akademik başarı ödüllendirme programları",
            "Mezuniyet sonrası takip ve destek sistemi"
        ]
    };

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Burs ve Eğitim'} pagesub={'Hikevimiz'} pageTop={'Burs ve Eğitim'} />
            
           
            {/* İstatistik Bölümü */}
            <div className="wpo-scholarship-stats-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="wpo-section-title text-center mb-5">
                                <h2>Burs İstatistiklerimiz</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="scholarship-stats-wrap">
                        <div className="row equal-height">
                            <div className="col-lg-6 col-md-12">
                                <div className="stats-content card-content">
                                    <h3>Verilen Burslar</h3>
                                    <p>Lise, Lisans, Yüksek Lisans öğrencisi olmak üzere yüzlerce öğrenciye burs yardımı yapılmıştır ve yapılmaya devam etmektedir.</p>
                                    
                                    <div className="yearly-stats">
                                        <div className="stat-item">
                                            <div className="year">2020 - 2021</div>
                                            <div className="number">140 <span>öğrenci</span></div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="year">2021 - 2022</div>
                                            <div className="number">151 <span>öğrenci</span></div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="year">2022 - 2023</div>
                                            <div className="number">138 <span>öğrenci</span></div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="year">2023 - 2024</div>
                                            <div className="number">144 <span>öğrenci</span></div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="year">2024 - 2025</div>
                                            <div className="number">111 <span>öğrenci</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-md-12">
                                <div className="additional-support card-content">
                                    <h3>Ek Destekler</h3>
                                    <p>Burs dışında ihtiyacı olan başarılı onlarca öğrenciye nakdi yardımda bulunmuştur.</p>
                                    
                                    <div className="support-features">
                                        <div className="feature-item">
                                            <div className="feature-icon">
                                                <i className="fi flaticon-education"></i>
                                            </div>
                                            <div className="feature-content">
                                                <h4>Eğitim Materyali</h4>
                                                <p>Kitap, bilgisayar ve diğer eğitim araçları desteği</p>
                                            </div>
                                        </div>
                                        
                                        <div className="feature-item">
                                            <div className="feature-icon">
                                                <i className="fi flaticon-money"></i>
                                            </div>
                                            <div className="feature-content">
                                                <h4>Nakdi Yardım</h4>
                                                <p>Ani ihtiyaçlar için finansal destek programları</p>
                                            </div>
                                        </div>
                                        
                                        <div className="feature-item">
                                            <div className="feature-icon">
                                                <i className="fi flaticon-career"></i>
                                            </div>
                                            <div className="feature-content">
                                                <h4>Kariyer Desteği</h4>
                                                <p>Mezuniyet sonrası iş bulma ve kariyer danışmanlığı</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
            <Scrollbar/>
            
            <style jsx>{`
                .wpo-scholarship-stats-section {
                    background: var(--hikev-gray-light);
                    position: relative;
                }
                
                .scholarship-stats-wrap {
                    background: var(--hikev-white);
                    border-radius: 20px;
                    padding: 60px 40px;
                    box-shadow: 0 10px 30px var(--hikev-shadow-light);
                    position: relative;
                }
                
                .equal-height {
                    display: flex;
                    align-items: stretch;
                }
                
                .equal-height .col-lg-6 {
                    display: flex;
                }
                
                .card-content {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 30px;
                    background: var(--hikev-gray-light);
                    border-radius: 15px;
                    border: 2px solid transparent;
                    transition: all 0.3s ease;
                }
                
                .card-content:hover {
                    border-color: var(--hikev-primary-light);
                    box-shadow: 0 8px 25px var(--hikev-shadow-medium);
                    transform: translateY(-3px);
                }
                
                .stats-content h3,
                .additional-support h3 {
                    color: var(--hikev-primary-dark);
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    text-align: center;
                }
                
                .stats-content p,
                .additional-support p {
                    color: var(--hikev-primary-dark);
                    font-size: 16px;
                    line-height: 1.7;
                    margin-bottom: 30px;
                    text-align: center;
                }
                
                .yearly-stats {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    flex-grow: 1;
                }
                
                .stat-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: var(--hikev-white);
                    padding: 18px 25px;
                    border-radius: 12px;
                    border-left: 4px solid var(--hikev-primary-light);
                    transition: all 0.3s ease;
                    min-height: 65px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }
                
                .stat-item:hover {
                    transform: translateX(8px);
                    box-shadow: 0 6px 20px var(--hikev-shadow-light);
                    background: var(--hikev-primary-light);
                }
                
                .stat-item:hover .year,
                .stat-item:hover .number,
                .stat-item:hover .number span {
                    color: var(--hikev-white) !important;
                }
                
                .stat-item .year {
                    font-weight: 600;
                    color: var(--hikev-primary-dark);
                    font-size: 16px;
                }
                
                .stat-item .number {
                    font-weight: 700;
                    font-size: 24px;
                    color: var(--hikev-primary-light);
                }
                
                .stat-item .number span {
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--hikev-primary-dark);
                }
                
                .support-features {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    flex-grow: 1;
                }
                
                .feature-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                    padding: 20px;
                    background: var(--hikev-white);
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    min-height: 90px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }
                
                .feature-item:hover {
                    background: var(--hikev-primary-light);
                    box-shadow: 0 8px 25px var(--hikev-shadow-medium);
                    transform: translateY(-3px);
                }
                
                .feature-item:hover .feature-content h4,
                .feature-item:hover .feature-content p {
                    color: var(--hikev-white) !important;
                }
                
                .feature-icon {
                    width: 50px;
                    height: 50px;
                    background: var(--hikev-gradient);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: 0 4px 12px var(--hikev-shadow-blue);
                }
                
                .feature-icon i {
                    color: var(--hikev-white);
                    font-size: 20px;
                }
                
                .feature-content {
                    flex: 1;
                }
                
                .feature-content h4 {
                    color: var(--hikev-primary-dark);
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }
                
                .feature-content p {
                    color: var(--hikev-primary-dark);
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 0;
                }
                
                @media (max-width: 991px) {
                    .scholarship-stats-wrap {
                        padding: 40px 20px;
                    }
                    
                    .equal-height {
                        flex-direction: column;
                    }
                    
                    .equal-height .col-lg-6 {
                        margin-bottom: 30px;
                    }
                    
                    .card-content {
                        padding: 25px 20px;
                    }
                    
                    .stat-item {
                        flex-direction: column;
                        text-align: center;
                        gap: 10px;
                        padding: 20px;
                    }
                }
                
                @media (max-width: 767px) {
                    .stats-content h3,
                    .additional-support h3 {
                        font-size: 24px;
                    }
                    
                    .feature-item {
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        padding: 25px 20px;
                    }
                    
                    .card-content {
                        padding: 20px 15px;
                    }
                }
            `}</style>
        </Fragment>
    )
};

export default Scholarships;
