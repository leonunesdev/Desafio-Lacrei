import styled from "styled-components";

export const HeaderContainer = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EEEEEE;
  padding: 0.5rem 4rem 0.5rem 0.5rem;
  
> a {
    font-size: 2rem;
    color: #018762;
    font-weight: 700;
    margin-left: 4rem;
    line-height: 2.75rem;
  }

> nav {
  display: flex;
  gap: 2.5rem;
}

> nav a {
  font-weight: 700;
  color: #1F1F1F;
  line-height: 1.375rem;
}
`
