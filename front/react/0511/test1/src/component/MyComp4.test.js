import {render, screen} from "@testing-library/react";
import MyComp4 from "./MyComp4";

describe("MyComp4 Test1", ()=>{
    test('check textbox what got label content has name', ()=>{
        render(<MyComp4/>);
        const inputEl1 = screen.getByRole("textbox", {name : "name"});
        expect(inputEl1).toBeInTheDocument();
    })

    test('check textbox what get label content has profile', ()=>{
        render(<MyComp4/>);
        const inputEl2 = screen.getByRole("textbox", {selector: "textarea"});
        expect(inputEl2).toBeInTheDocument();
    });

    test('check input type Tom by getbydisplayvalue', ()=>{
        render(<MyComp4/>);
        const inputEl3 = screen.getByDisplayValue("Tom");
        expect(inputEl3).toBeInTheDocument();
    });

    test('find element in my-div by getbytestid', ()=>{
        render(<MyComp4/>);
        const inputEl3 = screen.getByTestId("my-div");
        expect(inputEl3).toBeInTheDocument();
    })

});