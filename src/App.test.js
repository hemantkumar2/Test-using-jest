import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Render without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[href='http://nirmalkar.com']");
  expect(appComponent.length).toBe(1);
});

test("Check for data-test attribute", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='some-component']");
  expect(appComponent.length).toBe(1);
});
