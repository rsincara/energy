import React from 'react';

import * as SC from './styles';
import {RoutesPath} from "../../constants/routesPath";

const Project = ({ object }) => {
    return (
        <SC.Project to={RoutesPath.object.replace(':id', object.id)}>
            <SC.PhotoWrapper>
                <img src={object['image_urls'][0]} alt={object.name} />
            </SC.PhotoWrapper>

            <SC.Divider />

            <SC.Title>
                {object.name}
            </SC.Title>

            <SC.Description>
                {object.description}
            </SC.Description>
        </SC.Project>
    );
};

export default Project;
