import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';


const Modal = (props) => {
  const { t } = useTranslation();
  const { closeModal, card, updateTask } = props;
  const { register, handleSubmit } = useForm();
  const [isChangingTitle, setChangingTitle] = useState(false);

  const onSubmit = ({ title, body }) => {
    updateTask({ ...card, title, body });
    closeModal();
  };

  const enterChangingTitle = (e) => {
    e.stopPropagation();
    setChangingTitle(true);
  };


  return (
    <>
      <div className="page_mask" />
      <div className="modal">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <button type="button" className="button_cancel_modal" onClick={closeModal}>
            <img className="" src="assets/cross_cancel.png" alt="" />
          </button>

          <textarea
            className={isChangingTitle ? 'modal_title_changing' : 'modal_title'}
            defaultValue={card.title}
            name="title"
            ref={register({ required: true })}
            onClick={enterChangingTitle}
          />

          <textarea
            className="modal_body"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            placeholder={t('entercardtext')}
            defaultValue={card.body}
            name="body"
            ref={register({ required: false })}
          />
          <button className="button_blue" type="submit">
            {t('save')}
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
