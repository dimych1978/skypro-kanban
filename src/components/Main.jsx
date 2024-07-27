import Columns from './Columns/Columns';
import * as S from './Main.styled';

const Main = () => {
  return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <Columns  />
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
};

export default Main;
