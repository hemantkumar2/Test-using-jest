import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

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
  return shallow(<App {...props} />);
};
/**
 *
 * @param {shallowWrapper} wrapper
 * @param {string} val - value of data-test attribute for test.
 * @returns {ShallowWrapper}
 */
const findByTestAdder = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

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

test("Check for Increment Button", () => {
  const wrapper = setup();
  const incrementCounter = findByTestAdder(wrapper, "increment-counter");
  expect(incrementCounter.length).toBe(1);
});

test("Counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.props().count;
  expect(initialCounterState).toBe(0);
});
