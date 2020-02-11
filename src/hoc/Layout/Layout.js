import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return (
            <>
                <Toolbar
                    isAuth={this.props.isAutenthicated} 
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <Sidedrawer 
                    isAuth={this.props.isAutenthicated}
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        isAutenthicated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);