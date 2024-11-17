import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import React from "react";
import '@testing-library/jest-dom'


test("component should load",()=>{
    render(<Contact/>)
    const comp= screen.getAllByRole('textbox');
    console.log(comp.length);
    expect(comp.length).toBe(2);
})