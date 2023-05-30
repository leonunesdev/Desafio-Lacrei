import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 4rem 0.5rem 0.5rem;

  > span {
    margin-left: 3.9375rem;
    width: 87.5rem;
    border-top: 1px solid #B0E0D3;

  }

  nav {
    display: flex;
    gap: 2.5rem;
    padding: 2rem 4rem 0px;
  }

  > nav a {
    color: #1F1F1F;
  }

  > p {
    font-size: 0.75rem;
    padding: 2rem 4rem 0px;
  }
`