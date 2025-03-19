import React, { Component } from 'react';
import Link from 'next/link';
import MobileMenu from '../../components/MobileMenu';

const menuData = [
    {
        title: "Ana Sayfa",
        href: "/"
    },
    {
        title: "Hikevimiz",
        href: "/our-story",
        submenu: [
            { title: "Amacımız", href: "/our-story#our-purposes" },
            { title: "Hedeflerimiz", href: "/our-story#our-goals" },
            { title: "İcraatlerimiz", href: "/our-story#our-actions" },
            { title: "Kurucumuz", href: "/our-story#our-founder" },
            { title: "Kariyer", href: "/our-story#career" },
            { title: "Kimliğimiz", href: "/our-story#identity" },
            { title: "Paydaş", href: "/our-story#partners" },
            { title: "Mütevelli", href: "/our-story#trustees" },
            { title: "Yönetim", href: "/our-story#managment" }
        ]
    },
    {
        title: "Hakkımızda",
        href: "/about"
    },
    {
        title: "İletişim",
        href: "/contact"
    }
];

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
                                        LOGO
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                                            {menuData.map((menu, index) => (
                                                <li key={index} className={menu.submenu ? "menu-item-has-children" : ""}>
                                                    <Link href={menu.href}>
                                                        {menu.title}
                                                    </Link>
                                                    {menu.submenu && (
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
