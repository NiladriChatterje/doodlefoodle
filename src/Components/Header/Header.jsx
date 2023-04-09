import React from 'react'
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from 'framer-motion'
import plate from "../../assets/images/plate.png";
import Logo from "../../assets/images/logo.png"

const Header = () => {
    const [navActive, setNavActive] = React.useState(false);
    return (
        <header>
            <img src={plate} alt='dining in DoodleFoodle' />
            <nav>
                <GiHamburgerMenu
                    onClick={() => setNavActive(prev => !prev)}
                    id={'GiHamburgerMenu'}
                    style={{
                        cursor: 'pointer',
                        zIndex: 10,
                        position: 'fixed',
                        height: '25px',
                        width: '25px',
                        right: 10, top: 13.5
                    }} />
                <img src={Logo} />
                <motion.ul
                    id={'navitems-active'}
                    initial={{ x: 0 }}
                    animate={{ x: navActive ? 0 : 600 }}
                >
                    <li>COOKSFOOD</li>
                    <li>HOME(current)</li>
                    <li>ABOUT</li>
                    <li>MENU</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>
                </motion.ul>
            </nav>
            <figure className={"banner"}>
                <h5>Discover Your Taste</h5>
                <h2>Enjoy Your<br />
                    Delicious Food</h2>
                <p>Lorem ipsum dolar sit amet,consectetur adipisin<br />
                    sed do eiusmod tempor.</p>
                <button>ORDER NOW</button>
                <button>BOOK A TABLE</button>

            </figure>
        </header>
    )
}
export default Header;