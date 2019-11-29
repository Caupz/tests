import React from "react";
import OnlineCount from "../OnlineCount";
import PropTypes from "prop-types";

class Test11 extends React.PureComponent {
    static propTypes = {
        interval: PropTypes.func,
    };

  constructor(props) {
    super(props);
    this.interval = null;
  }
  state = {
    onlineCount: 20,
  };

  componentDidMount() {
    this.interval = setInterval(this.fetchOnlinePlayers, 3000);
  }

  fetchOnlinePlayers = () => {
    console.log("fetchOnlinePlayers", this);
      fetch("/api/v1/users/onlineCount")
      .then(res => res.text())
      .then(res => {
          console.log("succ", res, this);
          this.setState({onlineCount: res});
      })
      .catch(err => {
          console.log("onlinecount error", err);
      });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Task />
        <OnlineCount>{this.state.onlineCount}</OnlineCount>
      </div>
    );
  }
}

export default Test11;

const Task = () => (
  <div>
    <h3>
      Ülesanne 11:
    </h3>
    <ol>
      <li>Loo uus REST teenus. Näiteks. <code>GET /api/v1/users/onlineCount</code></li>
      <li>See otspunkt peab tagastama numbri, kui palju kasutajad on hetkel online</li>
      <li>Kuna meil ei ole "tegelikult" live kasutajad,
        siis peab see otspunkt tagastama <code>random</code> numbri</li>
      <li>Frontend peab pärima serverist iga <code>3 sekundi</code> tagant, kui palju inimesi on hetkel online</li>
      <li>See number tuleb kuvada ekraanil</li>
      <li>Tuleb muuta ainult faile <code>Test11.jsx</code> ja <code>user.router.js</code></li>
      <li>Pane tähele, et kui kasutaja navigeerib end teisele lehele, siis peab tagataustal päringu saatmine lõppema.</li>
    </ol>
  </div>
);
