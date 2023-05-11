import {render, screen} from "@testing-library/react";
import MyComp4 from "./MyComp4";

describe("MyComp4 Test1", ()=>{
    test('check textbox what got label content has name', ()=>{
        render(<MyComp4/>);
        const inputEl1 = screen.getByRole("textbox", {name : "name"});
        expect(inputEl1).toBeInTheDocument();
    })

});