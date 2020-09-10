import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const StyledNav = styled.nav`
  a {
    margin: 2rem;
  }
`;

const NavBar = () => {
  return (
    <StyledNav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </StyledNav>
  )
}

export default NavBar;