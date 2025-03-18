import React from "react";
import Link from 'next/link'
import Image from "next/image";
import timg1 from "/public/images/team/1.jpg";
import timg2 from "/public/images/team/2.jpg";
import timg3 from "/public/images/team/3.jpg";
import timg4 from "/public/images/team/4.jpg";
import timg5 from "/public/images/team/5.jpg";

const TeamSection2 = () => {

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

    return (
        <div className="wpo-team-area-s2 section-padding">
            <div className="">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="wpo-section-title">
                            <span>Yönetim Kurulu</span>
                            <h2>Vakfımızın Yönetim Kurulu Üyeleri</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="team-items">
                        <div className="row justify-content-center">
                            {manegerTeams.map((Team) => (
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
