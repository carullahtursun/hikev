import React from 'react';
import ContactForm from '../ContactFrom'


const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Adres</h2>
                                            <p>Altunizade Mahallesi  F. K. Gökay Cad. Okul Sokak No:1 Altunizade Sitesi A-Blok Kat:3 Daire:16 Üsküdar/İstanbul </p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email</h2>
                                            <p>hikevorg@gmail.com</p>
                                            <p>hikevorg@gmail.com</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>İletişim</h2>
                                            <p>Tel: +0216 339 09 00</p>
                                            <p>Fax: +0216 339 47 47</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        {/* <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div> */}
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.843407043415!2d28.832234699999997!3d41.0505534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5145f62a9f9%3A0xd696cb5fbc62cbf2!2zSEFDSSDEsFNNQcSwTCBLVVJUIEXEnsSwVMSwTSBWQUtGSQ!5e0!3m2!1str!2str!4v1742326732820!5m2!1str!2str"></iframe>
                </div>
            </section>
            
            <style jsx>{`
                .office-info .row {
                    display: flex;
                    align-items: stretch;
                }
                .office-info-item {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 200px;
                    padding: 30px 20px;
                }
                .office-info-text {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .office-info-text h2 {
                    margin-bottom: 15px;
                }
                .office-info-text p {
                    margin-bottom: 8px;
                    line-height: 1.6;
                }
                .office-info-text p:last-child {
                    margin-bottom: 0;
                }
                @media (max-width: 768px) {
                    .office-info-item {
                        min-height: 150px;
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </section>
     )
        
}

export default Contactpage;
