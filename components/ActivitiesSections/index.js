import React from 'react';
import Image from 'next/image';
import styles from '../../styles/activities.module.css';

// Renders the activities sections list with gallery
const ActivitiesSections = () => {
  // Aktivite kategorileri
  const activitiesData = [
    {
      id: 11,
      title:
        'Alan Bazlı Kariyer Danışmanlık Toplantıları (yüz yüze ve çevrimiçi)',
      description:
        'Öğrenciler, alanında uzman isimlerle bir araya gelerek kariyer planlarını ve mesleki yönelimlerini netleştirdi.',
      folderName: 'kariyer-danismanlik',
      images: [
        '20250211_105654.jpg',
        '20250211_100720.jpg',
        '20241225_165409.jpg',
        '20241218_101158.jpg',
      ],
    },
    {
      id: 2,
      title: 'Eğitim Panelleri',
      description:
        'Farklı alanlarda uzman isimlerin katılımıyla gençlere ilham veren bilgi ve deneyim paylaşımları gerçekleştirildi.',
      folderName: 'egitim-panelleri',
      images: [
        '20250225_132841.jpg',
        '20250225_140029.jpg',
        '20250225_150743.jpg',
        'Ekran görüntüsü 2025-04-21 152941.png',
        'Ekran görüntüsü 2025-04-21 153003.png',
        'IMG-20250225-WA0081.jpg',
      ],
    },
    {
      id: 3,
      title: 'Geleceğin Liderleri Gelişim Programı',
      description:
        '10 haftalık programda gençlere liderlik, dijital dönüşüm ve kişisel gelişim alanlarında online eğitimler sunuldu.',
      folderName: 'liderlik-programi',
      images: [
        '20250123_151809.jpg',
        '336466778_223125036961371_6964364667368133977_n.jpg',
        '327018146_1134460121289166_6209474338311826061_n.jpg',
      ],
    },
    {
      id: 4,
      title: 'Kitap Okuma Bursu',
      description:
        'Gençlerin entelektüel gelişimini desteklemek amacıyla hazırlanan okuma listesiyle öğrencilerimize burs desteği sağladık.',
      folderName: 'kitap-okuma-bursu',
      images: ['353925171_183035967764337_2659411788172047445_n.jpg'],
    },
    {
      id: 5,
      title: 'Kız İzcilerimizle Kamptayız!',
      description:
        'İzcilerimiz, açık havada düzenlenen eğitimlerle hem eğlendi hem de liderlik ve dayanışma becerilerini geliştirdi.',
      folderName: 'kiz-izci-kampi',
      images: [
        'IMG-20250208-WA0021.jpg',
        'IMG-20250123-WA0015.jpg',
        '461178980_1059831882337115_5352913566669173313_n.jpg',
      ],
    },
    {
      id: 6,
      title: 'Erkek İzcilerimizle Kamptayız!',
      description:
        'Doğa ile iç içe etkinlikler ve takım ruhunu güçlendiren çalışmalarla izcilerimiz unutulmaz bir kamp deneyimi yaşadı.',
      folderName: 'erkek-izci-kampi',
      images: [
        'IMG-20250124-WA0004.jpg',
        'WhatsApp Image 2025-04-21 at 16.32.06.jpeg',
        'WhatsApp Image 2025-04-21 at 16.33.01 (1).jpeg',
        'WhatsApp Image 2025-04-21 at 16.33.02.jpeg',
      ],
    },
    {
      id: 7,
      title: 'Kubbede Kalan Hoş Sada',
      description:
        "Geçmişten bugüne Türk kültürü ve edebiyatını hatırlatmayı amaçlayan yarışma, Üsküdar Üniversitesi'nde gerçekleştirildi. Katılımcılara sürpriz hediyeler ve altın ödülleri verildi, herkese katılım belgesi takdim edildi.",
      folderName: 'kubbede-hos-sada',
      images: ['20250511_173333.jpg', '20250511_143309.jpg'],
    },
    {
      id: 8,
      title: "Büyük Çamlıca'da İzcilik Ruhu ve Okulu",
      description:
        'Üsküdar İmam Hatip Ortaokulu öğretmen ve öğrencileriyle düzenlenen izcilik tanıtım kampında, doğayla iç içe keyifli bir gün geçirildi. Ardından okul ziyareti yapılarak eğitim ve değerler üzerine verimli istişareler gerçekleştirildi.',
      folderName: 'camlica-izcilik',
      images: [
        '20250611_134934.jpg',
        'IMG-20250611-WA0045.jpg',
        'IMG-20250611-WA0046.jpg',
        'IMG-20250611-WA0047.jpg',
      ],
    },
    {
      id: 9,
      title: 'Buluşma ve Yarışma Programları',
      description:
        'Bursiyerlerin bir araya geldiği programlar, eğitim ve kültür temalı yarışmalarla zenginleştiriliyor. Böylece buluşmalar daha anlamlı ve kalıcı hale getiriliyor.',
      folderName: 'bulusma-yarisma',
      images: [
        '409645872_868081465058346_2957398391146264618_n.jpg',
        'Ekran görüntüsü 2025-04-21 132122.png',
        'Ekran görüntüsü 2025-04-21 132324.png',
        'Ekran görüntüsü 2025-04-21 132534.png',
      ],
    },
    {
      id: 10,
      title: 'Bursiyerlerle Geleneksel Kahvaltı Buluşmaları',
      description:
        'Her yıl düzenlenen kahvaltı buluşmalarında bursiyerler bir araya geliyor. Bu etkinlikler gençler arasında dayanışmayı ve vakıf ile iletişimi güçlendiriyor.',
      folderName: 'kahvalti-bulusmalari',
      images: [
        '324061091_748880522843319_4148202789339331607_n.jpg',
        '324716450_697113881871984_6852694886725301276_n.jpg',
      ],
    },
    {
      id: 1,
      title:
        'Hacı İsmail Kurt Merkezi Derslikler Binası Açılış Töreni',
      description:
        'Eğitime kalıcı katkı sağlamak amacıyla İstanbul Sabahattin Zaim Üniversitesi\'nde "Merkezi Derslikler Binası" inşa edilerek hizmete açıldı. Bu proje, vakfın eğitime verdiği önemin somut bir göstergesi oldu.',
      folderName: 'ismail-kurt-derslik',
      images: [
        '6.jpeg',
        '9.jpg',
        '8.jpg',
        '5.jpeg',
        '41def6a58ccba4dfaad31a14603acd8e4.jpg',
        '1ab4eead7e7244e04b9fdf1ca3dbda6fd.jpeg',
        '10.jpeg',
      ],
    },
  ];

  const totalImages = activitiesData.reduce(
    (sum, a) => sum + (Array.isArray(a.images) ? a.images.length : 0),
    0
  );

  return (
    <>
      {/* Ana Açıklama Bölümü - Geliştirilmiş */}
      <div className={`${styles['wpo-activities-intro-section']} p-5`}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10">
              <div className={styles['wpo-section-title']}>
                <div className="d-flex justify-content-center mb-3">
                  <span className="badge" style={{
                    background: 'linear-gradient(135deg, #00b3e3 0%, #003764 100%)',
                    color: '#fff',
                    borderRadius: 20,
                    padding: '8px 14px',
                    fontWeight: 600,
                    boxShadow: '0 6px 18px rgba(0,179,227,0.35)'
                  }}>HİKEV Faaliyetleri</span>
                </div>

                <h2 className="text-center">Faaliyetlerimiz</h2>
                <p className="text-center">
                  Hacı İsmail Kurt Eğitim Vakfı olarak, eğitim alanında
                  gerçekleştirdiğimiz çeşitli faaliyetler ve projelerle topluma
                  değer katmaya devam ediyoruz. Her bir aktivitemiz,
                  gençlerimizin kişisel ve mesleki gelişimine katkı sağlamayı
                  hedeflemektedir.
                </p>

            {/* 
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                  <div style={{
                    background: '#ffffff',
                    borderRadius: 14,
                    padding: '10px 16px',
                    boxShadow: '0 6px 20px rgba(0, 55, 100, 0.10)'
                  }}>
                    <strong style={{color:'#003764'}}>{activitiesData.length}</strong>
                    <span style={{marginLeft: 8, color:'#557'}}> başlık altında faaliyet</span>
                  </div>
                  <div style={{
                    background: '#ffffff',
                    borderRadius: 14,
                    padding: '10px 16px',
                    boxShadow: '0 6px 20px rgba(0, 55, 100, 0.10)'
                  }}>
                    <strong style={{color:'#003764'}}>{totalImages}</strong>
                    <span style={{marginLeft: 8, color:'#557'}}> fotoğraf ile arşiv</span>
                  </div>
                </div>

        
                <div className="text-center mt-4">
                  <a href="#faaliyetler" className="btn" style={{
                    background: 'linear-gradient(135deg, #00b3e3 0%, #003764 100%)',
                    color: '#fff',
                    borderRadius: 30,
                    padding: '12px 26px',
                    fontWeight: 600,
                    boxShadow: '0 8px 24px rgba(0,179,227,0.35)'
                  }}>Tüm Faaliyetleri Gör</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aktivite Bölümleri */}
      <div id="faaliyetler" className={styles['wpo-activities-sections']}>
      {activitiesData.sort((a, b) => a.id - b.id).map((activity, index) => (
        <div
          key={activity.id || index}
          className={`${styles['activity-section']} ${index % 2 === 0 ? styles.even : styles.odd}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className={styles['activity-content']}>
                  <div className={styles['activity-header']}>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </div>

                  {/* Fotoğraf Galerisi */}
                  <div className={styles['activity-gallery']}>
                    <div className="row justify-content-center">
                      {Array.isArray(activity.images) &&
                        activity.images.map((image, imgIndex) => (
                          <div key={imgIndex} className="col-lg-4 col-md-6 col-12">
                            <div className={styles['gallery-item']}>
                              <Image
                                src={`/images/activities/${activity.folderName}/${image}`}
                                alt={`${activity.title} - ${imgIndex + 1}`}
                                width={400}
                                height={300}
                                style={{
                                  width: '100%',
                                  height: '300px',
                                  objectFit: 'cover',
                                  borderRadius: '8px',
                                }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default ActivitiesSections;
