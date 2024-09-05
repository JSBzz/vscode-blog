import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../Main";

export default class RouteVs extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route element={<Main />} path="/" />
        </Routes>
      </Router>
    );
  }
}
