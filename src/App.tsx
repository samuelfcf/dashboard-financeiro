import React, { useEffect, useState } from 'react';
import Reset from "./styles/Reset";
import * as Styled from './styles/Styles';
import { Item } from "./types/Item";
import { items } from "./data/items";
import { categories } from './data/categories';
import { filterListByMonth, getCurrentDate } from './utils/datefilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { FormArea } from './components/FormArea';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentDate());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    filteredList.forEach((item) => {
      if (categories[item.category].expense) {
        expenseCount += item.value;
      } else {
        incomeCount += item.value;
      }
    });

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    setList([...list, item]);
  }

  return (
    <>
      <Reset />
      <Styled.Container>
        <Styled.Header>
          <Styled.HeaderText>Dashboard Financeiro</Styled.HeaderText>
        </Styled.Header>

        <Styled.Body>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />

          <FormArea onAdd={handleAddItem} />

          <TableArea list={filteredList} />
        </Styled.Body>
      </Styled.Container>
    </>
  );
}

export default App;
