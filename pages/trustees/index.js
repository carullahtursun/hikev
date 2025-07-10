import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import AboutS4 from '../../components/AboutS4';
import TeamSection from '../../components/TeamSection';
import abimg from '/public/images/about6.jpg'

const Trustees = () => {

    const trusteesData = {
        title: "Mütevelli Heyeti",
        description: "Vakfımızın yönetim ve denetim organlarında görev alan mütevelli heyeti üyeleri:",
        points: [
            "Vakıf senedinde belirtilen amaçlar doğrultusunda faaliyet gösterme",
            "Vakfın mali durumunu izleme ve denetleme",
            "Stratejik kararların alınmasında aktif rol alma",
            "Vakfın toplumsal misyonunu gerçekleştirme",
            "Yasal yükümlülüklerin yerine getirilmesini sağlama",
            "Vakıf varlıklarının korunması ve geliştirilmesi",
            "Hesap verebilirlik ve şeffaflık ilkelerini uygulama"
        ]
    };

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Mütevelli Heyeti'} pagesub={'Hikevimiz'} pageTop={'Mütevelli Heyeti'} />
            <AboutS4 
                pageData={trusteesData} 
                abClass={'wpo-about-section-s6'} 
                abImg={abimg} 
                Atitle={'Vakıf Yönetimi'} 
            />
            <TeamSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default Trustees;
