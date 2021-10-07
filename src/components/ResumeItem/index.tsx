import * as Styled from "./style";

type Props = {
  title: string;
  value: number;
  color: string;
}

const ResumeItem = ({title, value, color}: Props) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Info color={color}>R$ {value}</Styled.Info>
    </Styled.Container>
  );
}

export { ResumeItem } 