import React from 'react';

import * as SC from './styles';

const CheckBox = ({
    className,
    checked,
    ...props
}) => {

  return (
      <SC.CheckboxContainer className={className}>
        <SC.HiddenCheckbox checked={checked} {...props} />
        <SC.StyledCheckbox checked={checked}>
          <SC.Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </SC.Icon>
        </SC.StyledCheckbox>
      </SC.CheckboxContainer>
  );
};

export default CheckBox;
