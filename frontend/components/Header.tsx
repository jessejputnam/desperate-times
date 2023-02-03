import styled from "styled-components";

import Link from "next/link";
import Nav from "./Nav";

const StyledLogo = styled.h1`
  background-color: var(--red, red);
  font-size: 3.3rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-15deg);

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className='bar'>
        <StyledLogo>
          <Link href='/'>Desperate Times</Link>
        </StyledLogo>
        <Nav />
      </div>

      <div className='sub-bar'>
        <p>Search</p>
      </div>
    </StyledHeader>
  );
}
