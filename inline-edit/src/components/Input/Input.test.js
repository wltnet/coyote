import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

jest.mock("./styled", () => ({
  Label: "Label",
  InputField: "InputField",
}));

const props = {
  value: "Hello World",
  inputField: {
    label: "helloInput",
    name: "helloInput",
  },
  handleBlur: jest.fn(),
  handleChange: jest.fn(),
  handleKeyDown: jest.fn(),
}

describe("<Input />", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleBlur when on blur", () => {
    const wrapper = shallow(<Input {...props} />);
    wrapper.find("InputField").simulate("blur");
    expect(props.handleBlur).toHaveBeenCalled();
  });

  it("should call handleChange when input text has changed", () => {
    const wrapper = shallow(<Input {...props} />);
    wrapper.find("InputField").simulate("change");
    expect(props.handleChange).toHaveBeenCalled();
  });

  it("should call handleKeyDown when key has press", () => {
    const wrapper = shallow(<Input {...props} />);
    wrapper.find("InputField").simulate("keyDown", {key: 'Enter'});
    expect(props.handleKeyDown).toHaveBeenCalled();
  });

});