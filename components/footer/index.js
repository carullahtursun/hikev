import React from "react";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import Projects from "../../api/projects";
import Image from "next/image";

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Image src={Logo} alt="blog" />
                </div>
                <p className="footer-description">
                  Hikev Vakfımız, topluma hizmet etmeyi amaçlayan bir sivil
                  toplum kuruluşudur. Eğitim ve çevre konularında
                  projeler yürütmektedir.
                </p>
                <ul>
                  <li>
                    <Link href="/">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="ti-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Hizmet </h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      Ana Sayfa
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/about">
                      Hakkımızda
                    </Link>
                  </li>

                  <li>
                    <Link onClick={ClickHandler} href="/contact">
                      İletişim
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/">
                      Hikevimiz{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>İletişim </h3>
                </div>
                <div className="contact-ft">
                  <p>
                    Herhangi bir sorunuz varsa lütfen bizimle iletişime
                    geçmekten çekinmeyin.
                  </p>
                  <ul>
                    <li>
                      <i className="fi flaticon-mail"></i>hikevorg@gmail.com 
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>+0216 339 09 00
                    </li>
                    <li>
                      <i className="fi flaticon-location"></i>Altunizade Mahallesi
                        F. K. Gökay Cad.
                         Okul Sokak No:1 Altunizade Sitesi A-Blok Kat:3 Daire:16 Üsküdar/İstanbul 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {" "}
                &copy; 2025 Tasarım:{" "}
                <Link href="https://www.harpycreative.com/">harpycreative</Link>
                . Her hakkı saklıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
