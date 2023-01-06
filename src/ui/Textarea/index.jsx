import React from 'react';

import './styles';
import * as SC from "./styles";

const Textarea = ({
  label,
  placeholder,
}) => {
  return (
      <SC.Wrapper>
        <SC.Label>
          {label}
        </SC.Label>

        <SC.Textarea placeholder={placeholder} />
      </SC.Wrapper>
  );
};


export default Textarea;
