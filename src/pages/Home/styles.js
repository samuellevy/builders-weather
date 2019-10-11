import styled from "styled-components";
import { colors } from "../../configs";

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  flex-direction: column;
`;

export const Block = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(50, 50, 93, 0.65), 0 1px 0 rgba(0, 0, 0, 0.02);
`;
export const LocationName = styled.h1`
  font-size: 20px;
  width: 100%;
  text-align: center;
`;
export const InfoBox = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.img``;
export const Temp = styled.div`
  font-size: 45px;
`;
export const Weather = styled.div`
  font-size: 18px;
  font-style: italic;
`;
export const WindSpeed = styled.div`
  margin: 10px 0;
`;

export const Button = styled.button`
  margin: 40px 0;
  padding: 20px 40px;
  border-radius: 10px;
  border: 0;
  font-size: 20px;
  opacity: 0.6;
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
`;
