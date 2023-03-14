import './App.css';
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import ButtonBoxC from "./components/ButtonBoxC";
import CalcProvider from "./context/CalcContext";

const btnCvalues = [
    ["/", "x", "-", "+"]
]

const btnValues = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, ".", "C"]
];

const btnEvenly = [
    ["="]
]

function App() {
    return (
        <CalcProvider>
            <Wrapper>
                <Screen/>
            </Wrapper>
            <Wrapper>
                <ButtonBoxC>
                    {btnCvalues.flat().map((btn, i) => (
                        <Button value={btn}
                                key={i}
                        />
                    ))}
                </ButtonBoxC>
            </Wrapper>
            <Wrapper>
                <ButtonBox>
                    {btnValues.flat().map((btn, i) => (
                        <Button
                            value={btn}
                            key={i}
                        />
                    ))}
                </ButtonBox>
            </Wrapper>
            <Wrapper>
                {btnEvenly.flat().map((btn, i) => (
                    <Button
                        value={btn}
                        key={i}
                    />
                ))}
            </Wrapper>
        </CalcProvider>
    );
}

export default App;
