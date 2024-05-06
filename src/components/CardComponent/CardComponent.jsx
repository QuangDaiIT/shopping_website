import React from "react";
// import { Card } from "antd";
// import Meta from "antd/es/card/Meta";
import offical from "../../assets/images/offical.png";
import { StyleNameProduct } from "./style";
import { StarFilled } from "@ant-design/icons";
import { WrapperReportText } from "./style";
import { WrapperPriceText } from "./style";
import { WrapperDiscountText } from "./style";
import { WrapperCardStyle } from "./style";
import { WrapperImageStyle } from "./style";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
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
        <span>Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000đ
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
