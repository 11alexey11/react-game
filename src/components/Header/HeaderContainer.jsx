import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { showHomeActionCreator } from '../../redux/home-reducer';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isHome: state.homePage.isHome
});

const mapDispatchToProps = (dispatch) => {
    return {
        showHomePage: (isHome) => {
            dispatch(showHomeActionCreator(isHome));
        },
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);