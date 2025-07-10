import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import AboutS4 from '../../components/AboutS4';
import TeamSection2 from '../../components/TeamSection2';
import abimg from '/public/images/about6.jpg'

const Management = () => {

    const managementData = {
        title: "Yönetim Ekibi",
        description: "Vakfımızın günlük operasyonlarını yürüten ve stratejik hedeflere ulaşılması için çalışan yönetim ekibi:",
        points: [
            "Günlük operasyonların etkili yönetimi",
            "Stratejik planların hayata geçirilmesi",
            "Proje yönetimi ve koordinasyonu",
            "İnsan kaynakları yönetimi",
            "Mali kaynakların optimal kullanımı",
            "Paydaşlarla ilişkilerin geliştirilmesi",
            "Kalite güvence sistemlerinin uygulanması"
        ]
    };

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Yönetim Ekibi'} pagesub={'Hikevimiz'} pageTop={'Yönetim Ekibi'} />
            <AboutS4 
                pageData={managementData} 
                abClass={'wpo-about-section-s6'} 
                abImg={abimg} 
                Atitle={'Operasyonel Yönetim'} 
            />
            <TeamSection2 />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default Management;
