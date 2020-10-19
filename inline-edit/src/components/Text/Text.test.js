import React from "react";
import { shallow } from "enzyme";
import Text from "./Text";
import { INPUT_STATUS } from "../../util/inputStatus";

jest.mock("./styled", () => ({
  Wrapper: "Wrapper",
  InputText: "InputText",
  Error: "Error",
}));

describe("<Text />", () => {
  it("should match the snapshot when first render", () => {
    const props = {
      text: "Hello World",
      handleClick: jest.fn(),
      status: undefined,
    }
    const wrapper = shallow(<Text {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot when has error status", () => {
    const props = {
      text: "Hello World",
      handleClick: jest.fn(),
      status: INPUT_STATUS.ERROR,
    }
    const wrapper = shallow(<Text {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger handleclick function when click on the text", () => {
    const props = {
      text: "Hello World",
      handleClick: jest.fn(),
      status: undefined,
    }
    const wrapper = shallow(<Text {...props} />);
    wrapper.find("Wrapper").simulate("click");
    expect(props.handleClick).toHaveBeenCalled();
  });
});
