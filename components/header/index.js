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
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="navbar-header">
                      <Link
                        onClick={this.ClickHandler}
                        className="navbar-brand"
                        href="/"
                      >
                        <Image src={Logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-1 col-1">
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
                  <div className="col-lg-3 col-md-2 col-2">
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
      </>
    );
  }
}
