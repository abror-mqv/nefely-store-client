import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Arrow from "./right-arrows.png";
import Card from "./components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Compilation(props: any) {
  const data = props.data;
  const StyledCompilation = styled.div`
    height: 500px;
    margin: 0 auto;
    width: 80%;
    border-radius: 12px;
    box-shadow: 8px 8px 20px #5f5f5f, -8px -8px 20px #ffffff;
    margin-top: 40px;
    margin-bottom: 50px;
    scroll-margin-top: 40px;
    background-color: #${data.color}44;
    padding: 1px 30px;
    .products {
      display: flex;
      justify-content: flex-start;
      height: 392px;
      gap: 80px;
    }
    h3 {
      background: linear-gradient(145deg, #${data.color}00, #${data.color}44);
      box-shadow: 5px 5px 10px #5f5f5f, -5px -5px 10px #ffffff;
      border-radius: 12px;
      padding: 8px 24px;
      width: fit-content;
      font-weight: 300;
      color: #5f5f5f;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      transition: 0.2s;
      cursor: pointer;
      * {
        transition: 0.1s;
      }
      &:hover {
        transform: scale(104%);
        gap: 40px;
        .arrow {
          transform: scale(110%);
        }
      }
      &:active {
        transform: scale(85%);
        gap: 230px;
      }
    }
    ${data.uid == "apple" ? "scroll-margin-top: 420px" : ""}
  `;

  return (
    <StyledCompilation id={data.uid}>
      <h3>
        {data.title}{" "}
        <Image
          className="arrow"
          alt="Arrow"
          src={Arrow.src}
          width={24}
          height={24}
        />
      </h3>
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={3}
        spaceBetween={30} className="products">
        {data.products.map((el: any) => {
          return (
            <>
              <SwiperSlide>
                <Card data={el} color={data.color} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </StyledCompilation>
  );
}

export default Compilation;
