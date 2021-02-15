import styled from "@emotion/styled";
import ImageTop from "../assets/images/top.svg";
import ImageBottom from "../assets/images/bottom.svg";
import Card from "../components/Card";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

const ImageTopStyled = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  width: 17%;

  ${mq[2]} {
    width: 34%;
  }
  ${mq[1]} {
    width: 40%;
  }
`;

const ImageBottomStyled = styled("div")`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40%;
  background-repeat: no-repeat;
  background-position: bottom;

  ${mq[2]} {
    width: 55%;
  }

  ${mq[1]} {
    width: 60%;
    background-position: bottom;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <ImageTopStyled>
        <ImageTop />
      </ImageTopStyled>
      <Card />
      <ImageBottomStyled>
        <ImageBottom />
      </ImageBottomStyled>
    </Wrapper>
  );
}
