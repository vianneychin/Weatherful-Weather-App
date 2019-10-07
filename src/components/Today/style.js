import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: scroll;
  font-family: 'Roboto', sans-serif;
  border: 5px solid black;
  height: 103vh;
  > h1 {
    background-color: rgb(0, 0, 0, 0.9);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2em;
    font-size: 4em;
    font-weight: 300;
  }
  > h1 {
    > a {
      position: fixed;
      left: 91.5%;
      top: 1.5%;
      font-size: 1.3em;
      text-decoration: none;
      color: white;
    }
  }
  > header {
    background-color: bisque;
    color: orangered;
    display: flex;
    justify-content: space-around;
    font-size: 2em;
    font-weight: bold;
    height: 2em;
    align-items: center;
    > p:nth-child(1) {
    }
  }
`
export const Main = styled.main`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  height: 83%;
  color: rgb(253, 73, 32);
  > ul {
    width: 100%;
  }
`
export const List = styled.li`
  border: 1px solid orange;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 8.33%;
  align-items: center;
  font-size: 2em;
  background-color: ${props => (props.darkerShade ? 'bisque' : 'beige')};
`
export const Hourly = styled.p`
  width: 13%;
  display: flex;
  justify-content: center;
`
export const Temperature = styled.p``
export const RainChance = styled.p`
  display: flex;
  align-items: center;
  width: 11%;
  height: 100%;
  justify-content: flex-end;
`
export const CloudCover = styled.p`
  display: flex;
  align-items: center;
  width: 9%;
  height: 100%;
  justify-content: flex-end;
`
