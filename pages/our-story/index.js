import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import VideoSec from '../../components/VideoSec';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import Service from '../../components/Service';
import AboutS2 from '../../components/AboutS2';
import FunFact from '../../components/FunFact';
import CauseSection from '../../components/CauseSection';
import TeamSection from '../../components/TeamSection';
import PartnerSection from '../../components/PartnerSection';
import AboutS4 from '../../components/AboutS4';
import abimg from '/public/images/about6.jpg'
import { pageData } from '../../api/pages';
import Hero from '../../components/hero';
import Hero2 from '../../components/hero2';
import Testimonial2 from '../../components/Testimonial2';
import TeamSection2 from '../../components/TeamSection2';

const OurStory =() => {

    const creativeData = {
        title: "Kurucumuz",
        description:"Hacı İsmail Kurt, 1935 yılında Trabzon'un Of ilçesinde doğdu. Yaklaşık 80 yıllık ömrü boyunca sayısız hayır işine ve projeye imza attı. Doğduğu ilçeye cami ve Kur'an kursları yaptırarak eğitim ve hayır hizmetlerinde bulundu. Başta bir üniversite olmak üzere muhtelif eğitim kurumlarını hayata geçirmek ve hayır faaliyetlerini yaygınlaştırmak amacıyla 2009 yılında Hacı İsmail Kurt Eğitim Vakfı'nı (HİKEV) kurdu. 2009 yılında vefat eden Merhum Hacı İsmail Kurt'u rahmet ve minnetle yâd ediyoruz.",
        abImg:"/images/about6.jpg"
    };

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <div id='our-purposes'> 
            <Hero2/>
            </div>
            <div id='our-goals'> 
            <AboutS4 pageData={pageData[1]} abClass={'wpo-about-section-s6'} abImg={abimg} Atitle={'We are Protecting Wildlife With All Our Dedication.'} />
            </div>
            <div  id='our-actions'> 
            <Testimonial2 tClass={'wpo-testimonial-area-s3 pt-0'}/>
            </div>
            <div id='our-founder'>
            <AboutS4 abImg={abimg} pageData={creativeData} Atitle={'We are Protecting The Ocean With All Our Dedication.'}/>
            </div>
            <div id='trustees' >
            <TeamSection/>
            </div>
            <div id='managment' >
            <TeamSection2/>
            </div>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default OurStory;
