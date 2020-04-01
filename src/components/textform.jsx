/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';


const TextForm = (props) => {
  const { handleAddCard, setState } = props;
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ text }) => {
    handleAddCard(text);
    reset();
    setState();
  };

  const handleCancel = () => {
    reset();
    setState();
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <textarea
        autoFocus
        className="form_textbox"
        placeholder={t('entercardtext')}
        name="text"
        ref={register({ required: true })}
      />
      <button className="button_blue" type="submit">
        {t('addcardsubmit')}
      </button>
      <button type="button" className="button_grey button_cancel" onClick={handleCancel}>
        <span className="button_grey_text">
          <img className="button_grey_icon" src="assets/cross_cancel.png" alt="" />
          {t('cancel')}
        </span>
      </button>
    </form>
  );
};

export default TextForm;
