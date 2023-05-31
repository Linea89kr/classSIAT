import MyComp5 from "./MyComp5";
import {render} from "@testing-library/react";

describe('MyComp5 Test1', ()=> {
    const usesrs = ['Tom', 'Jerry', 'Mike'];
    test('check ul tag', () => {
        render(<MyComp5 users={users}/>);
        // check ul tags
        const ulEl = screen.getByRole("list");
        expect(ulEl).toBeInTheDocument();
    });

    test('check li tag is in three', () => {
        render(<MyComp5 users={users}/>);
        // check li tags
        const liEl = screen.GetAllByRole("listitem");
        expect(liEl.length).toHaveLength(users.length);
    })

    test('if data is empty, check no data', () => {
        render(<MyComp5 users={[]}/>);
        const liEl = screen.queryByRole("listitem");
        expect(liEl.length).not.ToBeInTheDocument();
        const LiEl2 = screen.QueryAllByRole("listitem");
        expect(liEl2.length).toHaveLength(0);
    })
});