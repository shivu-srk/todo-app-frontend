import React from "react";
import { IButtonDetails } from "./types";
import * as Styles from "./styles";

function Button(props: IButtonDetails) {
  const {
    name,
    onClickHandler,
    width,
    height,
    margin,
    borderRadius,
    bg,
    styles,
    color,
    fontSize,
    icon,
    iconHeight,
    iconWidth,
    iconStyles,
    disabled,
  } = props;

  return (
    <Styles.Wrapper
      width={width}
      height={height}
      margin={margin}
      bg={bg}
      borderRadius={borderRadius}
      isDisabled={disabled}
      styles={styles}
    >
      {icon && (
        <Styles.Icon
          src={icon}
          width={iconWidth}
          height={iconHeight}
          styles={iconStyles}
        />
      )}
      <Styles.Button onClick={onClickHandler} color={color} fontSize={fontSize}>
        {name}
      </Styles.Button>
    </Styles.Wrapper>
  );
}

export default Button;
