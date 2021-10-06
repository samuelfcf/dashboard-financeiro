import { categories } from "../../data/categories";
import { Item } from "../../types/Item";
import { formatDate } from "../../utils/datefilter";
import * as Styled from "./styles";

type Props = {
  item: Item
}

const TableItem = ({item}: Props) => {
  return (
    <Styled.TableLine>
      <Styled.TableCollum>{formatDate(item.date)}</Styled.TableCollum>
      <Styled.TableCollum>
        <Styled.Category color={categories[item.category].color}> {categories[item.category].title}</Styled.Category>
       </Styled.TableCollum>
      <Styled.TableCollum>{item.title}</Styled.TableCollum>
      <Styled.TableCollum>
        <Styled.Value color={categories[item.category].expense ? "red" : "green"}>
          R$ {item.value}
        </Styled.Value>
      </Styled.TableCollum>
    </Styled.TableLine>
  );
}

export { TableItem }