import React from "react";
import { Button } from "antd";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textButton,
  ...rest
}) => {
  return (
    <Button
      className="abc"
      size={size}
      // icon={<SearchOutlined color={colorButton} />}
      // variant={variant}
      style={styleButton}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
