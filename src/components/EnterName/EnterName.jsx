import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'

import styled from 'styled-components'
import Video from './video/blue-clouds.mp4'

const Button = styled.button`
    display: none;
`
const VideoBackground = styled.video`
    background-size: cover;
    height: 120vh;
`
const Introduction = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 4em;
    color: white;
`
const InputName = styled.input`
    width: 100%;
    padding-top: 5%;
    display: block;
    background: 0;
    border: 0;
    border-bottom: 2px solid white;
    color: #fff;
    font-weight: 600;
    font-size: 3em;
    padding-bottom: 8px;
    outline: 0;
    text-align: center;
    caret-color: #39ff14;
`
const InputNameContainer = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`
const ShadeBackground = styled.div`
    background-color: rgba(54, 63, 250, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`
class EnterName extends Component {
    state = {
        username: "",
        logged: false,
        redirect: false
    }
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    setRedirect = async (e) => {
        e.preventDefault()
        try {
            const registerResponse = await fetch(`/users/${this.state.username}`)
            const parsedResponse = await registerResponse.json();
            if(parsedResponse.user) {
              this.props.doUpdateUser(parsedResponse.user.username)
                this.setState({
                    redirect: true
                })
            }
        } catch(err) {
            console.log(err)
        }
    }
    render() {
        return (
            this.state.redirect
            ? <Redirect to='/dashboard'/>
            : <div>
                <VideoBackground autoPlay={true} loop={true}>
                    <source src={Video} type="video/mp4" />
                </VideoBackground>
                <ShadeBackground/>
                <InputNameContainer>
                    <Introduction>Hi, what's your name?</Introduction>
                    <form       onSubmit={e => this.setRedirect(e)}>
                        <InputName
                                onChange={e => this.changeHandler(e)}
                                autoFocus
                                autoComplete="off"
                                type="text"
                                name="username" 
                        />
                        <Button type='submit'>
                            Submit
                        </Button>
                    </form>
                </InputNameContainer>
            </div>
        )
    }
}
export default EnterName