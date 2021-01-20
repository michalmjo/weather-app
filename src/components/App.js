import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

// Api key
const APIkey = "42a7b08d2ca6e8bd5d9396b067811494";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    picId: "",
    err: "false",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].id);
        const time = new Date().toLocaleString();
        this.setState({
          err: false,
          date: time,
          city: data.name,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: (data.main.temp - 273.15).toFixed(0) + "°C",
          pressure: data.main.pressure,
          wind: data.wind.speed,
          picId: data.weather[0].id,
          value: "",
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState((prevState) => ({
          err: true,
          city: prevState.value,
        }));
      });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <Form
            value={value}
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
          />
          <Result weather={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
