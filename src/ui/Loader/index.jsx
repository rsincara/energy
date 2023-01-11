import React from 'react';

import * as SC from './styles';

const Loader = () => {
  return (
      <SC.SpinnerWrapper>
        <SC.Spinner/>
      </SC.SpinnerWrapper>
  );
};

export default Loader;
