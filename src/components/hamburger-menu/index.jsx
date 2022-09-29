import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../utils";
import Logo from "../../components/logo/index";

const HamburgerMenu = ({ show, onClose }) => {

    return (
        <aside className={`off-canvas-wrapper ${show ? "active" : ""}`}>
            <div className="off-canvas-inner">
                <div className="off-canvas-overlay"></div>
                <div className="off-canvas-content">
                    <div className="off-canvas-header">
                        <div className="close-action">
                            <button className="btn-close" onClick={onClose}>
                                <i className="icon_close"></i>
                            </button>
                        </div>
                    </div>

                    <div className="off-canvas-item">
                        <div className="asside-navigation-area">
                            <ul className="asside-menu">
                            <div style={{marginTop:'300px;'}} className="header-logo-area">
                                <Logo
                                    image={`${process.env.PUBLIC_URL}/img/logo-light.png`}
                                />
                            </div>
                                <li className="item">
                                    <NavLink
                                        exact
                                        to={process.env.PUBLIC_URL + "/"}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={process.env.PUBLIC_URL + "/about"}
                                    >
                                        The History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={process.env.PUBLIC_URL + "/NFT"}
                                    >
                                        NFT&apos;s
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={process.env.PUBLIC_URL + "/contact"}
                                    >
                                        Enquire with Us
                                    </NavLink>
                                </li>
                                <br />
                                <div className="widget-copyright">
                                    <p style={{color:'white', marginLeft: 30, fontSize: 8}}>© 2022 Created & Designed by<span> TmK Digital</span>. {" "}                 
                                        <a
                                            target="_blank"
                                            href="https://www.hasthemes.com"
                                            rel="noreferrer"
                                        >
                                        </a>
                                    </p>
                                </div>
                            
                            </ul>
                        </div>
                    </div>
                    <div className="off-canvas-footer"></div>
                </div>
            </div>
        </aside>
    );
};

HamburgerMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default HamburgerMenu;
