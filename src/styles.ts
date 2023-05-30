'use client'

import styled from "styled-components";

export const IntroContainer = styled.div``

export const IntroContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 4rem 0px;

  > section h2 {
    width: 28.3125rem;
    font-size: 3rem;
    font-weight: 700;
    line-height: 65px;
  }

  > section p {
    margin-top: 2rem;
    line-height: 2.0625rem;
    font-size: 1.5rem;
    color: #515151;
  }

  > section .links {
    display: flex;
    gap: 69px;
  }

  > section a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    padding: 0.75rem 2rem 0.75rem 2rem;
    font-size: 1.125rem;
    margin-top: 3rem;
    color: #FFFFFF;
    gap: 4.3125rem;
    background: #018762;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  >section a:nth-child(2) {
    color: #018762;
    background: #FFFFFF;
    border: 2px solid #018762;
  }
`


