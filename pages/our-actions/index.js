import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.svg'
import AboutS4 from '../../components/AboutS4';
import ActionsList from '../../components/ActionsList';
import abimg from '/public/images/hikevimiz/icraat.png'

const OurActions = () => {

    const generalGoalsData = {
        title: "Genel Hedefler",
        description: "Vakfın amacı; insani, içtimai, ilmi, iktisadi ve siyasi aşamalar doğrultusunda ilkokul, kolej, meslek yüksekokulu, üniversite ve enstitü gibi eğitim kurumları açmak ve işletmektir. Maddi imkânı bulunmayan, mahir, zeki ve başarılı öğrencilere burs ve eğitim desteği sağlamak öncelikli hedefler arasındadır.",
        points: [
            "Özel ve üstün zekâlı öğrenciler için özel eğitim kurumları, oyun atölyeleri, psikolojik ve mental destek programları kurmak; kurslar ve seminerler düzenlemek amaçlanmaktadır.",
            "Bilimsel araştırma merkezleri, kütüphaneler, dershaneler, atölyeler, gözlemevleri, laboratuvarlar, yurtlar, spor ve sosyal tesisler gibi yapılar kurmak; eğitimle ilgili kurslar, test merkezleri, meslek edindirme ve yabancı dil programları düzenlemek planlanmaktadır.",
            "Eğitimle ilgili araştırmalar yaparak yayınlar hazırlamak, yarışmalar düzenlemek, başarılı kişi ve kurumlara \"Eğitim Dostu\" ödülleri vermek; kurumların donanım ve altyapı gelişimine destek olmak hedeflenmektedir.",
            "Dini, ilmi, ahlaki, tarihi, edebi ve stratejik eserlerin basılmasını, tercümesini ve yayınlanmasını desteklemek; anket, tarama, saha araştırmaları yürütmek; basın-yayın ve sosyal medya projeleri geliştirmek; kamu kurumları, vakıflar, üniversiteler ve toplum gönüllü kuruluşlarıyla iş birliği içinde projeler üretmek ve kaynak geliştirmek de vakfın amaçları arasındadır."
        ]
    };

    const accomplishmentsData = {
        title: "Yaptıklarımız",
        description: "",
        points: [
            "Üsküdar Üniversitesi kuruluş çalışması",
            "Sabahattin Zaim Üniversitesi Eğitim Fakültesi (2022)",
            "120 öğrenciye burs, muhtelif eğitim destekleri, izcilik kulübü faaliyetleri",
            "Dünyada baş gösteren gayri insani ve zulümkâr hadiselere karşı, toplum gönüllüsü teşekküllerle iş birliği yapmak; öğrencilerin adalet ve vicdan duygularını geliştirici etkinlik planları hazırlamak.",
            "Bilhassa Gazze'de on binlerce paralimpik çocuk ve gencin geleceğine katkı sağlayacak projeler üretmek.",
            "Kafkasya'dan hicret eden yetim çocukların geleceğine el uzatacak projeler geliştirmek.",
            "Doğu Türkistan'da yapılan zulümlere dikkat çeken etkinlikler düzenlemek ve çözüm süreçlerinde aktif rol almak."
        ]
    };

    const ongoingProjectsData = {
        title: "Yapılmakta Olanlar",
        description: "",
        points: [
            "Bilgi yarışmaları, okul ziyaretleri, alan ve kaynak araştırmaları, TGT iş birliği çalışmaları.",
            "Kültürel mirasa sahip çıkma eksenli akademik çalışmalara ve enstitü kurma çalışmalarına destek vermek.",
            "Çevre, tabiat ve ziraat mektebi araştırmaları ile ilgili enstitü kurma çalışmaları yürütmek.",
            "Özel ve stratejik araştırma alanlarını teşvik edici burs düzenleme ve uygulamalarını hayata geçirmek."
        ]
    };

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'İcraatlerimiz'} pagesub={'Hikevimiz'} pageTop={'İcraatlerimiz'} />
            
            <AboutS4 
                pageData={generalGoalsData} 
                abClass={'wpo-about-section-s6'} 
                abImg={abimg} 
                Atitle={'Eğitim ve Hayır Hizmetlerinde Öncü'} 
            />
            
            <ActionsList data={accomplishmentsData} bgClass="bg-light" />
            
            <ActionsList data={ongoingProjectsData} bgClass="bg-white" />
            
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default OurActions;
