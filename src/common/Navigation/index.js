import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { InvoiceContext } from "../../contexts/contextInvoice";

import {
  Sidebar,
  Tile,
  ParentTile,
  SearchInput,
  Tiletxt,
  Tiletxt1,
  Space,
  Tag1,
  InvoiceCount,
} from "./styles";

const Navigation = () => {
  const { allInvoices, setCurentInvoice, curentInvoice } =
    useContext(InvoiceContext);
  const [navInvoices, setNamvInvoices] = useState(allInvoices);
  useEffect(() => {
    setNamvInvoices(allInvoices);
  }, [allInvoices]);
  function searchTriggered(e) {
    if (e.target.value !== "") {
      setNamvInvoices(allInvoices.filter((item) => item.id == e.target.value));
    } else {
      setNamvInvoices(allInvoices);
    }
  }
  return (
    // side bar displaying all the invoices cards
    <Sidebar>
      <SearchInput
        onChange={searchTriggered}
        placeholder="Search by invoice #"
      />

      <InvoiceCount>INVOICES - {allInvoices.length}</InvoiceCount>

      {navInvoices ? (
        navInvoices.map((element) => {
          return (
            <ParentTile
              selected={element.id === curentInvoice.id}
              onClick={() => {
                setCurentInvoice(element);
              }}
            >
              <Tile>
                <p>
                  INV. # - {element.id}
                  <Tiletxt>{element.createdAt.split("T")[0]}</Tiletxt>
                </p>
                <p>
                  Items - {element.products.length}
                  <Tiletxt></Tiletxt>
                </p>

                <Space>
                  <Tag1>
                    <p>
                      {element.customer_name}
                      <Tiletxt1>
                        ₹{" "}
                        {element.total_amount -
                          (element.total_amount * element.discount) / 100 +
                          (element.total_amount * element.tax) / 100}
                      </Tiletxt1>
                    </p>
                  </Tag1>
                </Space>
              </Tile>
            </ParentTile>
          );
        })
      ) : (
        <Spinner animation="border" role="status" variant="light">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Sidebar>
  );
};

export default Navigation;
