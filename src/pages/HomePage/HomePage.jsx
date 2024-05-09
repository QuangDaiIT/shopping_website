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
import { WrapperButtonMore } from "../../components/NavBarComponent/style";
import { WrapperProducts } from "./style";

const HomePage = () => {
  const arr = ["TV", "Tu lanh", "Lap top"];
  return (
    // padding: "0px 120px"
    <>
      <div style={{ width: "1000px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        className="body"
        style={{
          width: "100%",
          backgroundColor: "#efefef",
        }}
      >
        <div
          id="container"
          style={{
            // padding: "0px 120px",
            height: "1000px",
            width: "1000px",
            margin: "0 auto",
          }}
        >
          <SliderComponent arrImages={[shopee1, shopee2, shopee3, shopee4]} />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <WrapperButtonMore
              // textButton="Xem Thêm"
              type="outline"
              // styleButton={{
              //   border: "1px solid rgb(11,116,229)",
              //   color: "rgb(11,226,229",
              //   width: "240px",
              //   height: "38px",
              //   borderRadius: "4px",
              // }}
            >
              <span>Xem Thêm</span>
            </WrapperButtonMore>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
