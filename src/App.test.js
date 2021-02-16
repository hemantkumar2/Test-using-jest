import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Render without error", () => {
  const wrapper = shallow(<App />);
  const link = wrapper.find("[href='http://nirmalkar.com']");
  expect(link.length).toBe(1);
});

test("Check for some component attribute", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='some-component']");
  expect(appComponent.length).toBe(1);
});

test("Check for Increment button", () => {
  const wrapper = shallow(<App />);
  const incrementButton = wrapper.find("[data-test='increment-button']");
  expect(incrementButton.length).toBe(1);
});

test("Check for Increment Button", () => {
  const wrapper = shallow(<App />);
  const incrementCounter = wrapper.find("[data-test='increment-counter']");
  expect(incrementCounter.length).toBe(1);
});
