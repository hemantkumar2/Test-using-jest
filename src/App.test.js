import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAdder } from "../test/testUtils";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the app component.
 * @function setup
 * @param {object} props
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};
/**
 *
 * @param {shallowWrapper} wrapper
 * @param {string} val - value of data-test attribute for test.
 * @returns {ShallowWrapper}
 */

test("Render without error", () => {
  const wrapper = setup();
  const link = wrapper.find("[href='http://nirmalkar.com']");
  expect(link.length).toBe(1);
});

test("Check for some component attribute", () => {
  const wrapper = setup();
  const appComponent = findByTestAdder(wrapper, "some-component");
  expect(appComponent.length).toBe(1);
});

test("Check for Increment button", () => {
  const wrapper = setup();
  const incrementButton = findByTestAdder(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});

test("Check for counter display", () => {
  const wrapper = setup();
  const incrementCounter = findByTestAdder(wrapper, "counter-display");
  expect(incrementCounter.length).toBe(1);
});

test("Counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("count");
  expect(initialCounterState).toBe(0);
});

test("Clicking button increment the counter value", () => {
  const count = 8;
  const wrapper = setup(null, { count });
  const button = findByTestAdder(wrapper, "increment-button");
  button.simulate("click");
  const counterDisplay = findByTestAdder(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(count + 1);
});

test("Clicking button to decrement counter value", () => {
  const count = 2;
  const wrapper = setup(null, { count });
  const button = findByTestAdder(wrapper, "decrement-button");
  button.simulate("click");
  const counterDisplay = findByTestAdder(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(count - 1);
});
