import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import { findByTestAdder } from "../../../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 *
 * @param {object} props
 */
const setup = (props) => {
  return shallow(<Congrats {...props} />);
};

test("congrats", () => {
  const wrapper = shallow(<Congrats />);
  const congratsComponent = findByTestAdder(wrapper, "congrats-component");
  expect(congratsComponent.length).toBe(1);
});

test("render no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAdder(wrapper, "congrats-component");
  expect(component.text()).toBe("");
});

test("render non empty text when the success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAdder(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});
