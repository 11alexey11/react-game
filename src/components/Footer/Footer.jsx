import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a className={styles.gitHub} href='https://github.com/11alexey11'>GitHub</a>
            <span>2021</span>
            <a href='https://rs.school/js/'><img src='https://rs.school/images/rs_school_js.svg' alt='course' width='70px'></img></a>
        </footer>
    );
}

export default Footer;