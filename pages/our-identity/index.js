import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.svg'
import AboutS4 from '../../components/AboutS4';
import abimg from '/public/images/hikevimiz/kimlik.png'

const OurIdentity = () => {

    const identityData = {
        title: "Kurumsal Kimliğimiz",
        description: "Gönüllülükle terkip ve teçhiz olan bir vakıf kuruluşu olarak; Medeni Hukuk çerçevesinde Vakıflar Genel Müdürlüğüne bağlı, idari ve yasal mevzuatı 5737 Sayılı Vakıf Yasası ile çerçeveli bir Toplum Gönüllü Teşekkülü / bir TG.T'yiz.",
        points: []
    };

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Kimliğimiz'} pagesub={'Hikevimiz'} pageTop={'Kimliğimiz'} />
            <AboutS4 
                pageData={identityData} 
                abClass={'wpo-about-section-s6'} 
                abImg={abimg} 
                Atitle={'Hacı İsmail Kurt Eğitim Vakfı Kimliği'} 
            />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default OurIdentity;
