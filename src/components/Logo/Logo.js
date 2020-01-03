import React from 'react';

import styles from './Logo.module.css';
import Logo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={Logo} alt="Burger Logo"></img>
    </div>
);

export default logo;