import S from './style';

type CharacterCounter = {
  currentNum: number;
  maxNum: number;
  color: string;
  backgroundColor?: string;
};

export const CharacterCounter = ({
  currentNum,
  maxNum,
  color,
  backgroundColor,
}: CharacterCounter) => {
  return (
    <S.CountWrapper color={color} backgroundColor={backgroundColor}>
      <span>{currentNum}</span>
      <span>/</span>
      <span>{maxNum}</span>
    </S.CountWrapper>
  );
};
