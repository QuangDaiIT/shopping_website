import React from 'react'
import { Button } from 'antd'

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, ...rest }) => {
    console.log("size : ", size, "\n styleButton : ", styleButton, "\n StyleTextButton : ", styleTextButton);
    console.log("\n texButton : ", textButton, " \n rest : ", rest)
    return (
        <Button
            size={size}
            // icon={<SearchOutlined color={colorButton} />}
            // variant={variant}
            style={styleButton}>
            <span style={styleTextButton}>
                {textButton}
            </span>
        </Button>
    )
}

export default ButtonComponent