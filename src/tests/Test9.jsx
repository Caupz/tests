import React from "react";
import PropTypes from "prop-types";

class Test9 extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        idcode: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: "",
            phone: "",
            idcode: ""
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSuccess = () => {
        console.log("hamdle success asd");
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", e, this.state);
        fetch("/api/v1/users/update-user", {
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


  render() {
    return (
      <div>
        <Task />
          <form onSubmit={this.handleSubmit}>
              <p><input name={"name"} onChange={this.handleChange} placeholder={"Name"} /></p>
              <p><input name={"location"} onChange={this.handleChange} placeholder={"Location"} /></p>
              <p><input name={"phone"} onChange={this.handleChange} placeholder={"phone"} /></p>
              <p><input name={"idcode"} onChange={this.handleChange} placeholder={"idcode"} /></p>
              <p><input type={"submit"} value={"Esitan"} /></p>
          </form>
      </div>
    );
  }
}

export default Test9;

const Task = () => (
  <div>
    <h3>
      Ülesanne 9:
    </h3>
    <ol>
      <li>Tuleb luua vorm</li>
      <li>Kasutaja saab sisestada nime, elukoha, telefoni numbri ja isikukoodi</li>
      <li>Kui kasutaja vajutab "esita", siis tehakse päring serveri kasutaja uuendamiseks/loomiseks</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja on olemas, siis peab uuendama kasutajat</li>
      <li>Kui sisestatud <code>isikukoodiga</code> kasutaja ei olnud olemas, siis tuleb luua uus kasutaja</li>
      <li>Väga sarnane <code>Task7</code></li>
      <li>Tuleb muuta ainult faile <code>user.router.js</code> ja <code>Test9.jsx</code></li>
      <li>Kasutaja andmebaasi mudeliga saad tutvuda failis <code>user.model.js</code></li>
      <li><a href={LINK}>{LINK}</a></li>
    </ol>
  </div>
);

const LINK = 'https://mongoosejs.com/docs/api.html';
