/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

const TextForm = (props) => {
  const { handleAddCard, setState } = props;
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ text }) => {
    console.log('!!!!!!!!onSubmit\n', text);
    handleAddCard(text);
    reset();
    setState();
  };

  const handleCancel = () => {
    reset();
    setState();
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit, console.log)}>
      <textarea
        autoFocus
        className="form_textbox"
        placeholder={t('entercardtext')}
        name="text"
        ref={register({ required: true })}
        onKeyDown={(e) => {
          const { keyCode } = e;
          if (keyCode === 13) {
            console.log('!!!!!!!!keyCode\n', keyCode);

            handleSubmit(onSubmit, console.log)();
          }
          if (keyCode === 27) handleCancel();
        }}
      />
      <button className="button_blue" type="submit">
        {t('addcardsubmit')}
      </button>
      <button
        type="button"
        className="button_grey button_cancel"
        onClick={handleCancel}
      >
        <span className="button_grey_text">
          <img
            className="button_grey_icon"
            src="/assets/cross_cancel.png"
            alt=""
          />
          {t('cancel')}
        </span>
      </button>
    </form>
  );
};

export default TextForm;
