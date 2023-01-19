import styled from "styled-components";

import Link from "next/link";
import Nav from "./Nav";

const Logo = styled.h1`
  color: red;
`;

export default function Header() {
  return (
    <header>
      <div className='bar'>
        <Link href='/'>
          <Logo>Desperate Times</Logo>
        </Link>
      </div>
      <div className='sub-bar'>
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}
