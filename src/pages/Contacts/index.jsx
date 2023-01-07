import React, {useState} from 'react';

import MainLayout from "../../ui/Layouts/MainLayout";

import contacts from '../../static/contacts.png';
import map from '../../static/map.png';

import * as SC from './styles';
import ContactUsModal from "../../components/ContactUsModal";

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

    return (
        <MainLayout>
          {isModalOpen && (
              <ContactUsModal onClose={handleCloseModal}/>
          )}
            <SC.Title>
              Контакты
            </SC.Title>

          <SC.Info>
            <SC.LeftBlock>
              <SC.ContactPhotoWrapper>
                <img src={contacts} alt="contacts photo" />
              </SC.ContactPhotoWrapper>

              <SC.Text>
                <SC.TextInfo marginBottom={16}>
                  ООО «НОВАЯ ЭНЕРГИЯ»<br />
                  ООО «Э-САС»
                </SC.TextInfo>
                <SC.TextInfo marginBottom={24}>
                  Челябинск, ул Линейная, д. 86
                </SC.TextInfo>

                <SC.Link
                    href="https://e-sas.ru"
                    target="_blank"
                    marginBottom={24}
                >
                  e-sas.ru
                </SC.Link>

                <SC.TextInfo marginBottom={24}>
                  +7 (351) 217-23-77
                </SC.TextInfo>

                <SC.Divider />

                <SC.TextInfo marginBottom={24}>
                  Генеральный директор
                </SC.TextInfo>
                <SC.TextInfo fontWeight={500} marginBottom={24}>
                  Самков Александр Сергеевич
                </SC.TextInfo>

                <SC.ContactUsButton onClick={() => setIsModalOpen(true)}>
                  Связаться с нами
                </SC.ContactUsButton>

              </SC.Text>
            </SC.LeftBlock>
            <SC.RightBlock>
              <img src={map} alt="map" />
            </SC.RightBlock>
          </SC.Info>
        </MainLayout>
    );
};

export default Contacts;
