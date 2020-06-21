import React from "react";
import logo from '../../logo.svg';
import './top-navigation.sass';
import { connect } from 'react-redux';

function TopNavigation() {
  return (
    <div className="container">
      <header className="container__header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Coding Community</p>
      </header>
    </div>
  );
}

const mapStateToProps = (store: any) => {
    console.log(store, 'store updated');
    return {
        store: store,
        text: store.auth.text
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatchLogin: () => {
        dispatch({type: 'login'})
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation);
