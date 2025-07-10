import React, { Component } from 'react'
import Link from 'next/link'
import MobileMenu from '../../components/MobileMenu'
import Image from 'next/image'
import Logo from '/public/images/logo.png'

export default class Header extends Component {
    state = {
        isSearchShow: false
    };

    searchHandler = () => {
        this.setState({ isSearchShow: !this.state.isSearchShow });
    };

    smoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({ top: targetElement.offsetTop - 80, behavior: "smooth" });
        }
    };

    render() {
        return (
            <header id="header" className={this.props.topbarNone}>
                <div className={`wpo-site-header ${this.props.hclass}`}>
                    <nav className="navigation navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <MobileMenu />
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="navbar-header">
                                        <Link onClick={ClickHandler} className="navbar-brand" href="/">
                                            <Image src={this.props.Logo || Logo} alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                                            <li >
                                                <Link onClick={ClickHandler} href="/">Ana Sayfa</Link>
                                               {/*  <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/home">Home Charity</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home2">Home Education</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home3">Home Wildlife</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home4">Home Ocean Polution</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home5">Home World Pandemic</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home6">Home Nature</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home7">Home Nature S2</Link></li>
                                                </ul> */}
                                            </li>
                                            <li>
                                                <Link href="/our-story" onClick={ClickHandler}>Hikevimiz</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/our-purposes" onClick={ClickHandler}>Amacımız</Link></li>
                                                    <li><Link href="/our-goals" onClick={ClickHandler}>Hedeflerimiz</Link></li>
                                                    <li><Link href="/our-actions" onClick={ClickHandler}>İcraatlerimiz</Link></li>
                                                    <li><Link href="/our-story#our-founder" onClick={(e) => smoothScroll(e, 'our-founder')}>Kurucumuz</Link></li>
                                                    <li><Link href="/career" onClick={ClickHandler}>Kariyer</Link></li>
                                                    <li><Link href="/our-identity" onClick={ClickHandler}>Kimliğimiz</Link></li>
                                                    <li><Link href="/partners" onClick={ClickHandler}>Paydaş</Link></li>
                                                    <li><Link href="/trustees" onClick={ClickHandler}>Mütevelli</Link></li>
                                                    <li><Link href="/management" onClick={ClickHandler}>Yönetim</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={ClickHandler} href="/about">Hakkımızda</Link></li>
                                            <li><Link onClick={ClickHandler} href="/contact">İletişim</Link></li>
                                            {/* <li>
                                                <Link href="/cause">Cause</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/cause">Cause</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/cause-single/Poor-Children">Cause Single</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="menu-item-has-children">
                                                <Link href="/">Events</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/event">Events</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/event-s2">Events S2</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/event-single/Help-Children">Events Single</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="menu-item-has-children">
                                                <Link href="/">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service">Service</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service/Clean-Water">Service Single</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/project">Project</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/project/African-Macaw-Bird">Project Single</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/donate">Donate</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/volunteer">Volunteer</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/404">Error 404</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/register">Sign Up</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} href="/blog">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                    <li className="menu-item-has-children">
                                                        <Link onClick={ClickHandler} href="/">Blog details</Link>
                                                        <ul className="sub-menu">
                                                            {menu.submenu.map((sub, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link href={sub.href} onClick={(e) => this.smoothScroll(e, sub.href.split("#")[1])}>
                                                                        {sub.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
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
        );
    }
}
