import React from "react";
// import { Card } from "antd";
// import Meta from "antd/es/card/Meta";
import offical from "../../assets/images/offical.png";
import { StarFilled } from "@ant-design/icons";
import {
  WrapperImageStyle,
  StyleNameProduct,
  WrapperStyleTextSell,
  WrapperReportText,
  WrapperPriceText,
  WrapperDiscountText,
  WrapperCardStyle,
} from "./style";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 160 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      {/* <Image src={offical} style={{ width: "68px", height: "12px" }} /> */}
      <WrapperImageStyle
        src={offical}
        alt=""
        style={{
          position: " absolute",

          top: "-2px",
          left: "-2px",
          borderTopLeftRadius: "3px",
          width: "89px",
          height: "20px",
        }}
      />

      {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span> 4.96 </span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell>Đã bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: "8px" }}>1.000.000đ</span>
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
