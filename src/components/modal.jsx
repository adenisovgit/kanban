import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';


const Modal = (props) => {
  const { t } = useTranslation();
  const { closeModal } = props;
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ title, body }) => {
    // handleAddCard(text);
    // setState();
  };

  return (
    <>
      <div className="page_mask" />
      <div className="modal">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <button type="button" className="button_grey button_cancel_modal" onClick={closeModal}>
            <img className="button_grey_icon" src="assets/cross_cancel.png" alt="" />
          </button>

          <textarea
            className="modal_title"
            placeholder={t('entercardtext')}
            name="title"
            ref={register({ required: true })}
          />

          <textarea
            className="modal_body"
            placeholder={t('entercardtext')}
            name="body"
            ref={register({ required: true })}
          />
          <button className="button_blue" type="submit">
            {t('addcardsubmit')}
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
