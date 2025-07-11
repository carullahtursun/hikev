import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.svg'
import TeamSection2 from '../../components/TeamSection2';
import AboutS4 from '../../components/AboutS4';
import abimg from '/public/images/hikevimiz/mutevelli.png'

const Trustees = () => {

    const trusteesData = {
        title: "Mütevelli Heyeti",
        description: "Hacı İsmail Kurt Eğitim Vakfı'nın mütevelli heyeti, vakfın stratejik yönünü belirleyen ve denetleyen üyelerden oluşur. Bu heyet, vakfın misyonunu gerçekleştirmek için gerekli kararları alır ve kaynakların etkin kullanımını sağlar.",
        points: [
            "Vakfın misyon ve vizyonunu belirler",
            "Stratejik planların oluşturulması ve uygulanması",
            "Mali denetim ve raporlama süreçlerini yönetir",
            "Kaynakların etkin kullanımı için kararlar alır",
            "Toplulukla ilişkileri güçlendirir",
            "Vakıf faaliyetlerinin şeffaflığını sağlar"
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
                Atitle={'Hacı İsmail Kurt Eğitim Vakfı Mütevelli Heyeti'} 
            />
            <TeamSection2 pageType="trustees" />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default Trustees;
