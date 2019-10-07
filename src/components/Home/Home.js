import React, { Component } from 'react'
import EditModal from '../EditModal/EditModal'
import rainCloud from './../../img/Cloud-Rain.svg'
import { Link } from 'react-router-dom'
import Clock from 'react-live-clock'
import {
  Home_Container,
  Header,
  Arrow,
  DownArrow,
  Clock_Container,
  Today,
  Greeting,
  DayOfWeek,
  ChanceOfRain,
  Temperature,
  Weather_Day_List,
  Unordered_Weather_List,
  SecondHeader,
  Button,
  Name
} from './style'

class Home extends Component {
  state = {
    militaryHours: parseInt(new Date().toTimeString().split(' ')),
    username: [],
    nameToEdit: {
      _id: null,
      username: ''
    },
    modalOn: false
  }
  closeAndEdit = async e => {
    e.preventDefault()
    try {
      const editResponse = await fetch(
        `http://localhost:9000/api/weather/` + this.state.nameToEdit._id,
        {
          method: 'PUT',
          body: JSON.stringify(this.state.nameToEdit._id),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const parsedResponse = await editResponse.json()
      const editedName = this.state.username.map(name => {
        if (name._id === this.state.nameToEdit.username._id) {
          name = parsedResponse.data
        }
        return name
      })
    } catch (err) {
      console.log(err)
    }
  }
  handleFormChange = e => {
    this.setState({
      nameToEdit: {
        ...this.state.nameToEdit,
        [e.target.name]: e.target.value
      }
    })
  }
  modalHandler = () => {
    this.setState({
      modalOn: true
    })
  }
  modalOffHandler = () => {
    this.setState({
      modalOn: false
    })
  }
  render() {
    const moment = require('moment')
    const { weather } = this.props
    const dayOfWeek = num => moment.unix(num).format('dddd')
    const removeDecimal = num => Number.parseFloat(num).toFixed(0)
    const replaceCharacters = string => string.replace('/', ', ')
    const replaceCharacter = string => string.replace('_', ' ')
    return (
      <Home_Container>
        <Header>
          <Clock_Container>
            <Clock
              className='clock'
              format={'h:mma'}
              ticking={true}
              timezone={weather.timezone}
            />
          </Clock_Container>
          <Greeting>
            {this.state.militaryHours < 12
              ? 'Good morning, '
              : this.state.militaryHours < 19
              ? 'Good afternoon, '
              : 'Good evening, '}
            <Name>
              <span>&nbsp;</span>
              <span>{this.props.username}.</span>
              <Button onClick={this.modalHandler}>edit profile</Button>
            </Name>
          </Greeting>
          <DownArrow>
            <a>
              <Arrow></Arrow>
            </a>
          </DownArrow>
          {this.state.modalOn ? (
            <EditModal
              modalOffHandler={this.modalOffHandler}
              nameToEdit={this.state.nameToEdit}
              closeAndEdit={this.closeAndEdit}
              handleFormChange={this.handleFormChange}
            />
          ) : (
            <div />
          )}
        </Header>
        <SecondHeader>
          <h2>
            {replaceCharacter(replaceCharacters(String(weather.timezone)))}
          </h2>
          <h2>{weather.currently && weather.currently.summary}</h2>
          <h2>
            {removeDecimal(weather.currently && weather.currently.temperature)}
            °F
          </h2>
          <Link to='/forecast'>12 Hour Forecast</Link>
        </SecondHeader>
        <Unordered_Weather_List>
          <Weather_Day_List>
            <section>
              <Today>Today</Today>
              <ChanceOfRain>
                {removeDecimal(
                  weather.daily && weather.daily.data[0].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </ChanceOfRain>
            </section>
            <section>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[0].temperatureMax
                )}
                °F
              </Temperature>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[0].temperatureLow
                )}
                °
              </Temperature>
            </section>
          </Weather_Day_List>
          <Weather_Day_List darkerShade>
            <section>
              <DayOfWeek>
                {dayOfWeek(weather.daily && weather.daily.data[1].time)}
              </DayOfWeek>
              <ChanceOfRain>
                {removeDecimal(
                  weather.daily && weather.daily.data[1].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </ChanceOfRain>
            </section>
            <section>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[1].temperatureMax
                )}
                °F
              </Temperature>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[1].temperatureLow
                )}
                °
              </Temperature>
            </section>
          </Weather_Day_List>
          <Weather_Day_List>
            <section>
              <DayOfWeek>
                {dayOfWeek(weather.daily && weather.daily.data[2].time)}
              </DayOfWeek>
              <ChanceOfRain>
                {removeDecimal(
                  weather.daily && weather.daily.data[2].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </ChanceOfRain>
            </section>
            <section>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[2].temperatureMax
                )}
                °F
              </Temperature>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[2].temperatureLow
                )}
                °
              </Temperature>
            </section>
          </Weather_Day_List>
          <Weather_Day_List darkerShade>
            <section>
              <DayOfWeek>
                {dayOfWeek(weather.daily && weather.daily.data[3].time)}
              </DayOfWeek>
              <ChanceOfRain>
                {removeDecimal(
                  weather.daily && weather.daily.data[3].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </ChanceOfRain>
            </section>
            <section>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[3].temperatureMax
                )}
                °F
              </Temperature>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[3].temperatureLow
                )}
                °
              </Temperature>
            </section>
          </Weather_Day_List>
          <Weather_Day_List>
            <section>
              <DayOfWeek>
                {dayOfWeek(weather.daily && weather.daily.data[4].time)}
              </DayOfWeek>
              <ChanceOfRain>
                {removeDecimal(
                  weather.daily && weather.daily.data[4].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </ChanceOfRain>
            </section>
            <section>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[4].temperatureMax
                )}
                °F
              </Temperature>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[4].temperatureLow
                )}
                °
              </Temperature>
            </section>
          </Weather_Day_List>
          <Weather_Day_List darkerShade>
            <section>
              <DayOfWeek>
                {dayOfWeek(weather.daily && weather.daily.data[5].time)}
              </DayOfWeek>
              <ChanceOfRain>
                {removeDecimal(
                  weather.daily && weather.daily.data[5].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </ChanceOfRain>
            </section>
            <section>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[5].temperatureMax
                )}
                °F
              </Temperature>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[5].temperatureLow
                )}
                °
              </Temperature>
            </section>
          </Weather_Day_List>
          <Weather_Day_List>
            <section>
              <DayOfWeek>
                {dayOfWeek(weather.daily && weather.daily.data[6].time)}
              </DayOfWeek>
              <ChanceOfRain>
                {removeDecimal(
                  weather.daily && weather.daily.data[6].precipProbability * 100
                )}
                %
                <img src={rainCloud} />
              </ChanceOfRain>
            </section>
            <section>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[6].temperatureMax
                )}
                °F
              </Temperature>
              <Temperature>
                {removeDecimal(
                  weather.daily && weather.daily.data[6].temperatureLow
                )}
                °
              </Temperature>
            </section>
          </Weather_Day_List>
        </Unordered_Weather_List>
      </Home_Container>
    )
  }
}
export default Home
