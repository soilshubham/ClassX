import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Subjects from "./pages/Subjects/SubjectPage";
import Footer from "./components/Footer/Footer";

import StudyBanner from "./assets/images/StudyBanner.jpg";

let subData = [
  {
    name: "Compiler Design",
    sub: "cd",
    cover: StudyBanner,
    color: "blue",
    classLinks: [
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
    ],
  },
  {
    name: "Operating System",
    sub: "os",
    cover: StudyBanner,
    color: "red",
    classLinks: [
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
    ],
  },
  {
    name: "Differential Equations",
    sub: "de",
    cover: StudyBanner,
    color: "green",
    classLinks: [
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
    ],
  },
  {
    name: "Computer Networks",
    sub: "cn",
    cover: StudyBanner,
    color: "purple",
    classLinks: [
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
    ],
  },
  {
    name: "ISCP",
    sub: "iscp",
    cover: StudyBanner,
    color: "orange",
    classLinks: [
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
    ],
  },
  {
    name: "CDC",
    sub: "cdc",
    cover: StudyBanner,
    color: "pink",
    classLinks: [
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
      {
        date: "3rd August 2021",
        link: "https://github.com",
      },
    ],
  },
];

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar subData={subData} />
        <Switch>
          <Route exact path="/">
            <Home subData={subData} />
          </Route>
          <Route path="/sub">
            <Subjects subData={subData} />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
