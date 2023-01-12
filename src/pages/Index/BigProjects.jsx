import React, {useEffect, useState} from 'react';

import projectPlaceholder from '../../static/project-placeholder.png';

import * as SC from './styles';
import Project from "../../components/Project";
import {RoutesPath} from "../../constants/routesPath";
import {fetchApi} from "../../services/fetch";
import Loader from "../../ui/Loader";

const BigProjects = () => {
    const [objects, setObjects] = useState(null);

    useEffect(() => {
        fetchApi('constructions').then((objectsRes) => {
            setObjects(objectsRes);
        })
    }, []);

    return (
        <SC.Section marginBottom={85}>
            <SC.SectionTitle>
                Наши самые большие проекты
            </SC.SectionTitle>
            {!objects && (
                <Loader />
            )}
            {objects && (
                <SC.ProjectsContent>
                    <SC.ProjectsWrapper>
                        {objects.splice(0,4).map((object) => (
                            <SC.ProjectWrapper>
                                <Project object={object} />
                            </SC.ProjectWrapper>
                        ))}
                    </SC.ProjectsWrapper>

                    <SC.ProjectMore to={RoutesPath.objects}>
                        Смотреть еще ->
                    </SC.ProjectMore>
                </SC.ProjectsContent>
            )}
        </SC.Section>
    );
};

export default BigProjects;
