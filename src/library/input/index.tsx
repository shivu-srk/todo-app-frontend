import React, { useState } from "react";
import { IInputDetails } from "./types";
import * as Styles from "./styles";

function Input(props: IInputDetails) {
  const {
    value,
    type,
    placeHolder,
    margin,
    width,
    height,
    borderRadius,
    icon,
    iconWidth,
    iconHeight,
    iconStyles,
    errorText,
    styles,
    onChangeHandler,
    validation,
  } = props;

  const [error, setError] = useState("");

  const blurHandler = () => {
    if (!(validation?.(value) ?? true)) {
      setError(errorText ?? "validation error");
    }
  };

  const changeHandler = (e: any) => {
    onChangeHandler(e);
    setError("");
  };

  return (
    <Styles.Wrapper
      margin={margin}
      styles={styles}
      width={width}
      height={height}
    >
      <Styles.InputWrapper borderRadius={borderRadius}>
        {icon && (
          <Styles.Icon
            src={icon}
            width={iconWidth}
            height={iconHeight}
            styles={iconStyles}
          />
        )}
        <Styles.Input
          value={value}
          onChange={changeHandler}
          type={type || "string"}
          placeholder={placeHolder}
          onBlur={blurHandler}
        />
      </Styles.InputWrapper>
      {error && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
    </Styles.Wrapper>
  );
}

export default Input;
