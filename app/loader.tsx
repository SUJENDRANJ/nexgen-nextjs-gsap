"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap, Expo } from "gsap";

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        reveal();
        return 100;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => onFinish(),
    });

    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.5,
    })
      .to(".hide", { opacity: 0, duration: 0.3 }, "-=0.6")
      .to(".hide", { display: "none", duration: 0.01 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.4,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .set(".title-lines", { display: "block" }) // Make sure <h1> becomes visible
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 1.5,
      });
  };

  return (
    <AppContainer>
      <Loading>
        <Follow className="follow" />
        <ProgressBar className="hide" style={{ width: counter + "%" }} />
        <Count className="hide">{counter}%</Count>
      </Loading>

      <Content className="content">
        <h1 className="title-lines font-extrabold uppercase text-2xl">
          Nexgen Nextopia
        </h1>
      </Content>
    </AppContainer>
  );
};

export default Loader;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #121212;
`;

const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const Follow = styled.div`
  position: absolute;
  background-color: #c5fb45;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: width 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
`;

const Content = styled.div`
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #121212;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  color: #fff;

  h1.title-lines {
    text-align: center;
    font-size: 64px;
    opacity: 0;
    display: none;
    font-weight: 700;
    color: white;
  }
`;
