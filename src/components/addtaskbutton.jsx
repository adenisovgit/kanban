import React from "react";
import { useTranslation } from "react-i18next";

const AddTaskButton = (props) => {
  const { t } = useTranslation();
  const { setState } = props;

  return (
    <button type="button" className="button_grey" onClick={setState}>
      <span className="button_grey_text">
        <img className="button_grey_icon" src="/assets/cross_plus.png" alt="" />
        {t("addcard")}
      </span>
    </button>
  );
};

export default AddTaskButton;
