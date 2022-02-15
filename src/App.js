import "./index.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    cont: 0
  };

  adicionar = () => {
    if (this.state.cont < 10) {
      this.setState({
        cont: this.state.cont + 1
      });
    }
  };

  diminuir = () => {
    if (this.state.cont > 0) {
      this.setState({
        cont: this.state.cont - 1
      });
    }
  };

  zerar = () => {
    this.setState({
      cont: 0
    });
  };

  render() {
    return (
      <div>
        <div className="container-main">
          <div className="container-main-name">
            <h1>Contador</h1>
          </div>

          <div className="larger-circle">
            <div className="smaller-circle">
              <h3>{this.state.cont}</h3>
            </div>
          </div>

          <div className="increase-decrease-button">
            <button onClick={this.adicionar}>+</button>
            <button onClick={this.diminuir}>-</button>
          </div>

          <div className="reset-button">
            <button onClick={this.zerar}>Z</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

