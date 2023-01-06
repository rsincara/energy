import React from 'react';
import {createPortal} from "react-dom";

const Portal = ({
  children,
  root = document.getElementById('root'),
}) => {
  return createPortal(children, root);
};

export default Portal;
