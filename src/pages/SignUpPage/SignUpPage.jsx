import React, { useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import loginImg from "../../assets/images/loginImg.png";
import { EyeInvisibleFilled, EyeFilled } from "@ant-design/icons";
import { WrapperTextNote, WrapperTextTop } from "../SignInPage/style";
const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <WrapperTextTop>Xin chào</WrapperTextTop>
          <WrapperTextNote>Đăng nhập và tạo tài khoản</WrapperTextNote>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          />
          <div style={{ position: "relative" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              style={{ marginBottom: "10px" }}
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
            />
          </div>
          <div style={{ position: "relative" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
            <InputForm
              placeholder="confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
            />
          </div>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0px 10px",
            }}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
            textButton={"Đăng ký"}
          />
          <WrapperTextNote style={{ marginTop: "5px" }}>
            Bạn đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight>
          </WrapperTextNote>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={loginImg}
            preview={false}
            alt="image logo"
            style={{ height: "203px", width: "203px" }}
          />
          <h4>Mua sắm tại QuangDaiShop</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
