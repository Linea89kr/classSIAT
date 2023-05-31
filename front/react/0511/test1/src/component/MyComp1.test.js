import MyComp1 from "./MyComp1";
import {render, screen} from "@testing-library/react";

describe("MyComp1 Test", () => {
    test('if user is null, show login button', () => {
        // 가상의 화면에 해당 컴포넌트를 랜더링 시킨다.
        render(<MyComp1/>);
        // 로그인 문구를 지닌 컴포넌트를 가져온다.
        const txtEL = screen.getByText(/Please login/i);
        // 버튼 문구를 지닌 앨리먼트를 가져온다.
        const btnEL = screen.getByRole("button")
        // 가져온 앨리먼트가 화면에 있는지 확인한다.
        expect(txtEL).toBeInTheDocument();
        // 가져온 앨리먼트가 화면에 있는지 확인한다.
        expect(btnEL).toBeInTheDocument();
        // 가져온 앨리먼트에 로그인 문구가 있는지 확인한다.
        expect(btnEL).toHaveTextContent("Login");
    })

    test('if user is not null, show welcome message', () => {
      render(<MyComp1 user={{name: 'Kim'}}/>);
      // 'kim님 어서오세요'라는 텍스트를 갖고 있는 태그를 가져온다.
      const txtEL = screen.getByText(/Welcome Kim!/i);
      // 위의 앨리먼트가 존재하는지 확인.
      expect(txtEL).toBeInTheDocument();
    })
})