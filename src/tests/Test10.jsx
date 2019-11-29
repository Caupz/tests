import React from "react";

class Test10 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input1 = React.createRef();
        this.input2 = React.createRef();
        this.input3 = React.createRef();
        this.input4 = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('A input1 was submitted: ' + this.input1.current.value);
        console.log('A input2 was submitted: ' + this.input2.current.value);
        console.log('A input3 was submitted: ' + this.input3.current.value);
        console.log('A input4 was submitted: ' + this.input4.current.value);
    }

  render() {
    return (
      <div>
        <Task />
          <form onSubmit={this.handleSubmit}>
              <p><input ref={this.input1} name={"name"} onChange={this.handleChange} placeholder={"Name"} /></p>
              <p><input ref={this.input2} name={"location"} onChange={this.handleChange} placeholder={"Location"} /></p>
              <p><input ref={this.input3} name={"phone"} onChange={this.handleChange} placeholder={"phone"} /></p>
              <p><input ref={this.input4} name={"idcode"} onChange={this.handleChange} placeholder={"idcode"} /></p>
              <p><input type={"submit"} value={"Esitan"} /></p>
          </form>
      </div>
    );
  }
}

export default Test10;

const Task = () => (
  <div>
    <h3>
      Ülesanne 10:
    </h3>
    <ol>
      <li>Tuleb teha sama vorm nagu <code>Ülesanne 9</code>, aga siin tuleb kasutada "uncontrolled" form </li>
      <li>Meeldetuletuse link <a href={LINK}>{LINK}</a> (sest te olete Reacti ametliku lehe juba ammu läbi lugenud)</li>
      <li>Tuleb muuta ainult faili <code>Test10.jsx</code></li>
    </ol>
  </div>
);

const LINK = 'https://reactjs.org/docs/uncontrolled-components.html';
