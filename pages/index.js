import styled from "@emotion/styled";
import ImageTop from "../public/top.svg";
import ImageBottom from "../public/bottom.svg";
import Card from "../components/Card";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ImageTopStyled = styled(ImageTop)`
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

const ImageBottomStyled = styled(ImageBottom)`
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
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <ImageTopStyled />
      <Card />
      <ImageBottomStyled />
    </Wrapper>
  );
}
