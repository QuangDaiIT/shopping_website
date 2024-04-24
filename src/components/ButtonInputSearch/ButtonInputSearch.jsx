import React from 'react'
import { Button, Input } from 'antd'
import {
    SearchOutlined
} from '@ant-design/icons';

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
    return (
        <div style={{ display: "flex" }}>
            <Input
                size={size}
                placeholder={placeholder}
                // variant={variant}
                style={{
                    backgroundColor: backgroundColorInput,
                    borderRadius: "0",
                    border: border ? border : "none"
                }} />
            <Button
                size={size}
                icon={<SearchOutlined color={colorButton} />}
                // variant={variant}
                style={{
                    color: colorButton,
                    backgroundColor: backgroundColorButton,
                    borderRadius: "0",
                    border: border ? border : "none"
                }}>
                <span style={{ color: colorButton }}>
                    {textButton}
                </span>
            </Button>
        </div>
    )
}

export default ButtonInputSearch;
