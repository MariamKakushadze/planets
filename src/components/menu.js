import Header from "./header";

import GlobalCss from "../global.css";
import styled from "styled-components";
import BurgerMenu from "./burgerMenu";

function Menu() {
  return (
    <Wrapper>
      <GlobalCss />
      <Header />
      <BurgerMenu />
    </Wrapper>
  );
}

export default Menu;

const Wrapper = styled.div`
  padding: 16px 24px 46px 24px;
`;
