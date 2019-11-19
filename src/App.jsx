import React, {useState} from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import notFoundImage from "./images/404_Error.jpg";
import "./css/main.css";
import PropTypes from "prop-types";
import "typeface-roboto";
import Test1 from "./Test1.jsx";
import Test2 from "./Test2.jsx";
import Test3 from "./Test3.jsx";
import Test4 from "./Test4.jsx";
import Test5 from "./Test5.jsx";
import Test6 from "./Test6.jsx";
import christmas from "./images/christmas.gif";
import classnames from "classnames";
import {GiHamburgerMenu} from "react-icons/gi";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <>
    <ToastContainer  position={toast.POSITION.TOP_RIGHT} />
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test/1" exact component={Test1} />
          <Route path="/test/2" exact component={Test2} />
          <Route path="/test/3" exact component={Test3} />
          <Route path="/test/4" exact component={Test4} />
          <Route path="/test/5" exact component={Test5} />
          <Route path="/test/6" exact component={Test6} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </>
);

export default App;

const Layout = ({children}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classnames("layout", {open})}>
      <Header onClick={() => setOpen(!open)}/>
      <BelowHeader>
        {children}
      </BelowHeader>

    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

const BelowHeader = ({children}) => (
  <div className="below-header">
    <div className={"drawer"}>
      <Navigation />
    </div>
    <div className={"task-content"}>
      {children}
    </div>
    <div className={"christmas-container"}>
      <img src={christmas}/>
    </div>
  </div>
);

BelowHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

const Header = ({onClick}) => {
  return (
    <div className="header" style={{display: "flex"}}>
      <div className="typical-flex" style={{paddingLeft: 5}}>
        <GiHamburgerMenu onClick={onClick}/>
        <span style={{fontSize: 10}}>menu</span>
      </div>
    </div>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Navigation = () => (
  <div className={"navigation"}>
    <Link to={"/"}>Home</Link>
    <Link to={"/test/1"}>Ülesanne 1 - Easy</Link>
    <Link to={"/test/2"}>Ülesanne 2 - Easy</Link>
    <Link to={"/test/3"}>Ülesanne 3 - Medium</Link>
    <Link to={"/test/4"}>Ülesanne 4 - Medium</Link>
    <Link to={"/test/5"}>Ülesanne 5 - H. Sapiens</Link>
    <Link to={"/test/6"}>Ülesanne 6 - Darwin</Link>
  </div>
);

const Home = () => (
  <div>
    Tere!
    <p>
      Menüüst leiad harjutusülesanded arvestuseks.
    </p>
  </div>
);

const NotFound = () => (
  <div>
    <img src={notFoundImage}/>
  </div>
);
