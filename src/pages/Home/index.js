import React from "react";
import { geolocated } from "react-geolocated";
import axios from "axios";

import {
  Container,
  Block,
  LocationName,
  InfoBox,
  HeaderBox,
  Icon,
  Temp,
  Weather,
  WindSpeed,
  Button
} from "./styles";

class Home extends React.Component {
  state = {
    data: {},
    loading: true,
    position: {}
  };

  getData = async () => {
    console.log(this.state.position);
    const { latitude, longitude } = this.state.position.coords;
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=15&APPID=542ffd081e67f4512b705f89d2a611b2`
    );

    this.setState({ data: { ...response.data }, loading: false });
  };

  componentWillMount() {
    this.getLocation();
    // this.getData();
  }

  getLocation = () => {
    const geolocation = navigator.geolocation;

    const location = new Promise((resolve, reject) => {
      if (!geolocation) {
        reject(new Error("Not Supported"));
      }

      geolocation.getCurrentPosition(
        position => {
          resolve(position);
          this.setState({ position });
          this.getData();
        },
        () => {
          reject(new Error("Permission denied"));
        }
      );
    });

    return {
      payload: location
    };
  };

  toCelsius = temp => {
    return parseInt(temp - 273.15);
  };

  handleButton = () => {
    this.setState({ loading: true });
    this.getData();
  };

  render() {
    const { data } = this.state;
    return (
      <Container>
        {this.state.loading ? (
          <div>carregando...</div>
        ) : (
          <Block>
            <LocationName>
              {data.list[0].name} / {data.list[0].sys.country}
            </LocationName>
            <InfoBox>
              <HeaderBox>
                <Icon
                  src={`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.list[0].weather[0].icon}.png`}
                />
                <Temp>{this.toCelsius(data.list[0].main.temp)}ºC</Temp>
              </HeaderBox>
              <Weather>{data.list[0].weather[0].description}</Weather>
              <WindSpeed>
                Vento: <strong>{data.list[0].wind.speed}m/s</strong>
              </WindSpeed>
            </InfoBox>
          </Block>
        )}

        <Button onClick={this.handleButton}>Atualizar</Button>
      </Container>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Home);

// export default Home;
