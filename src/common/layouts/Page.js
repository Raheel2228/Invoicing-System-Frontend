import React, { FC } from "react";
import Dashboard from "./Dashboard";
import { PageHeader, PageWrapper } from "./styles";

const Page = ({ header, children }) => {
  // page container for the whole view of website
  return (
    <Dashboard>
      <PageWrapper>
        <PageHeader>{header}</PageHeader>
        {children}
      </PageWrapper>
    </Dashboard>
  );
};

export default Page;
