import Columns from './Columns/Columns';
import * as S from './Main.styled';

const Main = ({ cards }) => {
  return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <Columns cards={cards} />
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
};

export default Main;
