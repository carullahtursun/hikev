import React from "react";
import Link from 'next/link'
import Image from "next/image";
import timg1 from "/public/images/team/1.jpg";
import timg2 from "/public/images/team/2.jpg";
import timg3 from "/public/images/team/3.jpg";
import timg4 from "/public/images/team/4.jpg";
import timg5 from "/public/images/team/5.jpg";

const TeamSection2 = ({ pageType = "management" }) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const manegerTeams = [
        {
            id: '1',
            tImg: timg1,
            name: 'Mehmet Çakırca',
            slug: 'Mehmet-Cakirca',
            title: 'Yönetim Kurulu Üyesi',
        },
        {
            id: '2',
            tImg: timg2,
            name: 'Alper İrfan Bay',
            slug: 'Alper-Irfan-Bay',
            title: 'Yönetim Kurulu Üyesi',
        },
        {
            id: '3',
            tImg: timg3,
            name: 'Reşat Gürel',
            slug: 'Resat-Gurel',
            title: 'Yönetim Kurulu Üyesi',
        },
        {
            id: '4',
            tImg: timg4,
            name: 'Ahmet Taylan',
            slug: 'Ahmet-Taylan',
            title: 'Yönetim Kurulu Üyesi',
        },
        {
            id: '5',
            tImg: timg5,
            name: 'Muhlis Aksu',
            slug: 'Muhlis-Aksu',
            title: 'Yönetim Kurulu Üyesi',
        },
    ]

    const trusteesTeams = [
        {
            id: '1',
            tImg: timg1,
            name: 'Mehmet Çakırca',
            slug: 'Mehmet-Cakirca',
            title: 'Mütevelli Heyet Başkanı',
        },
        {
            id: '2',
            tImg: timg2,
            name: 'Süleyman Özdemir',
            slug: 'Suleyman-Ozdemir',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '3',
            tImg: timg3,
            name: 'Ahmet Cengiz Tangören',
            slug: 'Ahmet-Cengiz-Tangoren',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '4',
            tImg: timg4,
            name: 'Halit Serhan Ercivelek',
            slug: 'Halit-Serhan-Ercivelek',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '5',
            tImg: timg5,
            name: 'Osman Acun',
            slug: 'Osman-Acun',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '6',
            tImg: timg1,
            name: 'Muhsin Günyeli',
            slug: 'Muhsin-Gunyeli',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '7',
            tImg: timg2,
            name: 'Ali Alp',
            slug: 'Ali-Alp',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '8',
            tImg: timg3,
            name: 'Serdar Hüseyin Yıldırım',
            slug: 'Serdar-Huseyin-Yildirim',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '9',
            tImg: timg4,
            name: 'Ünsal Sözbir',
            slug: 'Unsal-Sozbir',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '10',
            tImg: timg5,
            name: 'Ahmet Yılmaz',
            slug: 'Ahmet-Yilmaz',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '11',
            tImg: timg1,
            name: 'Yusuf Kenan Özdoğan',
            slug: 'Yusuf-Kenan-Ozdogan',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '12',
            tImg: timg2,
            name: 'Alper İrfan Bay',
            slug: 'Alper-Irfan-Bay',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '13',
            tImg: timg3,
            name: 'Reşat Gürel',
            slug: 'Resat-Gurel',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '14',
            tImg: timg4,
            name: 'Ahmet Taylan',
            slug: 'Ahmet-Taylan',
            title: 'Mütevelli Heyet Üyesi',
        },
        {
            id: '15',
            tImg: timg5,
            name: 'Muhlis Aksu',
            slug: 'Muhlis-Aksu',
            title: 'Mütevelli Heyet Üyesi',
        },
    ]

    const organizationTeams = [
        {
            id: '1',
            tImg: timg1,
            name: 'İnsani İşler Birimi',
            slug: 'insani-isler-birimi',
            title: 'TGT Yönetimi',
        },
        {
            id: '2',
            tImg: timg2,
            name: 'İçtimai İşler Birimi',
            slug: 'ictimai-isler-birimi',
            title: 'TGT Yönetimi',
        },
        {
            id: '3',
            tImg: timg3,
            name: 'İlmi-Eğitim İşleri Birimi',
            slug: 'ilmi-egitim-isleri-birimi',
            title: 'TGT Yönetimi',
        },
        {
            id: '4',
            tImg: timg4,
            name: 'İktisadi İşler Birimi',
            slug: 'iktisadi-isler-birimi',
            title: 'TGT Yönetimi',
        },
        {
            id: '5',
            tImg: timg5,
            name: 'Siyaset ve Stratejiler Birimi',
            slug: 'siyaset-ve-stratejiler-birimi',
            title: 'TGT Yönetimi',
        },
        {
            id: '6',
            tImg: timg1,
            name: "TGT'ler Masası",
            slug: 'tgtler-masasi',
            title: 'Danışma',
        },
        {
            id: '7',
            tImg: timg2,
            name: 'Hukuk Masası',
            slug: 'hukuk-masasi',
            title: 'Danışma',
        },
        {
            id: '8',
            tImg: timg3,
            name: 'Maarif Masası',
            slug: 'maarif-masasi',
            title: 'Danışma',
        },
        {
            id: '9',
            tImg: timg4,
            name: 'Spor Masası',
            slug: 'spor-masasi',
            title: 'Danışma',
        },
    ]

    // Sayfa türüne göre veri ve başlık seçimi
    let currentTeams, sectionTitle, sectionSubtitle;
    
    switch(pageType) {
        case "trustees":
            currentTeams = trusteesTeams;
            sectionTitle = "Mütevelli Heyetimiz";
            sectionSubtitle = "Vakfımızın Mütevelli Heyet Üyeleri";
            break;
        case "organization":
            currentTeams = organizationTeams;
            sectionTitle = "Organizasyonumuz";
            sectionSubtitle = "Vakfımızın Organizasyon Yapısı";
            break;
        default:
            currentTeams = manegerTeams;
            sectionTitle = "Yönetim Kurulu";
            sectionSubtitle = "Vakfımızın Yönetim Kurulu Üyeleri";
    }

    return (
        <div className="wpo-team-area-s2 section-padding container">
            <div className="">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="wpo-section-title">
                            <span>{sectionTitle}</span>
                            <h2>{sectionSubtitle}</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="team-items">
                        <div className="row justify-content-center">
                            {currentTeams.map((Team) => (
                                <div className="col-lg-2 col-md-4 col-sm-6 col-12 d-flex justify-content-center" key={Team.id}>
                                    <div className="wpo-team-item">
                                        <div className="wpo-team-img">
                                            <Image src={Team.tImg} alt={Team.name} />
                                        </div>
                                        <div className="wpo-team-content">
                                            <h2>
                                                <Link onClick={ClickHandler} href={`/team-single/${Team.slug}`}>
                                                    {Team.name}
                                                </Link>
                                            </h2>
                                            <span>{Team.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TeamSection2;
