import { createContext } from "react";

export const InvoiceContext = createContext({
  allInvoices: false,
  setAllInvoices: () => {},
  curentInvoice: false,
  setCurentInvoice: () => {},
});
