import {render, screen} from "@testing-library/react";
import MyComp3 from "./MyComp3";


describe("MyComp3 Test 1", ()=>{
    test( 'if second heading elements is not in the document', ()=>{
        render(<MyComp3/>);
        const h2El = screen.getByRole("heading", {level: 2});
        expect(h2El).toBeInTheDocument();
    })
})