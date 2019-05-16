import React from 'react'
import styled from 'styled-components'

const EditContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45em;
    height: 30em;
    box-shadow: 0 2px 6px 0 black;
    /* display: none; */

`
const XButton = styled.button`
    border: 0;
    outline: 0;
    font-size: 40px;
    color: grey;
    position: relative;
    top: -14.5%;
    left: 42%;
`
const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    height: 33.33%;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(239, 239, 239);
    > button {
        width: 40%;
        height: 60%;
        font-size: 2em;
        border-radius: 10px;
    }
    > button:nth-child(2) {
        background-color: green;
        color: white;
    }
    > button:nth-child(1) {
        border: 0;
        /* border: 4px solid rgba(255, 0, 0, 0.4); */
        background: none;
        /* color: rgba(0, 0, 0, 0.45); */
        font-weight: 700;
    }
`
const InputContainer = styled.div`
    display: flex;
    width: 100%;
    height: 67.77%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 2em;
    > input {
        width: 13em;
        background: 0;
        border: 0;
        outline: 0;
        padding-left: 4%;
        border-bottom: 2px solid black;
        font-size: 1.2em;
    }
    > p {
        margin-left: 2em;
        align-self: flex-start;
        margin-top: 5%;
        font-weight: 300;
    }
    > p:nth-child(2) {
        margin-top: -2em;
    }
`

const EditModal = (props) => 
    <EditContainer>
        <InputContainer>
            <XButton>✖</XButton>
            <p>Change name:</p>
            <input placeholder="name"/>
            <p>Change location:</p>
            <input placeholder="location"/>
        </InputContainer>
        <ButtonContainer>
            <button>Delete Account</button>
            <button>Save Changes</button>
        </ButtonContainer>
    </EditContainer>

export default EditModal
