import React, { Component } from 'react';
import EditModal from '../EditModal/EditModal'
import TodayWeather from '../Today/Today'
import rainCloud from './../../img/Cloud-Rain.svg'

import styled, { keyframes } from 'styled-components'
import Clock from 'react-live-clock';

const Home_Container = styled.div`
    height: 100vh;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Header = styled.header`
    padding-top: 25vh;
    padding-bottom: 40vh;
    width: 100vw;
    background: rgb(50, 50, 50);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
const Arrow = styled.div`
    height: 4vw;
    width: 4vw;
    border-style: solid;
    border-color: white;
    border-width: 0px 3px 3px 0px;
    transform: rotate(45deg);
    transition: border-width 150ms ease-in-out;
`
const DownArrow = styled.div`
    position: relative;
    top: 40%;
    left: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 11vh;
    animation: ${bounce} 2s infinite;
`
const Clock_Container = styled.div`
    margin-top: 1%;
    font-size: 1.5em;
        > .clock {
            color: white;
            font-size: 6em;
            font-family: 'Roboto',sans-serif;
            font-weight: 500;
        }
`
const Greeting = styled.h1`
    display: flex;
    color: white;
    font-size: 6em;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    justify-content: center;
`
const Today = styled.p`
    margin-bottom: 5%;
    margin-top: 5%;
    color: rgb(50, 50, 50);
`
const DayOfWeek = styled.p`
    margin-bottom: 5%;
    margin-top: 5%;
    color: rgb(50, 50, 50);
`
const ChanceOfRain = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: -10px;
    height: 1.3em;
    width: 5em;
    color: rgb(50, 50, 50);
    margin-bottom: 5%;
`
const Temperature = styled.p`
    font-size: 1em;
    font-weight: lighter;
`
const Weather_Day_List = styled.li`
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
        >section:nth-child(1) {
            >p:nth-child(1) {
                font-weight: bold;
            }
        }
        >section:nth-child(2) {
            > p:nth-child(1) {
                font-weight: 500;
                margin-right: .5em;
                color: darkred;
            }
        }
        section:nth-child(2) {
            > p:nth-child(2) {
                color: indianred;
            }
        }
`
const Unordered_Weather_List = styled.ul`
    list-style: none;
    width: 100%;
    font-family: 'Roboto', sans-serif;
`
const SecondHeader = styled.header`
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
            &:visited {
                color: rgb(50, 50, 50); 
            }
        } 
`
const Button = styled.button`
    /* display: none; */
    background: none;
    border: none;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 5.5rem;
    font-weight: 300;
    width: 5em;
    height: 7rem;
    font-size: 5rem;
`
const Name = styled.p`
    display: initial;

`
class Home extends Component {
    state = {
        militaryHours: parseInt(new Date().toTimeString().split(" "))
    }
    render() {
        const moment = require('moment');
        const dayOfWeek = (num) =>  moment.unix(num).format('dddd')
        const {weather} = this.props
        const removeDecimal = (num) => Number.parseFloat(num).toFixed(0);
        const replaceCharacters = (string) => string.replace('/', ', ')
        const replaceCharacter = (string) =>  string.replace('_', ' ')
        return(
            <Home_Container>
                <Header>
                    <Clock_Container>
                        <Clock className="clock" format={'h:mma'} ticking={true} timezone={weather.timezone} /> 
                    </Clock_Container>
                    <Greeting>
                        {
                              this.state.militaryHours < 12 ? 'Good morning, '
                            : this.state.militaryHours < 19 ? 'Good afternoon, '
                            : 'Good evening, '
                        }
                        <Name>
                            {' ' + this.props.username}.
                        </Name>
                        <Button>Edit Profile</Button>
                    </Greeting>
                    <br/>
                    <br/>
                    <DownArrow>
                    <a>
                        <Arrow></Arrow>
                    </a>
                    </DownArrow>
                </Header>
                
                <SecondHeader>
                    <h2>
                        {replaceCharacter(replaceCharacters(String(weather.timezone)))}
                    </h2>
                    <h2>
                        {weather.currently && weather.currently.summary}
                    </h2>
                    <h2>
                        {removeDecimal(weather.currently && weather.currently.temperature)}°F
                    </h2>
                    <a href="/forecast">12 Hour Forecast</a>
                </SecondHeader>
                <Unordered_Weather_List>
                    <Weather_Day_List> 
                        <section>
                            <Today>Today</Today>
                            <ChanceOfRain>
                                {removeDecimal(weather.daily && weather.daily.data[0].precipProbability * 100)}%
                                <img src={rainCloud}/>
                            </ChanceOfRain>
                        </section>
                        <section>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[0].temperatureMax)}°F
                            </Temperature>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[0].temperatureLow)}°
                            </Temperature>
                        </section>
                    </Weather_Day_List>
                    <Weather_Day_List darkerShade> 
                        <section>
                            <DayOfWeek>
                                {dayOfWeek(weather.daily && weather.daily.data[1].time)}
                            </DayOfWeek>
                            <ChanceOfRain>
                                {removeDecimal(weather.daily && weather.daily.data[1].precipProbability * 100)}%
                                <img src={rainCloud}/>
                            </ChanceOfRain>
                        </section>
                        <section>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[1].temperatureMax)}°F
                            </Temperature>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[1].temperatureLow)}°
                            </Temperature>
                        </section>
                    </Weather_Day_List>
                    <Weather_Day_List>
                        <section>
                            <DayOfWeek>
                                {dayOfWeek(weather.daily && weather.daily.data[2].time)}
                            </DayOfWeek>
                            <ChanceOfRain>
                                {removeDecimal(weather.daily && weather.daily.data[2].precipProbability * 100)}%
                                <img src={rainCloud}/>
                            </ChanceOfRain>
                        </section>
                        <section>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[2].temperatureMax)}°F
                            </Temperature>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[2].temperatureLow)}°
                            </Temperature>
                        </section>
                    </Weather_Day_List>
                    <Weather_Day_List darkerShade>
                        <section>
                            <DayOfWeek>
                                {dayOfWeek(weather.daily && weather.daily.data[3].time)}
                            </DayOfWeek>
                            <ChanceOfRain>
                                {removeDecimal(weather.daily && weather.daily.data[3].precipProbability * 100)}%
                                <img src={rainCloud}/>
                            </ChanceOfRain>
                        </section>
                        <section>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[3].temperatureMax)}°F
                            </Temperature>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[3].temperatureLow)}°
                            </Temperature>
                        </section>
                    </Weather_Day_List>
                    <Weather_Day_List>
                        <section>
                            <DayOfWeek>
                                {dayOfWeek(weather.daily && weather.daily.data[4].time)}
                            </DayOfWeek>
                            <ChanceOfRain>
                                {removeDecimal(weather.daily && weather.daily.data[4].precipProbability * 100)}%
                                <img src={rainCloud}/>
                            </ChanceOfRain>
                        </section>
                        <section>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[4].temperatureMax)}°F
                            </Temperature>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[4].temperatureLow)}°
                            </Temperature>
                        </section>
                    </Weather_Day_List>
                    <Weather_Day_List darkerShade>
                        <section>
                            <DayOfWeek>
                                {dayOfWeek(weather.daily && weather.daily.data[5].time)}
                            </DayOfWeek>
                            <ChanceOfRain>
                                {removeDecimal(weather.daily && weather.daily.data[5].precipProbability * 100)}%
                                <img src={rainCloud}/>
                            </ChanceOfRain>
                        </section>
                        <section>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[5].temperatureMax)}°F
                            </Temperature>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[5].temperatureLow)}°
                            </Temperature>
                        </section>
                    </Weather_Day_List>
                    <Weather_Day_List>
                        <section>
                            <DayOfWeek>
                                {dayOfWeek(weather.daily && weather.daily.data[6].time)}
                            </DayOfWeek>
                            <ChanceOfRain>
                                {removeDecimal(weather.daily && weather.daily.data[6].precipProbability * 100)}%
                                <img src={rainCloud}/>
                            </ChanceOfRain>
                        </section>
                        <section>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[6].temperatureMax)}°F
                            </Temperature>
                            <Temperature>
                                {removeDecimal(weather.daily && weather.daily.data[6].temperatureLow)}°
                            </Temperature>
                        </section>
                    </Weather_Day_List>
                </Unordered_Weather_List>

                {/* <TodayWeather weather={this.props.weather}/> */}
            </Home_Container>
                // <EditModal/>
        )
    }
}
export default Home