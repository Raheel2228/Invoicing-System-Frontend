import React, { useState } from "react";
import Header from "../header";
import Navigation from "../Navigation";
import { ContentArea, MainWrapper } from "./styles";
import Dialog from "./Dialog";
const Dashboard = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <MainWrapper>
        <ContentArea>
          {/* Page Header */}
          <Header
            setModal={() => {
              setModal(true);
            }}
          />
          <Dialog modal={modal} setModal={() => setModal(false)} />
        </ContentArea>
      </MainWrapper>
      <MainWrapper>
        {/* Invoices side navigation component */}
        <Navigation />
        <ContentArea>{children}</ContentArea>
      </MainWrapper>
    </>
  );
};

export default Dashboard;
