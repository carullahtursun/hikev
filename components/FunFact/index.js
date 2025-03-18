import React from 'react'
import Image from 'next/image'
import shape from '/public/images/cta-shape.png'


const FunFact = (props) => {

    const funfact = [
        {
            title: '250+',
            subTitle: 'Toplam Gönüllü',
        },
        {
            title: '1026+',
            subTitle: 'Bursiyer',
        },
        {
            title: '2500+',
            subTitle: 'Bağısçı',
        },
        {
            title: '1250+',
            subTitle: 'Öğrenci Projesi',
        },


    ]

    return (
        <section className="wpo-fun-fact-section mb-5">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funfact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="shape"><Image src={shape} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;