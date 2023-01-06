import React from 'react';

import * as SC from './styles';

const Certificate = ({
    imgUrl,
    alt,
    description,
}) => {
    return (
        <SC.Certificate>
              <SC.ImgWrapper>
                <img src={imgUrl} alt={alt} />
              </SC.ImgWrapper>
            <SC.Description>
                {description}
            </SC.Description>
        </SC.Certificate>
    );
};

export default Certificate;
