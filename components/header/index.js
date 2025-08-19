import React, { Component } from "react";
import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import Image from "next/image";
import Logo from "/public/images/logo.svg";

export default class Header extends Component {
  state = {
    isSearchShow: false,
  };

  searchHandler = () => {
    this.setState({ isSearchShow: !this.state.isSearchShow });
  };

  smoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  ClickHandler = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    if (target.startsWith("#")) {
      this.smoothScroll(e, target.substring(1));
    } else {
      window.location.href = target;
    }
  };

  render() {
    return (
      <>
        {/* Logo Header Section */}
        <div className="wpo-header-logo-section">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-4 col-6">
                <div className="header-logo-wrapper">
                  <Link
                    onClick={this.ClickHandler}
                    className="header-logo-brand"
                    href="/"
                  >
                    <Image src={Logo} alt="HİKEV Logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header id="header" className={this.props.topbarNone}>
          <div className={`wpo-site-header ${this.props.hclass}`}>
            <nav className="navigation navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                    <div className="mobail-menu">
                      <MobileMenu />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <div
                      id="navbar"
                      className="collapse navbar-collapse navigation-holder"
                    >
                      <ul className="nav navbar-nav mb-2 mb-lg-0">
                        <li>
                          <Link onClick={this.ClickHandler} href="/">
                            Ana Sayfa
                          </Link>
                        </li>
                        <li>
                          <Link href="/#hikevimiz" onClick={this.ClickHandler}>
                            Hikevimiz
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link
                                href="/our-purposes"
                                onClick={this.ClickHandler}
                              >
                                Amacımız
                              </Link>
                            </li>
                            <li>
                              <Link href="/our-goals" onClick={this.ClickHandler}>
                                Hedeflerimiz
                              </Link>
                            </li>
                            <li>
                              <Link href="/our-actions" onClick={this.ClickHandler}>
                                İcraatlerimiz
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/founder"
                                onClick={this.ClickHandler}
                              >
                                Kurucumuz
                              </Link>
                            </li>
                            <li>
                              <Link href="/career" onClick={this.ClickHandler}>
                                Kariyer
                              </Link>
                            </li>
                            <li>
                              <Link href="/our-identity" onClick={this.ClickHandler}>
                                Kimliğimiz
                              </Link>
                            </li>
                            <li>
                              <Link href="/partners" onClick={this.ClickHandler}>
                                Paydaş
                              </Link>
                            </li>
                            <li>
                              <Link href="/trustees" onClick={this.ClickHandler}>
                                Mütevelli
                              </Link>
                            </li>
                            <li>
                              <Link href="/management" onClick={this.ClickHandler}>
                                Yönetim
                              </Link>
                            </li>
                            <li>
                              <Link href="/organization" onClick={this.ClickHandler}>
                                Organizasyon
                              </Link>
                            </li>
                            <li>
                              <Link href="/scholarships" onClick={this.ClickHandler}>
                                Burs ve Eğitim
                              </Link>
                            </li>
                            <li>
                              <Link href="/activities" onClick={this.ClickHandler}>
                                Faaliyetler
                              </Link>
                            </li>
                            <li>
                              <Link href="/donation" onClick={this.ClickHandler}>
                                Bağış
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link onClick={this.ClickHandler} href="/about">
                            Hakkımızda
                          </Link>
                        </li>
                        <li>
                          <Link onClick={this.ClickHandler} href="/contact">
                            İletişim
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-2 col-2">
                    <div id="navbar" className="header-right">
                      <div className="header-search-form-wrapper">
                        <div className="cart-search-contact">
                          <button className="search-toggle-btn">
                            <Link href="/">
                              <i className="ti-facebook"></i>
                            </Link>
                          </button>
                        </div>
                      </div>
                      <div className="header-search-form-wrapper">
                        <div className="cart-search-contact">
                          <button className="search-toggle-btn">
                            <Link href="/">
                              <i className="ti-twitter-alt"></i>
                            </Link>
                          </button>
                        </div>
                      </div>
                      <div className="header-search-form-wrapper">
                        <div className="cart-search-contact">
                          <button className="search-toggle-btn">
                            <Link href="/">
                              <i className="ti-instagram"></i>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        
        <style jsx>{`
          .wpo-header-logo-section {
            background-color: #175a77;
            padding: 0px 0;
            position: relative;
            max-height: 150px;
            display: flex;
            align-items: center;
            min-height: 80px;
          }
          
          .header-logo-wrapper {
            text-align: center;
            width: 100%;
            padding: 15px 0;
          }
          
          .header-logo-brand {
            display: inline-block;
            transition: all 0.3s ease;
          }
          
          .header-logo-brand:hover {
            transform: scale(1.05);
          }
          
          .header-logo-brand img {
            max-height: 60px;
            width: auto;
            filter: brightness(1.1);
          }
          
          /* Navigation adjustments */
          .wpo-site-header {
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          
          .navigation-holder {
            justify-content: center !important;
          }
          
          .navbar-nav {
            justify-content: center;
          }
          
          @media (max-width: 991px) {
            .wpo-header-logo-section {
              min-height: 70px;
            }
            
            .header-logo-wrapper {
              padding: 12px 0;
            }
            
            .header-logo-brand img {
              max-height: 50px;
            }
            
            .navigation-holder {
              justify-content: flex-start !important;
            }
          }
          
          @media (max-width: 767px) {
            .wpo-header-logo-section {
              min-height: 60px;
            }
            
            .header-logo-wrapper {
              padding: 10px 0;
            }
            
            .header-logo-brand img {
              max-height: 45px;
            }
          }
          
        
        `}</style>
      </>
    );
  }
}
