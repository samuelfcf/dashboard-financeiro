import styled from "styled-components";

const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`

const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`

const MonthTitle = styled.h1`
  flex: 1;
  text-align: center;
`

const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`

export {
  Container,
  MonthArea,
  MonthArrow,
  MonthTitle,
  ResumeArea,
}