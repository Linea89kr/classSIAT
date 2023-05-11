import MyComp2 from "./MyComp2";
import {render, screen} from "@testing-library/react";

describe("MyComp2 Test", () => {
    test("if user is higher then 19, show login button", () => {
        render(<MyComp2 age={10}/>);
        const btnEl = screen.getByRole("button");
        const txtEl = screen.getByRole("heading");

        expect(btnEl).toBeInTheDocument();
        expect(txtEl).toBeInTheDocument();
        // btnEl이 비활성화 되어있는지 확인
        expect(btnEl).toBeDisabled();
        // txtEL의 스타일이 color: red인지 확인
        expect(txtEl).toHaveStyle({color: "red"});
    })
})
// 버튼이 사용 가능이고, 컬러가 blue인지 확인
describe("MycComp2 Test2", () => {
    test("if user is higher then 19, show login button", () => {
        render(<MyComp2 age={20}/>);
        const btnEl = screen.getByRole("button");
        const txtEl = screen.getByRole("heading");

        expect(btnEl).toBeInTheDocument();
        expect(txtEl).toBeInTheDocument();
        expect(btnEl).toBeEnabled();
        expect(txtEl).toHaveStyle({
            color: "blue"
        })
    })
})