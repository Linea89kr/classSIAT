import MyComp7 from "./MyComp7";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe('MyComp7 테스트', () => {
    test('check login button is exist', () => {
        render(<MyComp7/>)
    const btnElement = screen.getByRole("button");
    expect(btnElement).toBeInTheDocument();
    })

    const user = userEvent.setup();
    test('check if login button is clicked', () => {
        render(<MyComp7/>)
        const btnElement = screen.getByRole("button");
        userEvent.click(btnElement);
        expect(btnElement).toHaveTextContent("Logout");
    })

    test('check is it work if tab, space, enter is pressed', async () => {
        render(<MyComp7/>)
        const btnElement = screen.getByRole("button");
        await user.tab();
        await user.keyboard(" ");
        await user.keyboard("[enter]");
        await user.keyboard("{Enter}");
        expect(btnElement).toHaveTextContent("Logout");
    })
})