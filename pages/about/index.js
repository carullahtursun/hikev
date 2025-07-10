import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import AboutS2 from '../../components/AboutS2';
import AccordionSection from '../../components/AccordionSection';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/TeamSection';


const AboutPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Hakkımızda'} pagesub={'Hakkımızda'}/> 
            <AboutS2/>
            <AccordionSection/>
            <FunFact/>
            <TeamSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
