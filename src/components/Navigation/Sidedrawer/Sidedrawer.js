import React from 'react';

import styles from './Sidedrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = (props) => {
    let attachedClass = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClass = [styles.SideDrawer, styles.Open];
    }

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClass.join(' ')}>
                <Logo height="10%"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    )

}

export default sidedrawer;