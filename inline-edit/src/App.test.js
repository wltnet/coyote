import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import Text from "./components/Text";
import { Wrapper } from "./components/Text/styled";

jest.mock("./components/Input", () => "Input");

describe("<App />", () => {
  it("should match the snapshot when first render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot after static text has been click", () => {
    const wrapper = shallow(<App />);

    wrapper.find(Text).dive().find(Wrapper).simulate("click");
    expect(wrapper).toMatchSnapshot();
  });
});