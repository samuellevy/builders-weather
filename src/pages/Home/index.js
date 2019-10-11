import React from "react";
import { geolocated } from "react-geolocated";

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
  render() {
    return (
      <Container>
        <Block>
          <LocationName>Rio de Janeiro / BR</LocationName>
          <InfoBox>
            <HeaderBox>
              <Icon src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/02d.png" />
              <Temp>13ºC</Temp>
            </HeaderBox>
            <Weather>few clouds</Weather>
            <WindSpeed>
              Vento: <strong>4.6m/s</strong>
            </WindSpeed>
          </InfoBox>
        </Block>
        <Button>Atualizar</Button>
      </Container>
    );
  }
}

// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: false
//   },
//   userDecisionTimeout: 5000
// })(Home);

export default Home;
