import React from "react";
import { Badge, Col } from "antd";
// import Search from "antd/es/transfer/search";
import { WrapperHeader, WrapperTextHeader } from "./style";
import { WrapperHeaderAccount } from "./style";
import { WrapperTextHeaderSmall } from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
//   import { Space } from 'antd';
// import Search from "antd/es/transfer/search";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={"16"}>
        <Col span={6}>
          <WrapperTextHeader>QUANGDAISHOP</WrapperTextHeader>
        </Col>
        <Col span={12}>
          {/* <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"

                    // onSearch={onSearch}
                    /> */}
          <ButtonInputSearch
            size="large"
            placeholder="input search text"
            // variant="borderless"
            textButton="Tìm kiếm"
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
