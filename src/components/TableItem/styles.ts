import styled from "styled-components";

const TableLine = styled.tr`
`

const TableCollum = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 100px;
`

const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #FFF;
  background-color: ${({color}) => color};
`

const Value = styled.div<{color: string}>`
  color: ${({color}) => color};
`

export {
  TableLine,
  TableCollum,
  Category,
  Value
}