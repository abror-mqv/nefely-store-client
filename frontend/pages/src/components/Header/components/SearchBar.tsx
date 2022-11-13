import React from "react";
import styled from "styled-components";

import Link from "next/link";

const StyledSearch = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
 
  .search {
    
    background: #eeeeee;
    width: auto;
    height: 55px;
    position: relative;
    overflow: hidden;
    border-radius: 12px 0 0 12px;
    box-shadow: 0 10px 30px rgba(#414856, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
    input[type="text"] {
      position: relative;
      width: 90px;
      height: 55px;
      color: #414856;
      border: 0;
      box-sizing: border-box;
      outline: none;
      padding: 0 0 0 40px;
      transition: width 0.6s ease;
      z-index: 10;
      opacity: 0;
      cursor: pointer;
      &:focus {
        z-index: 0;
        opacity: 1;
        width: 400px;
        ~ .symbol {
          &::before {
            width: 0%;
          }
          &:after {
            clip-path: inset(0% 0% 0% 100%);
            transition: clip-path 0.04s linear 0.105s;
          }
          .cloud {
            top: -30px;
            left: -30px;
            transform: translate(0, 0);
            transition: all 0.6s ease;
          }
          .lens {
            top: 20px;
            left: 15px;
            transform: translate(0, 0);
            fill: #00adb5;
            transition: top 0.5s ease 0.1s, left 0.5s ease 0.1s, fill 0.3s ease;
          }
        }
      }
    }
    .symbol {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      &:before {
        content: "";
        position: absolute;
        right: 0;
        width: 100%;
        height: 100%;
        background: #00adb5;
        z-index: -1;
        transition: width 0.6s ease;
      }

      .cloud,
      .lens {
        position: absolute;
        fill: #fff;
        stroke: none;
        top: 50%;
        left: 50%;
      }
      .cloud {
        width: 35px;
        height: 32px;
        transform: translate(-50%, -60%);
        transition: all 0.6s ease;
      }
      .lens {
        fill: #fff;
        width: 16px;
        height: 16px;
        z-index: 2;
        top: 24px;
        left: 24px;
        transition: top 0.3s ease, left 0.3s ease, fill 0.2s ease 0.2s;
      }
    }
  }
  .navigation {
    width: -webkit-fill-available;
    height: 55px;
    /* background-color: #00adb5; */
    border-radius: 0 12px 12px 0;
    background: #eeeeee;
    box-shadow: 5px 5px 10px #5a5a5a, -5px -5px 10px #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
  }
  .header-link{
    width: 80%;
    height: 100%;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover{
      box-shadow: 5px 5px 4px #5a5a5a2e, -5px -5px 10px #ffffff;
      background: linear-gradient(145deg, #ffffff, #d6d6d6);
      transition: 0.2s;
    }
    &:active{
      background: linear-gradient(145deg, #d6d6d6, #ffffff);   
    }
  }
  .header-link-last{
    width: 80%;
    height: 100%;
    transition: 0.2s;
    border-radius: 0 12px 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover{
      box-shadow: 5px 5px 4px #5a5a5a2e, -5px -5px 10px #ffffff;
      background: linear-gradient(145deg, #ffffff, #d6d6d6);

    }
  }
`;

function SearchBar() {
  return (
    <StyledSearch>
      <div className="search">
        <input type="text" placeholder="Модель телефона" />
        <div className="symbol">
          <svg className="cloud">
            <use xlinkHref="#lens" />
          </svg>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          id="lens"
        >
          <path
            d="M15.656,13.692l-3.257-3.229c2.087-3.079,1.261-7.252-1.845-9.321c-3.106-2.068-7.315-1.25-9.402,1.83
	s-1.261,7.252,1.845,9.32c1.123,0.748,2.446,1.146,3.799,1.142c1.273-0.016,2.515-0.39,3.583-1.076l3.257,3.229
	c0.531,0.541,1.404,0.553,1.95,0.025c0.009-0.008,0.018-0.017,0.026-0.025C16.112,15.059,16.131,14.242,15.656,13.692z M2.845,6.631
	c0.023-2.188,1.832-3.942,4.039-3.918c2.206,0.024,3.976,1.816,3.951,4.004c-0.023,2.171-1.805,3.918-3.995,3.918
	C4.622,10.623,2.833,8.831,2.845,6.631L2.845,6.631z"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          id="quest"
        >
          <path
            d="M10.398,22.811h4.618v4.964h-4.618V22.811z M21.058,1.594C19.854,0.532,17.612,0,14.33,0c-3.711,0-6.205,0.514-7.482,1.543
		c-1.277,1.027-1.916,3.027-1.916,6L4.911,8.551h4.577l-0.02-1.049c0-1.424,0.303-2.377,0.907-2.854
		c0.604-0.477,1.814-0.717,3.632-0.717c1.936,0,3.184,0.228,3.74,0.676c0.559,0.451,0.837,1.457,0.837,3.017
		c0,1.883-0.745,3.133-2.237,3.752l-1.797,0.766c-1.882,0.781-3.044,1.538-3.489,2.27c-0.442,0.732-0.665,2.242-0.665,4.529h4.68
		v-0.646c0-1.41,0.987-2.533,2.965-3.365c2.03-0.861,3.343-1.746,3.935-2.651c0.592-0.908,0.888-2.498,0.888-4.771
		C22.863,4.625,22.261,2.655,21.058,1.594z"
          />
        </symbol>
      </svg>
      <div className="navigation">
        <Link href="/" className="header-link">Каталог товаров</Link>
        <Link href="/" className="header-link">Акции</Link>
        <Link href="/" className="header-link">Наши адреса</Link>
        <Link href="/" className="header-link">Коллективная</Link> 
        {/* Доставка */}
        <Link href="/" className="header-link-last">Дрочка</Link>
        {/* Рассрочка */}
      </div>
    </StyledSearch>
  );
}

export default SearchBar;
