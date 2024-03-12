import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("should render 0 as counter value if no initial value is provided", () => {
    const { getByTestId } = render(<Counter />);
    const initialCount = Number(getByTestId("initial-count").textContent);
    expect(initialCount).toBe(0);
  });

  it("should render 3 as counter value if initial value is 3", () => {
    const { getByTestId } = render(<Counter initialCount={3} />);
    const initialCount = Number(getByTestId("initial-count").textContent);
    expect(initialCount).toBe(3);
  });

  it("should increment the count value by 1 if the 'increment' button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    let countValue = Number(getByTestId("initial-count").textContent);
    const increment = getByRole("button", { name: "+" });
    expect(countValue).toBe(0);
    fireEvent.click(increment);
    countValue = Number(getByTestId("initial-count").textContent);
    expect(countValue).toBe(1);
  });

  it("should decrement the count value by 1 if the 'decrement' button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter />);
    let countValue = Number(getByTestId("initial-count").textContent);
    const decrement = getByRole("button", { name: "-" });
    expect(countValue).toBe(0);
    fireEvent.click(decrement);
    countValue = Number(getByTestId("initial-count").textContent);
    expect(countValue).toBe(-1);
  });

  it("should change the count sign to positive if the count sign is negative if 'changeSign' button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
    let countValue = Number(getByTestId("initial-count").textContent);
    const changeSign = getByRole("button", { name: "+/-" });
    expect(countValue).toBe(1);
    fireEvent.click(changeSign);
    countValue = Number(getByTestId("initial-count").textContent);
    expect(countValue).toBe(-1);
  });

  it("should change the count sign to negative if the count sign is positive if 'changeSign' button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={-1} />);
    let countValue = Number(getByTestId("initial-count").textContent);
    const changeSign = getByRole("button", { name: "+/-" });
    expect(countValue).toBe(-1);
    fireEvent.click(changeSign);
    countValue = Number(getByTestId("initial-count").textContent);
    expect(countValue).toBe(1);
  });

  it("should reset the counter value if the reset button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
    let countValue = Number(getByTestId("initial-count").textContent);
    const changeSign = getByRole("button", { name: "reset" });
    expect(countValue).toBe(1);
    fireEvent.click(changeSign);
    countValue = Number(getByTestId("initial-count").textContent);
    expect(countValue).toBe(0);
  });
});
