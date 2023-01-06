import React from 'react';

import * as SC from './styles';

const Project = ({
    title,
    description,
    imgUrl,
    alt,
}) => {
    return (
        <SC.Project>
            <SC.PhotoWrapper>
                <img src={imgUrl} alt={alt} />
            </SC.PhotoWrapper>

            <SC.Divider />

            <SC.Title>
                {title}
            </SC.Title>

            <SC.Description>
                {description}
            </SC.Description>
        </SC.Project>
    );
};

export default Project;
