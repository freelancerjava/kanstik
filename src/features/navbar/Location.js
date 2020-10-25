import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import InputText from '../elements/InputText';
// import PropTypes from 'prop-types';

export default function Location() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="location">
        <a href="#" onClick={toggle}>Tashkent</a>
        <div className="regions">

          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Закажите звонок</ModalHeader>
            <ModalBody>
              <div>
                Услуга «Заказать звонок» - совсершено бесплатная!
                Наш менеджер свяжется с Вами в течение 1 часа по указанному номеру (по будням с 9 до 18).
              </div>
              <InputText placeholder="Имя:" className="mt-3" />
              <InputText placeholder="Телефон*:" className="mt-3" />
              <div>* - обязательные поля</div>
              <div>
                Нажимая на кнопку "отправить" я даю
                свое согласие на обработку моих персональных данных -
                <br />Согласие на обработку ПД.pdf
              </div>
            </ModalBody>
            <ModalFooter>
              <a href="#" onClick={toggle} className="bt bt-primary">Send</a>
            </ModalFooter>
          </Modal>

        </div>
      </div>
    </>
  );
};

Location.propTypes = {};
Location.defaultProps = {};
