import React, { useEffect, useState } from 'react';
import Reset from "./styles/Reset";
import * as Styled from './styles/Styles';
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { items } from "./data/items";
import { filterListByMonth, getCurrentDate } from './utils/datefilter';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] =  useState(getCurrentDate());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <>
      <Reset />
      <Styled.Container>
        <Styled.Header>
          <Styled.HeaderText>Dashboard Financeiro</Styled.HeaderText>
        </Styled.Header>
        <Styled.Body>
          Body
        </Styled.Body>
      </Styled.Container>
    </>
  );
}

export default App;
