import React from 'react';

import projectPlaceholder from '../../static/project-placeholder.png';

import * as SC from './styles';
import Project from "../../components/Project";
import {RoutesPath} from "../../constants/routesPath";

const projects = [
    {
        title: 'Газпром Арена',
        description: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.',
        url: projectPlaceholder,
    },
    {
        title: 'Газпром Арена',
        description: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.',
        url: projectPlaceholder,
    },
    {
        title: 'Газпром Арена',
        description: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.',
        url: projectPlaceholder,
    },
    {
        title: 'Газпром Арена',
        description: 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.',
        url: projectPlaceholder,
    },
];

const BigProjects = () => {
    return (
        <SC.Section marginBottom={85}>
            <SC.SectionTitle>
                Наши самые большие проекты
            </SC.SectionTitle>

            <SC.ProjectsContent>
                <SC.ProjectsWrapper>
                    {projects.map((project) => (
                        <SC.ProjectWrapper>
                            <Project
                                title={project.title}
                                description={project.description}
                                alt="project"
                                imgUrl={project.url}
                            />
                        </SC.ProjectWrapper>
                    ))}
                </SC.ProjectsWrapper>

                <SC.ProjectMore to={RoutesPath.objects}>
                    Смотреть еще ->
                </SC.ProjectMore>
            </SC.ProjectsContent>
        </SC.Section>
    );
};

export default BigProjects;
