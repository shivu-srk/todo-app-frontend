import styled from "styled-components";

export const Wrapper = styled.div<{
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
  bg?: string;
  styles?: string;
  isDisabled?: boolean;
}>`
  display: flex;
  padding: 0 10px;
  align-items: center;
  cursor: pointer;
  width: ${(p) => p.width || "250px"};
  height: ${(p) => p.height || "50px"};
  border-radius: ${(p) => p.borderRadius || "10px"};
  ${(p) => p.bg && `background: ${p.bg};`}
  ${(p) => p.margin && `margin: ${p.margin}`};
  ${(p) => p.isDisabled && `pointer-events: none; opacity: 0.4`};
  ${(p) => p.styles}
`;

export const Button = styled.button<{
  color?: string;
  fontSize?: string;
}>`
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  cursor: pointer;
  ${(p) => p.color && `color: ${p.color};`}
  ${(p) => p.fontSize && `font-size: ${p.fontSize};`}
`;

export const Icon = styled.img<{
  width?: string;
  height?: string;
  styles?: string;
}>`
  margin-right: 10px;
  width: ${(p) => p.width || "24px"};
  height: ${(p) => p.height || "24px"};
  ${(p) => p.styles}
`;
