import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import { palette } from "../../assets/theme/palette";

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;

  background: #2f3740;
  width: 270px;
  height: calc(100vh - 56px);
  overflow-x: hidden;
  overflow-y: auto;
`;
export const SearchInput = styled.input`
background-color: #353e48;
    border: none;
    color: white;
    margin-block: 15px;
    margin-inline: 10px;
    border-radius: 500px;
    outline: none;
    font-size: 13px;
    padding: 6px 6px 6px 15px;
}
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: #2f3740;
  padding: 20px;
  margin-bottom: 30px;

  & > svg {
    width: 150px;
    height: 50px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Tile = styled.div`
  color: whitesmoke;
  margin-top: 10px;
  line-height: 10px;
  margin-left: 10px;
`;

export const Tiletxt = styled.div`
  color: #7f858c;
  margin-right: 10px;
  float: right;
  font-size: 11px;
`;
export const Tiletxt1 = styled.div`
  color: white;
  margin-right: 10px;
  float: right;
  font-size: 18px;
  font-weight: 500;
`;
export const ParentTile = styled.div`
  padding-inline: 5px;
  background-color: ${(props) => (props.selected ? "#dee2e61a" : "none")};
  font-size: 14px;
  &:hover {
    background-color: #dee2e61a;
  }
`;

export const Space = styled.div`
  line-height: 1px;
`;
export const Tag1 = styled.div`
  color: #5192dc;
`;
export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: ${palette.white};
  align-items: center;
  padding: 3px;
  margin: 3px 0px;
  cursor: pointer;

  &.active {
    background: ${palette.blue};
  }

  &:hover {
    background: ${palette.blue};
  }
`;

export const MenuItemIcon = styled.div`
  margin-left: 15px;
  margin-top: 3px;

  & svg {
    height: 24px;
  }
`;

export const MenuItemLabel = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;

export const Footer = styled.div`
  display: flex;
`;

export const Workspace = styled.p`
  color: ${palette.white};
  border-top: 1px solid ${palette.white50};
  flex-grow: 1;
  padding: 20px;
  margin: 0px;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;

// export const MyNavLink = styled(NavLink)`
//   &.active .menuItem {
//     background: ${palette.blue};
//   }
// `;
export const InvoiceCount = styled.h6`
  color: rgb(167 145 145 / 30%);
  font-size: 12px;
  margin: 0px 16px 8px 16px;
  font-weight: 700;
`;
