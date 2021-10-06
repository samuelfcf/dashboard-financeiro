import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
import * as Styled from "./styles";

type Props = {
  list: Item[]
}

const TableArea = ({ list }: Props) => {
  return (
    <Styled.Table>
      <thead>
        <tr>
          <Styled.TableHeadCollum width={100}>Data</Styled.TableHeadCollum>
          <Styled.TableHeadCollum width={130}>Categoria</Styled.TableHeadCollum>
          <Styled.TableHeadCollum >Título</Styled.TableHeadCollum>
          <Styled.TableHeadCollum width={150}>Valor</Styled.TableHeadCollum>
        </tr>
      </thead>

      <tbody>
        {list.map((item, index) => (
            <TableItem key={index} item={item} />
        ))}
      </tbody>
    </Styled.Table>
  )
}

export { TableArea }