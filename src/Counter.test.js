import { render } from "@testing-library/react";
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
});
