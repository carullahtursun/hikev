import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.svg'
import AboutS4 from '../../components/AboutS4'
import abimg from '/public/images/kurucu.jpg'

const Founder = () => {

    const founderData = {
        title: "Hacı İsmail Kurt (1935-2009)",
        description: "Hacı İsmail Kurt (1935-2009), Trabzon'un Of ilçesinde doğdu. İstanbul'da geçen yaklaşık 80 yıllık ömrüne sayısız proje ve hizmet sığdırdı. Başka yardım kuruluşlarıyla yaptığı iş birliği hizmetleriyle de tanınan Hacı İsmail Kurt, başta bir üniversite olmak üzere muhtelif eğitim kurumlarını kurabilmek ve hayır, iyilik, ilim, kültür ve eğitim faaliyetlerini büyütmek amacıyla 2009 yılında Hacı İsmail Kurt Eğitim Vakfı'nı (HİKEV) kurdu. Hayır ve hasenat defterinin, umduğu iyilik ve güzelliklerle, zenginliklerle, kıyamete dek dolmasını niyaz ediyoruz.",
        points: [
            "Trabzon'un Of ilçesinde doğdu (1935)",
            "İstanbul'da 80 yıllık bir ömür geçirdi", 
            "Doğduğu ilçeye cami ve Kur'an kursları yaptırdı",
            "Muhtelif eğitim kurumları kurma vizyonu",
            "2009 yılında HİKEV'i kurdu",
            "Hayır, iyilik, ilim, kültür ve eğitim faaliyetleri",
            "Evlat ve yakınlarına sabır ve selamet diliyoruz"
        ]
    };

    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Kurucumuz'} pagesub={'Hikevimiz'} pageTop={'Kurucumuz'} />
            <AboutS4 
                pageData={founderData} 
                abClass={'wpo-about-section-s6'} 
                abImg={abimg} 
                Atitle={'Bizimle Çalışın'} 
            />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default Founder;
