import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import AboutS4 from '../../components/AboutS4';
import PartnerSection from '../../components/PartnerSection';
import abimg from '/public/images/about6.jpg'

const Partners = () => {

    const partnersData = {
        title: "Paydaşlarımız",
        description: "Vakfımızın misyonu doğrultusunda iş birliği yaptığımız kurumlar ve ortaklarımız:",
        points: [
            "Üniversiteler ve yükseköğretim kurumları",
            "Ulusal ve uluslararası eğitim organizasyonları",
            "Sivil toplum kuruluşları ve vakıflar",
            "Kamu kurum ve kuruluşları",
            "Özel sektör şirketleri ve sponsor kurumlar",
            "Araştırma merkezleri ve think-tank kuruluşları",
            "Uluslararası yardım ve kalkınma ajansları"
        ]
    };

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Paydaşlarımız'} pagesub={'Hikevimiz'} pageTop={'Paydaşlarımız'} />
            <AboutS4 
                pageData={partnersData} 
                abClass={'wpo-about-section-s6'} 
                abImg={abimg} 
                Atitle={'İş Birliği ve Ortaklıklarımız'} 
            />
            <PartnerSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default Partners;
