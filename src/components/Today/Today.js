import React, { Component } from 'react'
import Moment from 'react-moment';
import moment from 'moment'
import styled from 'styled-components'
import rainCloud from './../../img/Cloud-Rain.svg'
import cloud from './../../img/Cloud.svg'

const Wrapper = styled.div`
    overflow: scroll;
    font-family: 'Roboto', sans-serif;
    border: 5px solid black;
    height: 103vh;
    > h1 {
        background-color: rgb(0, 0, 0, .9);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2em;
        font-size: 4em;
        font-weight: 300;
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
const Main = styled.main`
    border: 1px solid red;
    display: flex;
    justify-content: center;
    height: 83%;
    color: rgb(253, 73, 32);
    > ul {
        width: 100%;
    }
`
const List = styled.li`
    border: 1px solid orange;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 8.33%;
    align-items: center;
    font-size: 2em;
    background-color: ${props => (props.darkerShade ? 'bisque' : 'beige')};
`
const Hourly = styled.p`
    width: 13%;
    display: flex;
    justify-content: center;
`
const Temperature = styled.p`

`
const RainChance = styled.p`
    display: flex;
    align-items: center;
    width: 11%;
    height: 100%;
    justify-content: flex-end;
`
const CloudCover = styled.p`
    display: flex;
    align-items: center;
    width: 9%;
    height: 100%;
    justify-content: flex-end;
`
const XLink = styled.a`
    position: fixed;
    left: 91.5%;
    top: 1.5%;
    font-size: 1.3em;
    text-decoration: none;
    color: white;
`
class TodayWeather extends Component {
    render() {
        const {weather} = this.props
        const moment = require('moment');     
        const time = (num) =>  moment.unix(num).format('ha')
        const removeDecimal = (num) => Number.parseFloat(num).toFixed(0);
        return(
            <Wrapper>
                    <h1>12 Hour Forecast
                        <XLink href='/dashboard'>×</XLink>
                    </h1>
                    <header>
                        <p>Hourly Time</p>
                        <p>Temperature</p>
                        <p>Rain Chance</p>
                        <p>Cloud Cover</p>
                    </header>
                    <Main>
                        <ul>
                            <List>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[0].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[0].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[0].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[0].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List darkerShade>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[1].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[1].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[1].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[1].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[2].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[2].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[2].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[2].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List darkerShade>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[3].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[3].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[3].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[3].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[4].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[4].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[4].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[4].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List darkerShade>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[5].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[5].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[5].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[5].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[6].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[6].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[6].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[6].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List darkerShade>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[7].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[7].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[7].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[7].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[8].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[8].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[8].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[8].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List darkerShade>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[9].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[9].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[9].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[9].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[10].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[10].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[10].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[10].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            <List darkerShade>
                                <Hourly>
                                    {time(weather.hourly && weather.hourly.data[11].time)}
                                </Hourly>
                                <Temperature>
                                    {removeDecimal(weather.hourly && weather.hourly.data[11].temperature)}°F
                                </Temperature>
                                <RainChance>
                                    {removeDecimal(weather.hourly && weather.hourly.data[11].precipProbability * 100)}%
                                    <img src={rainCloud}/>
                                </RainChance>
                                <CloudCover>
                                    {removeDecimal(weather.hourly && weather.hourly.data[11].cloudCover * 100)}%
                                    <img src={cloud}/>
                                </CloudCover>
                            </List>
                            
                        </ul>
                    </Main>
                    {/* <h3>{weather.timezone}</h3>
                    // <h3>Current: {weather.currently && weather.currently.temperature} degrees</h3>
                    // <h4>Next hr: {weather.hourly && weather.hourly.data[1].time}</h4> */}
                
            </Wrapper>
        )
    }
}

    // var t = new Date( 1370001284000 );
    // var formatted = t.format("dd.mm.yyyy hh:MM:ss");
    // console.log(formatted)
export default TodayWeather