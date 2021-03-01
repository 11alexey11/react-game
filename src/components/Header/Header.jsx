import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <NavLink to="/home" className={styles.navbarItem} activeClassName={styles.activeLink}>Home</NavLink>
                <NavLink to="/volume" className={styles.navbarItem} activeClassName={styles.activeLink}>Volume Settings</NavLink>
                <NavLink to="/game" className={styles.navbarItem} activeClassName={styles.activeLink}>Game Settings</NavLink>
                <NavLink to="/statistic" className={styles.navbarItem} activeClassName={styles.activeLink}>Statistic</NavLink>
            </nav>
        </header>
    );
}

export default Header;