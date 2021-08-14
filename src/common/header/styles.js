import styled from "styled-components";
import { palette } from "../../assets/theme/palette";

export const HeaderWrapper = styled.aside`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background: #336399;
`;
export const AddButton = styled.img`
  z-index: 2;
  width: 40px;
  cursor: pointer;
  height: 40px;
  position: absolute;
  right: 42px;
  top: 40px;
`;

export const Timeline = styled.div`
  display: flex;
`;
export const HeaderTitle = styled.h2`
  color: white;
`;

export const SOPSelection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 2rem;
  border: 1px solid #eee;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  color: ${palette.black80};
  background: #e5e5e5;
`;

export const UserControl = styled.div`
  display: flex;
`;
