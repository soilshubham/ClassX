import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Subjects from "./pages/Subjects/SubjectPage";
import Footer from "./components/Footer/Footer";

import StudyBanner from "./assets/images/StudyBanner.jpg";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subData: "",
    };
  }
  fetchData = () => {
    axios
      .get("https://serene-citadel-10836.herokuapp.com/sub")
      .then((res) => {
        let colorsArray = ["blue", "red", "purple", "green", "pink", "orange"];
        let updatedSubjects = [];
        res.data[0].subjects.map((obj, key) => {
          obj.cover = StudyBanner;
          obj.color = colorsArray[key];
          updatedSubjects.push(obj);
        });
        this.setState({
          subData: updatedSubjects,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
        <Navbar subData={this.state.subData} />
        <Switch>
          <Route exact path="/">
            <Home subData={this.state.subData} />
            <Footer />
          </Route>
          {this.state.subData.length > 0 ? (
            this.state.subData.map((sub) => (
              <Route path={"/sub/" + sub.sub}>
                <Subjects data={sub} />
              </Route>
            ))
          ) : (
            <div></div>
          )}
        </Switch>
      </>
    );
  }
}

export default App;
