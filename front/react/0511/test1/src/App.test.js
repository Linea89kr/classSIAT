import {render, screen} from '@testing-library/react';
import App from './App';
import MyComp1 from "./component/MyComp1";

describe("MyComp1 Test", () => {

    test("if app will appear", () => {
        // function witch rendered virtually in test
        // test상에서 가상의 랜더링을 할 경우 사용하는 함수
        render(<App/>);
        // 랜더링 내용 내에 React Test라는 컨텐츠를 갖고 있는 앨리먼트를 반환
        const h1El = screen.getByText(/React Test/i);

        // 해당 앨리ㅓㄴ트가 도큐먼트 안에 있는지 확인
        expect(h1El).toBeInTheDocument();
    })

    test('if logo will appear', () => {
        render(<App/>);
        //랜더링 내용 내에 logo라는 alt를 갖고 있는 앨리먼트를 반환
        const logoEl = screen.getByAltText("logo");
        //해당 앨리먼트가 도큐먼트 안에 있는지 확인
        expect(logoEl).toBeInTheDocument();
    })

    test('if type of user does not match, show login button', () => {
        render(<MyComp1 user="Park"></MyComp1>)
        const txtEl = screen.getByText(/Please login/i);
        //위의 엘리먼트가 있는지 확인
        expect(txtEl).toBeInTheDocument();
    })
})