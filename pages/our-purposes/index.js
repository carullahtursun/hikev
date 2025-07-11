import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.svg'
import AboutS4 from '../../components/AboutS4';
import ActionsList from '../../components/ActionsList';
import abimg from '/public/images/hikevimiz/amacimiz.png'

const OurPurposes = () => {

    const purposeData = {
        title: "Amaç Aşamalarımız",
        description: "Vakıf aktimizde belirtilen temel hedeflerle uyum çerçevesinde:",
        points: [
            "İnsani Ölçekte: Genelde \"temel insan haklarına\", özelde ise temel eğitim hak ve hürriyetlerini geliştiren, güçlendiren hukuki düzenleme ve uygulamalara vaziyet etmek ve katkı sağlamak.",
            "İçtimai (Sosyal) Ölçekte: Genelde \"insanlığın adalet, güven, kardeşlik, dostluk ve gelişimine\"; özelde ise medeniyetimize ve onun sosyal, kültürel, maarif (eğitim) zenginliğinin ve çeşitliliğinin korunması, araştırılması, geliştirilmesine yönelik her türlü doğrudan veya dolaylı mesaiye katkı sağlamak.",
            "İlmi ve Sanatsal Ölçekte: Genelde \"insanlık ve bilim tarihine\", özelde ise medeniyetimize ait bilim ve sanat faaliyetlerinin ve tarihinin araştırılması, ilgili teknolojilerin geliştirilmesi, günümüz imkânlarıyla etkin araştırmalar yapılması ve faydalı maarif modelleri ile müfredatlarının oluşturulmasına vaziyet etmek ve katkı sağlamak. Saha mihmandarları, çalışan ve emektarların eserlerinin ihyası; vefat etmiş tarihi ve yakın tarih şahsiyetlerinin bilinmesine katkıda bulunmak.",
            "İktisadi Ölçekte: Genelde \"insanlık iktisat tarihine\", özelde ise medeniyetimize ait iktisadi süreçlerin araştırılması ve geliştirilmesine, adaletine katkı sağlamak. Günün maarif ihtiyaçlarına uygun, çok amaçlı, sürdürülebilir, geliştirilebilir eğitim, rehabilitasyon, halk eğitimi ve maarif modellerinin iktisadi kooperasyonunun geliştirilmesine katkı sağlamak. İktisadi faaliyetleri tasarruf, meşru ve helal çizgide bütünleştirmek ve geliştirmek.",
            "Siyasi ve Stratejik Ölçekte: Genelde insanlığın, masum ve mazlumların ihyası; dünyanın barışı ve adaleti için, özelde ise medeniyetimiz ve muhibbilerinin ihyası için, insanlığı ayrıştıran ve atomize eden kültürel, ideolojik, sosyolojik ve teolojik (KİST'ik) nifakla etkin mücadele etmek. İnsanlığı, kültürleri ve medeniyetleri rehabilite edecek, birleştirecek, kaynaştıracak; manevi, insani, milli-medeni, çevre ve tabiat dostluğu sahalarına dair ana/asli siyasetler üretmek ve bunları besleyici ara ve alt stratejiler geliştirmek. Bu süreçlerde yer almak, yol oluşturmak ve yoldaşlık yapmak. Temel insan haklarından mülhem ortak insanlık anayasası omurgası olarak \"Mavi Anayasa\" kültürünün geliştirilmesine ve eğitim süreçlerine katkı sağlamak."
        ]
    };

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Amaç Aşamalarımız'} pagesub={'Ana Sayfa'} pageTop={'Amaç Aşamalarımız'} />
            
            {/* Fotoğraflı Ana Bölüm */}
            <AboutS4 
                pageData={{
                    title: "Amaç Aşamalarımız",
                    description: "Vakıf aktimizde belirtilen temel hedeflerle uyum çerçevesinde, beş temel ölçekte faaliyet göstermekteyiz. Her ölçek, insanlığın ve medeniyetimizin farklı yönlerine odaklanarak kapsamlı bir yaklaşım sunar."
                }} 
                abClass={'wpo-about-section-s6'} 
                abImg={abimg} 
                Atitle={'Vakfımızın Temel Amaçları'} 
            />

            {/* Detaylı Amaç Aşamaları */}
            <ActionsList data={purposeData} bgClass="bg-light" hideTitle={true} />
            
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default OurPurposes;
