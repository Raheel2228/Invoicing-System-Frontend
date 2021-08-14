import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ModalTitle = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 600;
`;

export const FormLabels = styled.label`
  font-weight: 600;
`;
export const ContentArea = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;

export const PageWrapper = styled.section`
  overflow: scroll;
  height: calc(100vh - 56px);
  display: flex;
  background-color: #f5f5f5;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  // padding: 0px 25px;
`;

export const PageHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;
export const BoldHeading = styled.h6`
  color: rgb(68 60 60 / 72%);
  font-size: 12px;
  margin: 0px 16px 8px 16px;
  font-weight: 700;
`;
