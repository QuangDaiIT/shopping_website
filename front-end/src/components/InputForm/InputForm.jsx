import React, { useState } from "react";
import { Input } from "antd";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { placeholder = "Nhập text", ...rest } = props;

  return (
    <WrapperInputStyle
      placeholder={placeholder}
      valueInput={valueInput}
      {...rest}
    >
      {/* <span>Ẩn</span> */}
    </WrapperInputStyle>
  );
};

export default InputForm;
