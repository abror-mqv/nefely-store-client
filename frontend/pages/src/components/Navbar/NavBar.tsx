import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { TempData } from "./TempData";
import Image from "next/image";

const StyledNavbar = styled.nav`
  position: fixed;
  height: max-content;
  padding: 70px 0;
  width: 110px;
  background-color: blueviolet;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 12px 12px 0;
  background: linear-gradient(145deg, #ffffff, #d6d6d6);
  box-shadow: 9px 9px 18px #5f5f5f, -9px -9px 18px #ffffff;

  .container {
    height: max-content;
    width: max-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
    .nav__cat {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      gap: 2px;
      background: #e0e0e0;
      box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
      border-radius: 12px;
      padding: 4px 14px;
      * {
        display: block;
      }
      transition: 0.2s;
      &:hover {
        transform: scale(115%);
        z-index: 9999;
      }
      &:active{
        transform: scale(90%);
      }
    }
    .division {
      width: 120%;
      background-color: #5f5f5f;
      height: 1px;
    }
  }
`;

function NavBar() {
  return (
    <StyledNavbar>
      <div className="container">
        {TempData.data.map((el) => {
          return (
            <>
              <a href={`#${el.id}`} className="nav__cat">
                <Image
                  src={el.image.src}
                  alt={el.name}
                  width={42}
                  height={42}
                />
                {el.name}
              </a>
              {/* <div className="division"></div> */}
            </>
          );
        })}
      </div>
    </StyledNavbar>
  );
}

export default NavBar;
