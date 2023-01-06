import React from 'react';

import MainLayout from "../../ui/Layouts/MainLayout";

import cerificatePlaceholder from '../../static/certificate.png';

import * as SC from './styles';
import Certificate from "../../components/Certificate";

const certificates = [
    {
        url: cerificatePlaceholder,
        alt: 'certificate',
        description: 'За то-то и то-то'
    },
    {
        url: cerificatePlaceholder,
        alt: 'certificate',
        description: 'За сё-то и чё-то'
    },
    {
        url: cerificatePlaceholder,
        alt: 'certificate',
        description: 'За сё-то и чё-то'
    },
    {
        url: cerificatePlaceholder,
        alt: 'certificate',
        description: 'За сё-то и чё-то'
    },
];

const Certificates = () => {
    return (
        <MainLayout>
            <SC.Title>
                Сертификаты
            </SC.Title>

            <SC.Certificates>
                {certificates.map((certificate) => (
                    <Certificate
                        imgUrl={certificate.url}
                        description={certificate.description}
                        alt={certificate.alt}
                    />
                ))}
            </SC.Certificates>
        </MainLayout>
    );
};

export default Certificates;
