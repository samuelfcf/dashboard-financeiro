import * as Styled from "./styles";

type Props = {
  currentMonth: string
}

const InfoArea = ({currentMonth}: Props) => {
  return (
    <Styled.Container>
      <Styled.MonthArea>
        <Styled.MonthArrow>⬅️</Styled.MonthArrow>
        <Styled.MonthTitle>{currentMonth}</Styled.MonthTitle>
        <Styled.MonthArrow>➡️</Styled.MonthArrow>
      </Styled.MonthArea>

      <Styled.ResumeArea>

      </Styled.ResumeArea>
    </Styled.Container>
  );
}

export { InfoArea }