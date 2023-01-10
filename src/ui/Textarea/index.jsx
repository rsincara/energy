import React from 'react';

import './styles';
import * as SC from "./styles";

const Textarea = ({
  label,
  placeholder,
  name,
  onChange,
}) => {
  return (
      <SC.Wrapper>
        <SC.Label>
          {label}
        </SC.Label>

        <SC.Textarea name={name} onChange={onChange} placeholder={placeholder} />
      </SC.Wrapper>
  );
};


export default Textarea;
