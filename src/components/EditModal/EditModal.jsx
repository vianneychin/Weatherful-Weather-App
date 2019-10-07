import React from 'react'
import styled from 'styled-components'

const EditForm = styled.form`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45em;
  height: 30em;
  box-shadow: 0 2px 6px 0 black;
  position: absolute;
  background-color: white;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
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
    background: none;
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

const EditModal = props => (
  <EditForm onSubmit={props.closeAndEdit}>
    <InputContainer>
      <XButton onClick={props.modalOffHandler}>×</XButton>
      <p>Change name:</p>
      <input
        type='text'
        name='username'
        onChange={props.handleFormChange}
        value={props.nameToEdit.username}
        placeholder='name'
      />
      <p>Change location:</p>
      <input placeholder='location' />
    </InputContainer>
    <ButtonContainer>
      <button>Delete Account</button>
      <button type='submit'>Save Changes</button>
    </ButtonContainer>
  </EditForm>
)

export default EditModal
