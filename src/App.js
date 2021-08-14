import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyInvoices from "./pages/Invices";
import { InvoiceContext } from "./contexts/contextInvoice";
const App = (props) => {
  const [allInvoices, setAllInvoices] = useState(false);
  const [curentInvoice, setCurentInvoice] = useState(false);
  return (
    //Context API provider for the State Management
    <InvoiceContext.Provider
      value={{
        allInvoices,
        setAllInvoices,
        curentInvoice,
        setCurentInvoice,
      }}
    >
      {/* My component for the Invoices Page */}
      <MyInvoices />
    </InvoiceContext.Provider>
  );
};

export default App;
