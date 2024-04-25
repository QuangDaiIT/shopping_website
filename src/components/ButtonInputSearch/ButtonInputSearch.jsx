import React from 'react'
// import { Button } from 'antd'
import {
    SearchOutlined
} from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const {
        size,
        placeholder,
        textButton,
        border,
        backgroundColorInput = '#fff',
        backgroundColorButton = 'rgb(13,92,182)',
        colorButton = "#fff"
    } = props;
    console.log("gia tri cua size : ", size);
    return (
        <div style={{ display: "flex" }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                // variant={variant}
                style={{
                    backgroundColor: backgroundColorInput,
                    borderRadius: "0",
                    border: border ? border : "none"
                }}
            />
            <ButtonComponent
                size={size}
                icon={<SearchOutlined color={colorButton} />}
                // variant={variant}
                styleButton={{
                    color: colorButton,
                    backgroundColor: backgroundColorButton,
                    borderRadius: "0",
                    border: border ? border : "none"
                }}
                styleTextButton={{ color: colorButton }}
                textButton={textButton}
            />
        </div>
    )
}

export default ButtonInputSearch;
