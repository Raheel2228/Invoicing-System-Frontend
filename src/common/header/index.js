import React, { useState, useEffect } from "react";
import { HeaderWrapper, HeaderTitle, AddButton } from "./styles";
import logo from "../../assets/img/addButton.png";
const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Dashboard</HeaderTitle>
      <AddButton
        onClick={() => {
          props.setModal(true);
        }}
        src={logo}
      />
    </HeaderWrapper>
  );
};

export default Header;
