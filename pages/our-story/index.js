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

const OurStory =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <AboutS4 pageData={pageData[0]} abClass={'wpo-about-section-s6'} abImg={abimg} Atitle={'We are Protecting Wildlife With All Our Dedication.'} />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default OurStory;
