import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { INPUT_STATUS } from "../../util/inputStatus";

const Icon = ({ status }) => {
  let icon;
  let spin = false;
  switch (status) {
    case INPUT_STATUS.LOADING:
      icon = faSpinner;
      spin = true;
      break;
    case INPUT_STATUS.SUCCESS:
      icon = faCheck;
      break;
    case INPUT_STATUS.ERROR:
      icon = faTimes;
      break;
    case INPUT_STATUS.SAVED:
    default:
      icon = null;
  }

  return icon ? <FontAwesomeIcon icon={icon} spin={spin} /> : null;
}
export default Icon;
