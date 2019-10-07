import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import rainCloud from './../../img/Cloud-Rain.svg'
import cloud from './../../img/Cloud.svg'
import {
  Wrapper,
  Main,
  List,
  Hourly,
  Temperature,
  RainChance,
  CloudCover
} from './style'

class TodayWeather extends Component {
  render() {
    const { weather } = this.props
    const moment = require('moment')
    const time = num => moment.unix(num).format('ha')
    const removeDecimal = num => Number.parseFloat(num).toFixed(0)
    return (
      <Wrapper>
        <h1>
          12 Hour Forecast
          <Link to='/dashboard'>×</Link>
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
                {removeDecimal(
                  weather.hourly && weather.hourly.data[0].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[0].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[0].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List darkerShade>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[1].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[1].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[1].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[1].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[2].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[2].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[2].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[2].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List darkerShade>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[3].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[3].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[3].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[3].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[4].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[4].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[4].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[4].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List darkerShade>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[5].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[5].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[5].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[5].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[6].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[6].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[6].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[6].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List darkerShade>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[7].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[7].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[7].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[7].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[8].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[8].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[8].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[8].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List darkerShade>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[9].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[9].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[9].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[9].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[10].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[10].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[10].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[10].cloudCover * 100
                )}
                %
                <img src={cloud} />
              </CloudCover>
            </List>
            <List darkerShade>
              <Hourly>
                {time(weather.hourly && weather.hourly.data[11].time)}
              </Hourly>
              <Temperature>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[11].temperature
                )}
                °F
              </Temperature>
              <RainChance>
                {removeDecimal(
                  weather.hourly &&
                    weather.hourly.data[11].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </RainChance>
              <CloudCover>
                {removeDecimal(
                  weather.hourly && weather.hourly.data[11].cloudCover * 100
                )}
                %
                <img src={cloud} />
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
