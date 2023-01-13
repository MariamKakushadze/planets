import BurgerMenu from "./components/burgerMenu";
import Header from "./components/header";
import GlobalCss from "./global.css";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <GlobalCss />
      <Header />
      <BurgerMenu />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 16px 24px 46px 24px;
`;
