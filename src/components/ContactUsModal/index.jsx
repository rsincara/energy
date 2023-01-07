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

const ContactUsModal = ({
  onClose,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    console.log(event)
    setIsChecked(event.target.checked)
  };

  return (
      <Modal onClose={onClose}>
        <SC.Title>
          Отправить заявку
        </SC.Title>

        <SC.Form>
          <SC.InputWrapper>
            <Input
                label="Введите имя"
                icon={UserIcon}
                placeholder="Иванов Иван Иванович"
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <Input
                label="Введите название компании"
                icon={CompanyIcon}
                placeholder="ООО “Пример Компании”"
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <Input
                label="Введите ИНН компании"
                icon={INNIcon}
                placeholder="123 456 789"
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <Input
                label="Введите почту"
                icon={EmailIcon}
                placeholder="example_123@mail.ru"
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <TelephoneInput
                label="Введите номер телефона"
                icon={TubeIcon}
                placeholder="+79507417474"
            />
          </SC.InputWrapper>

          <SC.InputWrapper>
            <Textarea
                label="Описание вашего обращения"
                placeholder="Сообщение"
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
            <Button disabled={!isChecked}>
              Отправить
            </Button>
          </SC.SubmitButtonWrapper>
        </SC.Form>
      </Modal>
  );
};

export default ContactUsModal;
