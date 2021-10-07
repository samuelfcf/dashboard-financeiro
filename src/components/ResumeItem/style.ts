import styled from "styled-components";

const Container = styled.div`
  flex: 1;
`

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 5px;
`

const Info = styled.h1<{color: string}>`
  text-align: center;
  font-weight: bold;
  color: ${({color}) => color};
`

export {
  Container,
  Title,
  Info
}