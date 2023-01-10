import React, {useState} from 'react';

import * as SC from './styles';
import Modal from "../../ui/Modal";
import Input from "../../ui/Input";
import UserIcon from "../../ui/Icons/User";
import CompanyIcon from "../../ui/Icons/Company";
import INNIcon from "../../ui/Icons/INN";
import EmailIcon from "../../ui/Icons/Email";
import TubeIcon from "../../ui/Icons/Tube";
import Textarea from "../../ui/Textarea";
import TelephoneInput from "../../ui/TelephoneInput";
import CheckBox from "../../ui/Checkbox";
import Button from "../../ui/Button";
import { fetchApi } from "../../services/fetch";

const ContactUsModal = ({
  onClose,
}) => {
  const [formData, setFormData] = useState({
    'full_name': '',
    'company_name': '',
    'company_tin': '',
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
    console.log(event)
    setIsChecked(event.target.checked)
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    fetchApi('order_requests', {
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
                name="full_name"
                onChange={handleFormDataChange}
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <Input
                label="Введите название компании"
                icon={CompanyIcon}
                placeholder="ООО “Пример Компании”"
                name="company_name"
                onChange={handleFormDataChange}
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <Input
                label="Введите ИНН компании"
                icon={INNIcon}
                type="number"
                placeholder="123 456 789"
                name="company_tin"
                onChange={handleFormDataChange}
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <Input
                label="Введите почту"
                icon={EmailIcon}
                type="email"
                placeholder="example_123@mail.ru"
                name="contact_email"
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
            <Button disabled={!isChecked || isLoading}>
              {isLoading ? 'Загрузка...' : 'Отправить'}
            </Button>
          </SC.SubmitButtonWrapper>
        </SC.Form>
      </Modal>
  );
};

export default ContactUsModal;
