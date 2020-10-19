import React from "react";
import Icon from "../Icon";
import { INPUT_STATUS } from "../../util/inputStatus";
import { Error, Wrapper, InputText } from "./styled";

const Text = ({ text, handleClick, status }) => (
<>
  <Wrapper onClick={handleClick}>
    <InputText>{text}</InputText>
    <Icon status={status} />
  </Wrapper>
  {status === INPUT_STATUS.ERROR && <Error>Oops! Something has gone terribly wrong!</Error> }
</>
);
export default Text;
