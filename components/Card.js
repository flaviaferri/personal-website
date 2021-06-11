import styled from "@emotion/styled";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFileAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Body = styled.div`
  border: 4px solid #c7998c;
  border-style: double;
  background-color: #fff7f3;
  width: 60%;
  max-width: 800px;
  padding: 60px;
  -webkit-box-shadow: 5px 8px 8px -2px rgba(0, 0, 0, 0.56);
  box-shadow: 5px 8px 8px -2px rgba(0, 0, 0, 0.56);
  margin: auto;
  z-index: 1;

  ${mq[2]} {
    width: 80%;
  }

  ${mq[1]} {
    width: 90%;
    padding: 50px;
  }
`;

const Title = styled.h1`
  color: #c7998c;
  display: flex;
  justify-content: center;
  font-weight: 900;
  font-size: 4.2rem;
  padding: 10px;

  ${mq[0]} {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.p`
  color: #c7998c;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 15px;
  ${mq[0]} {
    font-size: 1.2rem;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;

  ${mq[2]} {
    flex-wrap: wrap;
  }
`;

const ListItem = styled.li`
  color: #c7998c;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const IconWrapper = styled.span`
  border: 2px solid;
  border-radius: 50%;
  padding: 15px;
  display: flex;
  justify-content: center;
  transition: transform 0.2s 0s ease-in;

  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
`;

const links = [
  {
    href: "https://github.com/flaviaferri",
    icon: <FaGithub size="30" />,
  },
  {
    href: "https://www.linkedin.com/in/flavia-ferri/",
    icon: <FaLinkedin size="30" />,
  },
  {
    href: "https://www.instagram.com/flaviaferrii/",
    icon: <FaInstagram size="30" />,
  },
  {
    href: "https://twitter.com/FlaviaFerri1",
    icon: <FaTwitter size="30" />,
  },
  {
    href: "/cv.pdf",
    icon: <FaFileAlt size="30" />,
  },
  {
    href: "mailto:flavia_ferri@hotmail.com",
    icon: <FaEnvelopeOpenText size="30" />,
  },
];

function Card() {
  const date = new Date();

  return (
    <Body>
      <Title>Flávia Ferri</Title>
      <SubTitle>Frontend Developer</SubTitle>
      <nav>
        <List>
          {links.map((item, index) => (
            <ListItem key={index}>
              <a target="_blank" href={item.href}>
                <IconWrapper>{item.icon}</IconWrapper>
              </a>
            </ListItem>
          ))}
        </List>
      </nav>
    </Body>
  );
}

export default Card;
