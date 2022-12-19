import React from "react";
import styled from "styled-components";
import Compilation from "./components/Compilation";
import { TempData } from "./TempData";


const StyledHomeContent = styled.div`

`;

function HomeContent() {
  return <StyledHomeContent>
    {TempData.data.map(el=>{
      return(
        <Compilation key={el.uid} data={el}/>
      )
    })}
  </StyledHomeContent>;
}

export default HomeContent;
