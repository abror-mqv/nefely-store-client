import React from "react";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";

const StyledHeader = styled.header`
  background-color: #EEEEEE;
  display: flex;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
`;

function Header() {
  return (
    <StyledHeader>
      <SearchBar />
    </StyledHeader>
  );
}

export default Header;
