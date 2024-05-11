import React from "react";
import { Col, Row, Image, InputNumber } from "antd";
import conanImg from "../../assets/images/conan.jpg";
import conanImgSmall from "../../assets/images/conanicon.jpg";
import {
  WrapperStyleImageSmall,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAdrressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
  WrapperBtnQualityProduct,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Image src={conanImg} alt="image product" preview={false} />
        <Row
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={conanImgSmall} preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={conanImgSmall} preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={conanImgSmall} preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={conanImgSmall} preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={conanImgSmall} preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={conanImgSmall} preview={false} />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>
          Sách - Thám tử lừng danh Conan - Combo 10 tập từ tập 81 đến tập 90
        </WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <WrapperStyleTextSell>| Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000 đ</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAdrressProduct>
          <span>Giao đến </span>
          <span className="address"> P. Bến Nghé, Q.1, Hồ Chí Minh</span> -
          <span className="change-address"> Đổi địa chỉ</span>
        </WrapperAdrressProduct>
        <div
          style={{
            margin: "10px 0px 20px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <div style={{ marginBottom: "6px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
            <WrapperInputNumber defaultValue={3} onChange={onChange} />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
            textButton={"Chọn mua"}
          />
          <ButtonComponent
            size={40}
            styleButton={{
              background: "#fff",
              height: "48px",
              width: "220px",
              borderRadius: "4px",
              border: "1px solid rgb(13,92,182)",
            }}
            styleTextButton={{ color: "rgb(13,92,182)", fontSize: "15px" }}
            textButton={"Mua trả sau"}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
