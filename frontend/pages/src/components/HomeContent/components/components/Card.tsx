import React from "react";
import styled from "styled-components";

import { useState } from "react";
import Image from "next/image";

import Moulage from "./phoneImg.webp";

function Card(props: any) {
  const data = props.data;
  const StyledCard = styled.div`
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
    .memories {
      display: flex;
      width: 100%;
      gap: 18px;
      justify-content: center;
      .memory {
        span {
          font-size: 12px;
        }
      }
    }
  `;

  const [price, setPrice] = useState();
  const [complectation, setComplectation] = useState({});

  const handlePrice = (el: any) => {
    const arrayIndex = data.mem?.indexOf(el);
    const priceToShow = data.clean_price[arrayIndex];
    setPrice(priceToShow);
  };
  return (
    <StyledCard>
      <h4>{data.name}</h4>
      <Image alt={data.name} src={Moulage.src} width={160} height={200} />

      <p>{price} сом</p>
      <div className="memories">
        {data.mem?.map((el: any) => {
          return (
            <>
              <div className="memory" onClick={() => handlePrice(el)}>
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
