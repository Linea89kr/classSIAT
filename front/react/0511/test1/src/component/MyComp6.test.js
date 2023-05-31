import MyComp6 from "./MyComp6";

describe('MyComp6 테스트', () => {
    const users = ["Tom", "Jane", "Mark"];
    test('check title is appear soon', async () => {
        render(<MyComp6 users={users}/>);
        screen.debug();
        const ulElement = await screen.findByRole('heading', {
            name: "User list"
        }, {timeout: 2000});
        screen.debug();
        expect(ulElement).toBeInTheDocument();
    });
});