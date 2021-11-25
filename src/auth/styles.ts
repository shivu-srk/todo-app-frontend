import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #f2f3f5;
`;

export const Card = styled.div`
  display: flex;
  width: 930px;
  height: 512px;
  background: #ffffff;
  padding: 20px;
`;

export const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 340px;
  margin: 0 auto;
  height: 100%;
`;

export const Title = styled.div<{
  margin?: string;
}>`
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  margin: ${(p) => p.margin || "30px 0 3px"};
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: red;
  text-align: center;
  & > span {
    cursor: pointer;
    color: #2eacb9;
  }
`;
