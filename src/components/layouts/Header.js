import React from 'react';
import HeaderComponent from '../../helper/navhelper';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';

class Header extends HeaderComponent {
    render() {
        const stickyheader = this.state.isTop ? 'sticky' : '';
        return (
            <header className={"header " + stickyheader}>
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="navigation">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo1.png"} className="image-fit" alt="logo" />
                                    </Link>
                                </div>
                                <div className={classNames("main-navigation", { "active": this.state.navmethod })}>
                                    <nav>
                                        <ul className="main-menu">

                                            {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                                <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                    {item.child ? <Link onClick={e => e.preventDefault()} to="/" className="text-custom-white"> {item.linkText} <span className="arrow" /></Link> : <Link to={item.link} className="text-custom-white"> {item.linkText} </Link>}
                                                    {item.child ?
                                                        <ul className="sub-menu" role="menu">
                                                            {item.submenu.map((sub_item, i) => (
                                                                <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                    {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/" > {sub_item.linkText} <span className="arrow" /></Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                                    {sub_item.submenu ?
                                                                        <ul className="sub-menu">
                                                                            {sub_item.submenu.map((third_item, i) => (
                                                                                <li className="menu-item" key={i}><Link
                                                                                    to={third_item.link}>{third_item.linkText}</Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul> : null}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        : null
                                                    }
                                                </li>
                                            )) : null}
                                        </ul>
                                    </nav>
                                </div>
                                <div className="right-side-navigation">
                                    <ul>
                                        <li className="hamburger-menu">
                                            <Link to="#" className={classNames("menu-btn", { "active": this.state.navmethod })} onClick={this.toggleNav}>
                                                <span />
                                                <span />
                                                <span />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;