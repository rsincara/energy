import React, {useState} from 'react';

import * as SC from './styles';
import Button from "../../ui/Button";
import RespondModal from "../RespondModal";

const Vacancy = () => {

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
              Монтажник
            </SC.Title>

            <SC.Salary>
              120 тысяч рублей
            </SC.Salary>

            <SC.Offer>
              <SC.SectionTitle>
                Что мы предлагаем:
              </SC.SectionTitle>
              <SC.FlexWrapper>
                <div>
                  <SC.List>
                    <SC.ListItem>
                      Предложение 1
                    </SC.ListItem>
                    <SC.ListItem>
                      Предложение 2
                    </SC.ListItem>
                    <SC.ListItem>
                      Предложение 3
                    </SC.ListItem>
                  </SC.List>
                </div>
                <div>
                  <SC.List>
                    <SC.ListItem>
                      Предложение 4
                    </SC.ListItem>
                    <SC.ListItem>
                      Предложение 5
                    </SC.ListItem>
                    <SC.ListItem>
                      Предложение 6
                    </SC.ListItem>
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
                    <SC.ListItem>
                      Требование 1
                    </SC.ListItem>
                    <SC.ListItem>
                      Требование 2
                    </SC.ListItem>
                    <SC.ListItem>
                      Требование 3
                    </SC.ListItem>
                  </SC.List>
                </div>
                <div>
                  <SC.List>
                    <SC.ListItem>
                      Требование 4
                    </SC.ListItem>
                    <SC.ListItem>
                      Требование 5
                    </SC.ListItem>
                    <SC.ListItem>
                      Требование 6
                    </SC.ListItem>
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
