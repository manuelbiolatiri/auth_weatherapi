import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./weather.style.css";


class Weather extends React.Component {
  handleClicked() {
    this.props.clickHandler();
  }

  calculateTemp(degreesK, displayUnits) {
    if (displayUnits === "C") return Math.floor(degreesK - 273);
    else return Math.floor(((degreesK - 273) * 9) / 5 + 32);
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            {this.props.city && this.props.country && (
              <p>
                {this.props.city}, {this.props.country}
              </p>
            )}
          </h1>
          {this.props.icon && (
            <p>
              <img
                src={`http://openweathermap.org/img/w/${this.props.icon}.png`}
                alt="wthr img"
                size="40px"
              />
            </p>
          )}
          <h1>
            {this.props.kelvinTemp && (
              <p>
                <i className="fas fa-thermometer-three-quarters"></i>{" "}
                <span onClick={this.handleClicked.bind(this)}>
                  {this.calculateTemp(
                    this.props.kelvinTemp,
                    this.props.displayUnits
                  )}
                  &deg;
                  {this.props.displayUnits}
                </span>
              </p>
            )}
          </h1>
          <div className="row">
          <div className="col-md-6">
          <h4>
            {this.props.description && (
              <p>
                {" "}
                <i className="fas fa-info"></i>{" "}
                <span>{this.props.description}</span>
              </p>
            )}
          </h4>
          <h5>
            {this.props.tempMin && this.props.tempMax && (
              <p>
                {" "}
                <i className="fas fa-sort"></i> Min/Max:{" "}
                <span onClick={this.handleClicked.bind(this)}>
                  {this.calculateTemp(
                    this.props.tempMin,
                    this.props.displayUnits
                  )}
                  &deg;{this.props.displayUnits} |
                  {this.calculateTemp(
                    this.props.tempMax,
                    this.props.displayUnits
                  )}
                  &deg;
                  {this.props.displayUnits}
                </span>
              </p>
            )}
          </h5>
          </div>
          <div className="col-md-6">
          <h5>
            {this.props.humidity && (
              <p>
                {" "}
                <i className="fas fa-water"></i> Humidity:{" "}
                <span>{this.props.humidity}%</span>
              </p>
            )}
          </h5>
          <h5>
            {this.props.pressure && (
              <p>
                {" "}
                <i className="fas fa-tachometer-alt"></i> Pressure:{" "}
                <span>{this.props.pressure} hPa</span>
              </p>
            )}
          </h5>
          </div>
          </div>
          <h4>
            {this.props.error && (
              <p>
                {" "}
                <i></i> <span>{this.props.error}</span>
              </p>
            )}
          </h4>
        </div>
      </div>
    );
  }
}

export default Weather;
