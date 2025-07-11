import React from 'react'
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import HeaderTopbar from '../../components/HeaderTopbar'
import TeamSection2 from '../../components/TeamSection2'

const OrganizationPage = () => {

    return (
        <div>
            <HeaderTopbar />
            <Navbar />
            <PageTitle pageTitle='Organizasyon' pagesub='Organizasyon' />
            <TeamSection2 pageType="organization" />
            <Footer />
        </div>
    )
}

export default OrganizationPage
