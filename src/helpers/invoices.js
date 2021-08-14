import axios from "axios";
let url = "http://localhost:8080/";

export const getAllInvoices = () => {
  return axios.get(url + "invoices");
};

export const postInvoice = (data) => {
  return axios.post(url + "invoices", data);
};
