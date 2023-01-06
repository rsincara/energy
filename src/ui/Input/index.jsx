import React from 'react';

import * as SC from './styles';

const Input = ({
  label,
  icon: Icon,
  placeholder,
  type = 'text'
}) => {
  return (
      <SC.Wrapper>
        <SC.Label>
          {label}
        </SC.Label>

        <SC.InputWrapper>
          <SC.IconWrapper>
            <Icon color="#000000"/>
          </SC.IconWrapper>
          <SC.Input type={type} placeholder={placeholder}/>
        </SC.InputWrapper>
      </SC.Wrapper>
  );
};

export default Input;
