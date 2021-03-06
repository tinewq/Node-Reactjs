import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import Home from "../component/Home";
import * as homeActions from "../actions/home.action";
import Loading from "../component/loading/loading";
import { sortTypes } from "../constants/action.types";
// import localStore from "../config/storage.config";

import { useState } from "react";

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.homeActions.getData();
  }

  render() {
    // const session = getSessionStorageOrDefault("cart", "cart");
    // console.log("SE la ", session);
    const data = this.props;
    sessionStorage.setItem("dataProduct", JSON.stringify(data));
    const userSession = getSessionStorageOrDefault("dataUser", "");

    if (data != null && userSession != null) {
      return (
        <div>
          <Home dataLoad={data.data} userSession={userSession} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
const mapStateToProps = (state) => ({
  data: state.homeReducers.all.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
