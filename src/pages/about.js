import React from "react";
import styled from "styled-components";
import { BsShieldFillCheck } from "react-icons/bs";

export default function About() {
  return (
    <Wrapper>
      <Section>
        <h2>I'm Martin. 👋</h2>
        <h3>Gamer & software developer.</h3>

        <p>
          I love playing Battlefield! 💓 <br /> I'd love to see the game
          succeed, because, like a lot of other people, I think it has a great
          deal of potential - despite the current state of the game.
        </p>

        <p>
          I made the app for everybody who wants to stay up to date about the
          current state of the game and enable you to keep track of things that
          are important to you as a gamer personally. Let's face it: Not
          everyone is sad about the fact that there is no single player
          campaign. ;-){" "}
        </p>

        <p>
          With this app you can select the features you really want in the game
          and I will update the list on every patch note. So you can relax and
          check the app once in a while.
        </p>

        <p>Have fun and see you on the battlefield.</p>

        <p>Martin</p>

        <p>
          If you have a feature idea for the app, just get in touch with me via
          email or write a pm on Reddit.
        </p>

        <p>
          <Mail href="mailto:battlefix2042@gamil.com">
            battlefix2042@gamil.com
          </Mail>
        </p>
      </Section>
      <Section>
        <Header>
          <BsShieldFillCheck size="50" /> Privacy
        </Header>
        <p>
          I am using Plausible Analytics, which is a GDPR, CCPA and cookie law
          compliant site analytics tool. I don’t care who you are, I just am
          curious how you are using the site, so that is why I chose a privacy
          focused tool and for that reason, I have made my analytics dashboard
          public so that you can see exactly what is being gathered.
        </p>
        <p>Check it here: </p>
        <p>
          <Mail
            href="https://plausible.battlefix.net"
            target="_blank"
            rel="noreferrer"
          >
            plausible.battlefix.net
          </Mail>
        </p>
      </Section>
    </Wrapper>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Mail = styled.a`
  background-color: #26ffdf;
  color: black;
  padding: 2px;
`;

const Section = styled.section`
  margin: 0 0 50px 0;
`;

const Wrapper = styled.div`
  color: #26ffdf;
  padding: 20px;
`;
