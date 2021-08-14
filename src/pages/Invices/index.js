import React, { useEffect, useContext } from "react";
import { Spinner } from "react-bootstrap";
import Card from "../../common/card";
import { InvoiceContext } from "../../contexts/contextInvoice";
import { getAllInvoices } from "../../helpers/invoices";
import Page from "./../../common/layouts/Page";

const MyInvoices = (props) => {
  const { allInvoices, setAllInvoices, curentInvoice, setCurentInvoice } =
    useContext(InvoiceContext);
  useEffect(() => {
    if (!allInvoices) {
      getAllInvoices().then((res) => {
        setAllInvoices(
          res.data.sort(function (a, b) {
            return b.id - a.id;
          })
        );
      });
    }
  }, []);
  return (
    <>
      {" "}
      <Page>
        {allInvoices ? (
          // Invoice internal card to show the invoices when opened
          <Card />
        ) : (
          // show spineer when the apis is loading all invoices
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Page>
    </>
  );
};

export default MyInvoices;
