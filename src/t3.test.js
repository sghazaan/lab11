import { render, screen } from "@testing-library/react";
import T3 from "./components/t3";
test("Task 3 ",()=>{
    render(<T3/>)
    const linkElement = screen.getByTestId("Task");
    expect(linkElement).toBeInTheDocument();

})
test("Task 4 ",()=>{
    render(<T3/>)
    const linkElement = screen.getByTestId("Task");
    expect(linkElement).toHaveTextContent("13579");

})