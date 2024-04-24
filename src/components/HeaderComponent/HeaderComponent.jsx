import React from "react";
import { Col } from 'antd';
import Search from "antd/es/transfer/search";
import { WrapperHeader, WrapperTextHeader } from "./style";
import { WrapperHeaderAccount } from "./style";
import { WrapperTextHeaderSmall } from "./style";
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
//   import { Space } from 'antd';
// import Search from "antd/es/transfer/search";
const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter={"16"}>
                <Col span={6}>
                    <WrapperTextHeader>
                        QUANGDAISHOP
                    </WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                    // onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{ display: "flex", gap: "20px" }}>
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
                        <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent;