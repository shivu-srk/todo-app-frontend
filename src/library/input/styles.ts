import styled from "styled-components";

export const Wrapper = styled.div<{
  margin?: string;
  styles?: string;
  width?: string;
  height?: string;
}>`
  position: relative;
  width: ${(p) => p.width || "250px"};
  height: ${(p) => p.height || "50px"};
  ${(p) => p.margin && `margin: ${p.margin}`};
  ${(p) => p.styles}
`;

export const InputWrapper = styled.div<{
  borderRadius?: string;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border: 1px solid #000;
  border-radius: ${(p) => p.borderRadius || "10px"};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
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

export const ErrorText = styled.div`
  position: absolute;
  color: red;
  font-size: 10px;
  font-weight: bold;
  margin-left: 9px;
  bottom: -15px;
`;
