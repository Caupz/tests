import React from "react";
/*import example1 from "./images/1.png";
import example2 from "./images/2.png";
import example3 from "./images/3.png";*/
import PropTypes from "prop-types";

class Test3 extends React.PureComponent{
    static propTypes = {
        username: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        responseTextTest: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            age: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submit", e, this.state);
      fetch("/api/v1/register", {
          method: "POST",
          headers: {
              "Content-Type":"application/json"
          },
          body: JSON.stringify(this.state)
      })
          .then(res => res.text())
          .then(this.handleSuccess)
          .catch(err => {
              console.log("register error", err);
          });
  };

  handleSuccess = (response) => {
      this.setState({
          responseTextTest: response
      });
  };

  render(){
    return (
      <div>
        <div className={"description"}>
          <h3>
            Ülesanne 3:
          </h3>
          <p>
            <code>server.js</code> failis on defineeritud otspunkt
            <code>POST /api/v1/register</code>.
            Kui kasutaja vajutab "Send", siis peab frontend kasutama seda REST teenust
            ning saatma "username" ja "age" väärtused backendi.
            Server annab vastuseks teksti, mis tuleb kuvada ekraanil.
            API kirjeldus on lehel <a href={"http://localhost:3000/api-docs/"}>http://localhost:3000/api-docs/</a>
          </p>
          <h3>
            Näited:
          </h3>
          <div className="images">
          </div>
        </div>
        <h3>
          Lahendus:
        </h3>
        <form style={{width: 300}} onSubmit={this.handleSubmit}>
          <div className={"row"}>
            <label htmlFor="username">Username</label>
            <input name="username" value={this.state.username}
                   onChange={this.handleChange} type="text"/>
          </div>
          <div className={"row"}>
            <label htmlFor="age">Age</label>
            <input name="age" value={this.state.age}
                   onChange={this.handleChange} type="number"/>
          </div>
          <div className={"row"} style={{justifyContent: "flex-end"}}>
            <button>Send</button>
          </div>
        </form>

        {
          this.state.responseTextTest &&
          <div className={"response"}>
              {this.state.responseTextTest}
          </div>
        }

      </div>
    );
  }
}

export default Test3;

