import React, {useState} from 'react';

import * as SC from './styles';
import Modal from "../../ui/Modal";
import Input from "../../ui/Input";
import UserIcon from "../../ui/Icons/User";
import EmailIcon from "../../ui/Icons/Email";
import TubeIcon from "../../ui/Icons/Tube";
import Textarea from "../../ui/Textarea";
import TelephoneInput from "../../ui/TelephoneInput";
import CheckBox from "../../ui/Checkbox";
import Button from "../../ui/Button";
import { fetchApi } from "../../services/fetch";

const RespondModal = ({
  onClose,
}) => {
  const [formData, setFormData] = useState({
      'full_name': '',
      'contact_email': '',
      'contact_number': '',
      'text': '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    fetchApi('offer_requests', {
      method: 'POST',
      body: formData,
    }).then(() => {
      setIsLoading(false);
      onClose();
    })
  };

  return (
      <Modal onClose={onClose}>
        <SC.Title>
          Отправить заявку
        </SC.Title>

        <SC.Form onSubmit={handleFormSubmit}>
          <SC.InputWrapper>
            <Input
                label="Введите имя"
                icon={UserIcon}
                placeholder="Иванов Иван Иванович"
                name="contact_email"
                onChange={handleFormDataChange}
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <Input
                type="email"
                label="Введите почту"
                icon={EmailIcon}
                placeholder="example_123@mail.ru"
                name="full_name"
                onChange={handleFormDataChange}
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <TelephoneInput
                label="Введите номер телефона"
                icon={TubeIcon}
                placeholder="+79507417474"
                name="contact_number"
                onChange={handleFormDataChange}
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <Textarea
                label="Описание вашего обращения"
                placeholder="Сообщение"
                name="text"
                onChange={handleFormDataChange}
            />
          </SC.InputWrapper>

          <SC.CheckBoxWrapper>
            <SC.CheckBoxLabel>
              <CheckBox checked={isChecked} onChange={handleCheckboxChange} />
              <SC.CheckBoxText>
                Согласен(согласна) на обработку персональных данных в соответствии с <SC.Political href="#">Политикой конфиденциальности</SC.Political>
              </SC.CheckBoxText>
            </SC.CheckBoxLabel>
          </SC.CheckBoxWrapper>

          <SC.SubmitButtonWrapper>
            <Button type="submit" disabled={!isChecked || isLoading}>
              {isLoading ? 'Загрузка...' : 'Отправить'}
            </Button>
          </SC.SubmitButtonWrapper>
        </SC.Form>
      </Modal>
  );
};

export default RespondModal;
