import { Item } from "../../types/Item";
import * as Styled from "./styles";

type Props = {
  item: Item
}

const TableItem = ({item}: Props) => {
  return (
    <Styled.TableLine>
      <Styled.TableCollum>...</Styled.TableCollum>
      <Styled.TableCollum>{item.categorie}</Styled.TableCollum>
      <Styled.TableCollum>{item.title}</Styled.TableCollum>
      <Styled.TableCollum>R$ {item.value}</Styled.TableCollum>
    </Styled.TableLine>
  );
}

export { TableItem }