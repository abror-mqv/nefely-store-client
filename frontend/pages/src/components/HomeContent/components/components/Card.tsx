import React, { useEffect } from "react";
import styled from "styled-components";

import { useState } from "react";
import Image from "next/image";

import Moulage from "./phoneImg.webp";

function Card(props: any) {
  const data = props.data;
  const StyledCard = styled.div`
    * {
      transition: 0.2s;
    }
    width: 320px;
    height: 100%;
    padding: 20px;
    background-color: #eeeeee;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    box-shadow: inset 5px 5px 12px #b3b3b3, inset -5px -5px 12px #ffffff;
    color: #9d9d9d;
    p{
      margin-bottom: 0;
      height: fit-content;
      padding: 0;
      margin: 0;
    }
    .memories {
      display: flex;
      width: 100%;
      gap: 18px;
      position: absolute;
      bottom: 0;
      justify-content: center;
      .memory {
        background-color: #${props.color}44;
        border-radius: 8px 8px 0 0;
        padding: 8px 10px;
        cursor: pointer;
        z-index: 99999999 !important;
        box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
        height: 32px;
        span {
          font-size: 12px;
        }
        transition: 0.2s;
      }
      .picked {
        background-color: #${props.color};
        transform: translateY(-px) scale(112%);
        transition: 0.2s;
        color: #ffffff;
      }
    }
  `;

  const [com, setComp] = useState(0);
  const [price, setPrice] = useState(0);
  const [monthly_price, setMonthly_price] = useState(0);

  const priceHandler = (com: number) => {
    setPrice(data?.clean_price?.[com]);
  };
  const monthlyPriceHandler = (com: number) => {
    setMonthly_price(data?.monthly_price?.[com]);
  };
  const compHandler = (el: any) => {
    const arrayIndex = data.mem?.indexOf(el);
    setComp(arrayIndex);
  };

  useEffect(() => {
    priceHandler(com);
    monthlyPriceHandler(com);
  }, [com]);

  return (
    <StyledCard>
      <h4>{data.name}</h4>
      <Image alt={data.name} src={Moulage.src} width={160} height={200} />

      <p>{price} сом</p>
      <p>{monthly_price} в месц</p>
      <div className="memories">
        {data.mem?.map((el: any) => {
          return (
            <>
              <div
                className={`memory ${
                  data.mem?.indexOf(el) == com ? "picked" : ""
                }`}
                onClick={() => compHandler(el)}
              >
                {el} <span>гб</span>
              </div>
            </>
          );
        })}
      </div>
    </StyledCard>
  );
}

export default Card;
