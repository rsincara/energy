import React, {useState} from 'react';

import * as SC from './styles';
import Button from "../../ui/Button";
import RespondModal from "../RespondModal";

const Vacancy = ({ vacancy }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
      <SC.VacancyWrapper>
        {isModalOpen && (
            <RespondModal onClose={handleCloseModal} />
        )}
        <SC.Vacancy>
          <SC.Head />
          <SC.Employee />
          <SC.BodyWrapper/>
          <SC.Info>
            <SC.Title>
              {vacancy.title}
            </SC.Title>

            <SC.Salary>
              {vacancy.salary}
            </SC.Salary>

            <SC.Offer>
              <SC.SectionTitle>
                Что мы предлагаем:
              </SC.SectionTitle>
              <SC.FlexWrapper>
                <div>
                  <SC.List>
                    {vacancy.offer.slice(0,3).map((offerItem) => (
                        <SC.ListItem>
                          {offerItem}
                        </SC.ListItem>
                    ))}
                  </SC.List>
                </div>
                <div>
                  <SC.List>
                    {vacancy.offer.slice(3,6).map((offerItem) => (
                        <SC.ListItem>
                          {offerItem}
                        </SC.ListItem>
                    ))}
                  </SC.List>
                </div>
              </SC.FlexWrapper>
            </SC.Offer>

            <SC.Requirements>
              <SC.SectionTitle>
                Что мы просим:
              </SC.SectionTitle>
              <SC.FlexWrapper>
                <div>
                  <SC.List>
                    {vacancy.requirements.slice(0,3).map((reqItem) => (
                        <SC.ListItem>
                          {reqItem}
                        </SC.ListItem>
                    ))}
                  </SC.List>
                </div>
                <div>
                  <SC.List>
                    {vacancy.requirements.slice(3,6).map((reqItem) => (
                        <SC.ListItem>
                          {reqItem}
                        </SC.ListItem>
                    ))}
                  </SC.List>
                </div>
              </SC.FlexWrapper>
            </SC.Requirements>
          </SC.Info>
        </SC.Vacancy>

        <Button onClick={() => setIsModalOpen(true)}>
          Откликнуться
        </Button>
      </SC.VacancyWrapper>

  );
};

export default Vacancy;
