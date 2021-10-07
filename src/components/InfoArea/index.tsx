import * as Styled from "./styles";
import { formatCurrentMonth } from "../../utils/datefilter";
import { ResumeItem } from "../ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void
  income: number;
  expense: number
}

const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {

  const balance = income-expense;

  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}}`);
  }

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}}`);
  }

  return (
    <Styled.Container>
      <Styled.MonthArea>
        <Styled.MonthArrow onClick={handlePrevMonth}>⬅️</Styled.MonthArrow>
        <Styled.MonthTitle>{formatCurrentMonth(currentMonth)}</Styled.MonthTitle>
        <Styled.MonthArrow onClick={handleNextMonth}>➡️</Styled.MonthArrow>
      </Styled.MonthArea>

      <Styled.ResumeArea>
        <ResumeItem
          title="Receitas"
          value={income}
          color={"#000"}
        />
        <ResumeItem
          title="Despesas"
          value={expense}
          color={"#000"}
        />
        <ResumeItem
          title="Balanço"
          value={balance}
          color={balance === 0 ? "#000" : balance < 0 ? "red" : "green"}
        />
      </Styled.ResumeArea>
    </Styled.Container>
  );
}

export { InfoArea }