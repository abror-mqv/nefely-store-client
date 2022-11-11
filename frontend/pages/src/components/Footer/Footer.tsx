import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  max-width: 100vw;
  min-height: 200px;
  background-color: #222831;
  bottom: 0;
  color: #fff;
  .container{
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    padding: 40px;
    gap: 20px;
    .footer__column{
        max-width: 180px;
        display: flex;
        flex-direction: column;
        a{
            color: #00ADB5;
        }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <div className="footer__column">
          Copyright 2022-2023 Nefely Store
          <h6>
            Продажа телефонов iPhone, Samsung, Xiaomi, Huawei, Realmi,
            планшетов, ноутбуки
          </h6>
          <h6>Купить телефон в бишкеке, в рассрочку</h6>
        </div>
        <div className="footer__column">
          <Link href="#" className="footer__larger">
            Помощь покупателям
          </Link>
          <Link href="#" className="li">
            Адреса салонов
          </Link>
          <Link href="#" className="li">
            Акции
          </Link>
          <Link href="#" className="li">
            Оформление рассрочки
          </Link>

          <p className="footer__callcenter">
            Справочная служба (с 10:00 до 22:00)
            0999109190
          </p>
        </div>
        <div className="footer__column">
            <Link href="/" className="footer__larger">Каталог товаров</Link>
            <Link href="/">Телфоны</Link>
            <Link href="/">Флагманы</Link>
            <Link href="/">Планшеты</Link>
            <Link href="/">Ноутбуки</Link>
            <Link href="/">Гаджеты</Link>
            <Link href="/">Товыры по акции</Link>
        </div>
        <div className="footer__column">
            <Link href="/" className="footer__larger">Nefely Store</Link>
            <Link href="/">О компании</Link>
            <Link href="/">Адреса салонов</Link>
            <Link href="/">События</Link>
            <Link href="/">Гарантия</Link>
            <Link href="/">Как работает наша рассрочка?</Link>
            <div className="socials">
                <p className="footer__socials">
                    Nefely Store в соц сетях:
                </p>

            </div>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
