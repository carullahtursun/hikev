import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.svg'
import styles from '../../styles/activities.module.css'
import ActivitiesSections from '../../components/ActivitiesSections'


const Activities = (props) => {
    

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Faaliyetler'} pagesub={'Hikevimiz'} pageTop={'Faaliyetler'} />
            
            {/* Ana Açıklama Bölümü */}
            <div className={`${styles['wpo-activities-intro-section']} p-5`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className={styles['wpo-section-title']}>
                                <h1 className='text-center'>Faaliyetlerimiz</h1>
                                <p className='text-center'>Hacı İsmail Kurt Eğitim Vakfı olarak, eğitim alanında gerçekleştirdiğimiz çeşitli faaliyetler ve projelerle topluma değer katmaya devam ediyoruz. Her bir aktivitemiz, gençlerimizin kişisel ve mesleki gelişimine katkı sağlamayı hedeflemektedir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aktivite Bölümleri */}
            <ActivitiesSections />

            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default Activities;
