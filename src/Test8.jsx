import React from "react";

class Test8 extends React.PureComponent {
  render() {
    return (
      <div>
        <Task />
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
      <li>draft</li>
    </ol>
  </div>
);
