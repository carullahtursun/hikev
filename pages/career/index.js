import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.svg'
import AboutS4 from '../../components/AboutS4';
import abimg from '/public/images/hikevimiz/kariyer.png'

const Career = () => {

    const careerData = {
        title: "Kariyer Fırsatları",
        description: "Hacı İsmail Kurt Eğitim Vakfı'nda kariyer yapma fırsatları ve çalışma imkanları hakkında bilgiler:",
        points: [
            "Eğitim alanında uzman personel ihtiyacı",
            "Araştırma ve geliştirme projelerinde çalışma fırsatları",
            "Sosyal sorumluluk projelerinde yer alma imkanı",
            "Uluslararası iş birliği projelerinde görev alma şansı",
            "Kişisel ve mesleki gelişim programları",
            "Esnek çalışma saatleri ve uzaktan çalışma imkanları",
            "Performans odaklı ödüllendirme sistemi"
        ]
    };

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Kariyer'} pagesub={'Hikevimiz'} pageTop={'Kariyer'} />
            <AboutS4 
                pageData={careerData} 
                abClass={'wpo-about-section-s6'} 
                abImg={abimg} 
                Atitle={'Bizimle Çalışın'} 
            />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default Career;
