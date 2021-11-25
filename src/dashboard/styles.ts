import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #9cdddb;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 50px);
  background: #fff;
  margin: 25px 0;
  padding: 15px;
`;

export const NewItem = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 10px 15px;
`;

export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px 15px;
  box-shadow: 5px 5px 10px #c07676;
`;

export const Task = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Icon = styled.img`
  height: 35px;
  width: 35px;
  padding: 5px;
  cursor: pointer;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const ListWrapper = styled.div`
  height: calc(100% - 115px);
  overflow-y: auto;
  margin: 10px;
`;
