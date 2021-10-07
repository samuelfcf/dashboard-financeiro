import styled from "styled-components"

const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`

const Form = styled.form`
  display: flex;
  gap: 10px;

  @media (max-width:610px) {
    flex-direction: column;
  }
`
const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: #FFF;
    color: #8d8d8d;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;

  &::placeholder {
    color: #8d8d8d;
  }
`

const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: lightblue;
  color: black;
  cursor: pointer;
  
  &:hover {
      background-color: blue;
      color: white;
  }
`

export {
  Container,
  Form,
  Input,
  Select,
  Button
}