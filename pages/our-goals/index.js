import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.svg'
import AboutS4 from '../../components/AboutS4';
import abimg from '/public/images/hikevimiz/hedefimiz.png'

const OurGoals = () => {

    const goalsData = {
        title: "Hedeflerimiz",
        description: "Vakfımızın uzun vadeli hedefleri ve gelecek vizyonu doğrultusunda belirlediğimiz stratejik amaçlarımız:",
        points: [
            "Kaliteli eğitime erişimi artırmak ve eğitim fırsatlarını yaygınlaştırmak",
            "Bilimsel araştırma ve geliştirme faaliyetlerini desteklemek",
            "Kültürel mirasımızı korumak ve gelecek nesillere aktarmak",
            "Toplumsal sorumluluk bilinciyle hareket eden bireyler yetiştirmek",
            "Uluslararası iş birliği ve dayanışma ağları kurmak",
            "Sürdürülebilir kalkınma hedeflerine katkı sağlamak",
            "İnovatif eğitim yöntemleri geliştirmek ve uygulamak"
        ]
    };

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Hedeflerimiz'} pagesub={'Hikevimiz'} pageTop={'Hedeflerimiz'} />
            <AboutS4 
                pageData={goalsData} 
                abClass={'wpo-about-section-s6'} 
                abImg={abimg} 
                Atitle={'Geleceğe Yönelik Hedeflerimiz'} 
            />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default OurGoals;
