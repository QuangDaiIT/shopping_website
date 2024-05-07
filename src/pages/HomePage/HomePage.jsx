import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import shopee1 from "../../assets/images/shopee1.jpg";
import shopee2 from "../../assets/images/shopee2.jpg";
import shopee3 from "../../assets/images/shopee3.jpg";
import shopee4 from "../../assets/images/shopee4.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const HomePage = () => {
  const arr = ["TV", "Tu lanh", "Lap top"];
  return (
    <>
      <div style={{ padding: "0px 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0px 120px",
          height: "1000px",
        }}
      >
        <SliderComponent arrImages={[shopee1, shopee2, shopee3, shopee4]} />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
        <ButtonComponent textButton="Xem Thêm" />
      </div>
    </>
  );
};

export default HomePage;
