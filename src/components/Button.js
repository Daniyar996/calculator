import React, {useContext} from "react";
import {CalcContext} from "../context/CalcContext";

const getStyleName = btn => {
    const className = {
        '=': "btnEquals"
    }
    return className[btn]
}


const Button = ({value}) => {
    const {calc, setCalc} = useContext(CalcContext);

//User click .
    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }

    //User click C
    const resetClick = () => {
        setCalc({sign: '', num: 0, res: 0})
    }
//User click number
    const handleClickButton = () => {
        const numberString = value.toString()
        let numberValue;

        if (numberString === '0' && calc.num === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(calc.num + numberString)
        }
        setCalc({
            ...calc,
            num: numberValue
        })
    }
    //User click operation
    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }
    //User click equals
    const equalsClick = () => {
        if (calc.res && calc.num) {
            const math = (a, b, sign) => {
                const results = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    'x': (a, b) => a * b,
                    '/': (a, b) => a / b,
                }
                return results[sign](a, b)
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }


    }


    const handleBtnClick = () => {
        const results = {
            ".": commaClick,
            'C': resetClick,
            "/": signClick,
            "x": signClick,
            "-": signClick,
            "+": signClick,
            '=': equalsClick
        }

        if (results[value]) {
            return results[value]()
        } else {
            return handleClickButton()
        }
    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )

}

export default Button;
