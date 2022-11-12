import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(0);
  });

  it("count should increment by 1 if incremenet button is clicked", () => {
    render(<Counter initialCount={0} />);
    let countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    let countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("count should decrement by 1 if incremenet button is clicked", () => {
    render(<Counter initialCount={0} />);
    fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
    let countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(-1);
  });

  it("count should reset to 0 if restart button is clicked", () => {
    render(<Counter initialCount={50} />);
    fireEvent.click(screen.getByRole("button", { name: "Restart" }));
    let countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count invert signs if switch signs button is clicked", () => {
    render(<Counter initialCount={50} />);
    let countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(50);
    fireEvent.click(screen.getByRole("button", { name: "Switch signs" }));
    let countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(-50);
  });
});
