import styled, { keyframes } from 'styled-components'

export const Home_Container = styled.div`
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.header`
  padding-top: 25vh;
  padding-bottom: 40vh;
  width: 100vw;
  background: rgb(50, 50, 50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
`

export const Arrow = styled.div`
  height: 4vw;
  width: 4vw;
  border-style: solid;
  border-color: white;
  border-width: 0px 3px 3px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
`

export const DownArrow = styled.div`
  position: relative;
  top: 40%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11vh;
  animation: ${bounce} 2s infinite;
`

export const Clock_Container = styled.div`
  margin-top: 1%;
  font-size: 1.5em;
  > .clock {
    color: white;
    font-size: 6em;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
`

export const Greeting = styled.h1`
  display: flex;
  color: white;
  font-size: 6em;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  width: 100vw;
  justify-content: center;
`

export const Today = styled.p`
  margin-bottom: 5%;
  margin-top: 5%;
  color: rgb(50, 50, 50);
`

export const DayOfWeek = styled.p`
  margin-bottom: 5%;
  margin-top: 5%;
  color: rgb(50, 50, 50);
`

export const ChanceOfRain = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -10px;
  height: 1.3em;
  width: 5em;
  color: rgb(50, 50, 50);
  margin-bottom: 5%;
`

export const Temperature = styled.p`
  font-size: 1em;
  font-weight: lighter;
`

export const Weather_Day_List = styled.li`
  background-color: ${props => (props.darkerShade ? 'bisque' : 'beige')};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  text-align: center;
  font-size: 3em;
  > section:nth-child(2) {
    display: flex;
    align-items: center;
    font-size: 1.5em;
  }
  > section:nth-child(1) {
    > p:nth-child(1) {
      font-weight: bold;
    }
  }
  > section:nth-child(2) {
    > p:nth-child(1) {
      font-weight: 500;
      margin-right: 0.5em;
      color: darkred;
    }
  }
  section:nth-child(2) {
    > p:nth-child(2) {
      color: indianred;
    }
  }
`

export const Unordered_Weather_List = styled.ul`
  list-style: none;
  width: 100%;
  font-family: 'Roboto', sans-serif;
`

export const SecondHeader = styled.header`
  background-color: white;
  font-family: 'Roboto', sans-serif;
  color: rgb(50, 50, 50);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
  > h2:nth-child(1) {
    font-size: 3em;
  }
  > h2:nth-child(2) {
    font-size: 3em;
    font-weight: 400;
  }
  > h2:nth-child(3) {
    font-size: 7em;
    font-weight: 400;
    margin-top: 1%;
  }
  > a {
    font-size: 3em;
    font-weight: 100;
    text-decoration: underline;
    margin: 1%;
    color: rgb(50, 50, 50);
    &:visited {
      color: rgb(50, 50, 50);
    }
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  width: 6em;
  height: 7rem;
  font-size: 2rem;
  position: absolute;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

export const Name = styled.p`
  display: initial;
`
