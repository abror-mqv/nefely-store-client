import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { type } from "os";

type Phone = {
  name: string;
  id: string;
  roarCam: string;
  frontCam: string;
  capacities: {
    price: string;
    mem: string;
  }[];
  colors: {
    color: string;
    image: string;
    colorName: string;
  }[];
  description: string;
};

function PhoneOne() {
  const router = useRouter();
  const { id } = router.query;
  const url = `http://127.0.0.1:8000/api/products/${id}`;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof id != "undefined") {
      axios
        .get(url)
        .then((phone) => {
          // setData(phone.data);
          const ThisPhone: Phone = {
            name: phone.data.char_name,
            id: phone.data.id,
            roarCam: phone.data.roarCam,
            frontCam: phone.data.frontcam,
            capacities: [
              { price: phone.data.price_1, mem: phone.data.mem1 },
              { price: phone.data.price_2, mem: phone.data.mem2 },
              { price: phone.data.price_3, mem: phone.data.mem3 },
              { price: phone.data.price_4, mem: phone.data.mem4 },
              { price: phone.data.price_5, mem: phone.data.mem5 },
            ],
            colors: [
              {
                color: phone.data.color1,
                image: phone.data.image1,
                colorName: phone.data.color_name1,
              },
              {
                color: phone.data.color2,
                image: phone.data.image2,
                colorName: phone.data.color_name2,
              },
              {
                color: phone.data.color3,
                image: phone.data.image3,
                colorName: phone.data.color_name3,
              },
              {
                color: phone.data.color4,
                image: phone.data.image4,
                colorName: phone.data.color_name4,
              },
              {
                color: phone.data.color5,
                image: phone.data.image5,
                colorName: phone.data.color_name5,
              },
            ],
            description: phone.data.description,
          };
          console.log(ThisPhone)
          setData(ThisPhone)
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return <div>Phone number {data?.char_name}</div>;
}

export default PhoneOne;
