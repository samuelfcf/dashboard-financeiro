import { Item } from "../types/Item";

const getCurrentDate = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}

const filterListByMonth = (list: Item[], date: string): Item[] => {
  const [year, month] = date.split('-');
  let newList: Item[] = [];

  for (const item of list) {
    if (item.date.getFullYear() === parseInt(year) && item.date.getMonth()+1 === parseInt(month)) {
      newList.push(item)
    }
  }
  return newList
}

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();

  return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`
}

const formatCurrentMonth = (currentMonth: string): string => {
  const [year, month] = currentMonth.split('-');
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  return `${months[parseInt(month)-1]} ${year}`
}

export {
  getCurrentDate,
  filterListByMonth,
  formatDate,
  formatCurrentMonth
}
