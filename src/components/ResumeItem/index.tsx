import * as Styled from "./style";

type Props = {
  title: string;
  value: number
}

const ResumeItem = ({title, value}: Props) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Info>R$ {value}</Styled.Info>
    </Styled.Container>
  );
}

export { ResumeItem } 