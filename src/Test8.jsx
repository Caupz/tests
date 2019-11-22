import React from "react";
import PropTypes from "prop-types";

class Test8 extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: "",
            phone: "",
            disabled: 0
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

  handleEnabled = (e) => {
    let val = (parseInt(e.target.value));
      console.log("handleChange", e, e.target.value, val);
      this.setState({
          disabled: val
      });
  };

    handleSuccess = () => {
        console.log("hamdle success");
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", e, this.state);
        fetch("/api/v1/users/post-entry", {
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

          <p>
              <label htmlFor="disabled-radio">Disabled</label>
              <input id="disabled-radio" type={"radio"} onChange={this.handleEnabled} name={"enabled"} value={1} />
              <label htmlFor="enabled-radio">Enabled</label>
              <input id="enabled-radio" type={"radio"} onChange={this.handleEnabled} name={"enabled"} value={0} />
          </p>

          <form onSubmit={this.handleSubmit}>
              <p><input readOnly={this.state.disabled} name={"name"} onChange={this.handleChange} placeholder={"Name"} /></p>
              <p><input readOnly={this.state.disabled} name={"location"} onChange={this.handleChange} placeholder={"Location"} /></p>
              <p><input readOnly={this.state.disabled} name={"phone"} onChange={this.handleChange} placeholder={"phone"} /></p>
              <p><input readOnly={this.state.disabled} type={"submit"} value={"Esitan"} /></p>
          </form>
      </div>
    );
  }
}

export default Test8;

const Task = () => (
  <div>
    <h3>
      Ülesanne 8:
    </h3>
    <ol>
      <li>Seda ülesannet saab lahendada ainult siis kui ülesanne 7 on tehtud</li>
      <li>Kopeerige ülesandes 7 tehtud vorm <code>test8.jsx</code> faili.</li>
      <li>Lisage nupp "enable/disable"</li>
      <li>Kui kasutaja vajutab "disable" nupu peale, siis peab vorm muutuma readonly.
        Ehk vormi väljadesse ei ole võimalik sisestada uusi väärtuseid ja
        vormi ei ole võimalik esitada.
      </li>
      <li>
        Kui kasutaja vajutab "enable" nupu peale, siis muutub vorm selliseks, et
        väljadesse on võimalik sisestada väärtuseid ning vormi on võimalik esitada.
      </li>

    </ol>
  </div>
);
