import React from 'react'
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import HeaderTopbar from '../../components/HeaderTopbar'
import TeamSection2 from '../../components/TeamSection2'
import NoPoint from '../../components/NoPoint'
import abimg from '/public/images/about6.jpg'

const DonationPage = () => {

    return (
        <div>
            <HeaderTopbar />
            <Navbar />
            <PageTitle pageTitle='Bağış Organizasyonu' pagesub='Bağış Organizasyonu' />
           <NoPoint abClass={'wpo-about-section-s6'} abImg={abimg} Atitle={'Bağış Organizasyonu'}/>
            <Footer />
        </div>
    )
}

export default DonationPage
