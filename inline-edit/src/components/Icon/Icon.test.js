import React from "react";
import { shallow } from "enzyme";
import Icon from "./Icon";
import { INPUT_STATUS } from "../../util/inputStatus";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: "LaFontAwesomeIconbel",
}));

jest.mock("@fortawesome/free-solid-svg-icons", () => ({
  faSpinner: "faSpinner",
  faCheck: "faCheck",
  faTimes: "faTimes",
}));

describe("<Icon />", () => {
  it("should match the snapshot with status undefined", () => {
    const props = {
      status: undefined
    }
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with status Loading", () => {
    const props = {
      status: INPUT_STATUS.LOADING,
    }
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with status success", () => {
    const props = {
      status: INPUT_STATUS.SUCCESS,
    }
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with status error", () => {
    const props = {
      status: INPUT_STATUS.ERROR,
    }
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
