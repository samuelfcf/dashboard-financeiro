import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  background-color: #FFFFFF;
  padding: 20px;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  margin-top: 20px;

  td {
    padding-bottom: 10px;
    padding-left: 2px;
  }
`

const TableHeadCollum = styled.th<{ width?: number }>`
  font-weight: bold;
  vertical-align: middle;
  font-size: 18px;
  padding: 10px 0 25px 10px;
  text-align: left;
  width: ${({width}) => width ? `${width}px` : "auto"}
`

export {
  Table,
  TableHeadCollum,
}