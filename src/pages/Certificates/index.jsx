import React, {useEffect, useState} from 'react';

import MainLayout from "../../ui/Layouts/MainLayout";

import * as SC from './styles';
import Certificate from "../../components/Certificate";
import {fetchApi} from "../../services/fetch";
import Loader from "../../ui/Loader";

const Certificates = () => {
    const [certificates, setCertificates] = useState(null);

    useEffect(() => {
        fetchApi('certificates').then((certificatesRes) => {
          setCertificates(certificatesRes);
        })
    }, []);

    return (
        <MainLayout>
            <SC.Title>
                Сертификаты
            </SC.Title>
            {!certificates && (
                <Loader />
            )}
            {certificates && (
                <SC.Certificates>
                    {certificates.map((certificate) => (
                        <Certificate
                            imgUrl={certificate.photo_url}
                            description={certificate.name}
                            alt={certificate.name}
                        />
                    ))}
                </SC.Certificates>
            )}
        </MainLayout>
    );
};

export default Certificates;
