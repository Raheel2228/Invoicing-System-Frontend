import React, { useContext } from "react";
import { InvoiceContext } from "../../contexts/contextInvoice";

import { PrinterTwoTone } from "@ant-design/icons";

import ReactToPrint from "react-to-print";
import { Empty } from "antd";
let ref = React.createRef();
const Card = (props) => {
  const { curentInvoice } = useContext(InvoiceContext);
  // invoice card to show the invoice opened and print it
  return (
    <>
      {curentInvoice ? (
        <>
          <ReactToPrint
            copyStyles={true}
            trigger={() => <PrinterTwoTone className="print-button" />}
            content={() => ref.current}
          />
          <section className="invoice">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div ref={ref} className="invoice-wrapper">
                    <div className="invoice-top">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="invoice-top-left">
                            <h4>INVOICE</h4>
                            <h6>#INV{curentInvoice.id}</h6>
                            <h6>{curentInvoice.createdAt.split("T")[0]}</h6>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="invoice-top-right">
                            <h6>CUSTOMER DETAILS</h6>
                            <h4>{curentInvoice.customer_name}</h4>
                            <h6>{curentInvoice.customer_email}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="invoice-bottom">
                      <hr />
                      <div className="row">
                        <div className="col-md-6">
                          <h2 className="service-subtitle">ITEM</h2>
                        </div>
                        <div className="col-md-3">
                          <h5 className="service-subtitle">QUANITYTY</h5>
                        </div>
                        <div className="col-md-3">
                          <h5 className="service-subtitle">PRICE</h5>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        {curentInvoice &&
                          curentInvoice?.products?.map((element) => {
                            return (
                              <>
                                <div className="col-md-6">
                                  <h2 className="service-subtitle">
                                    {element.name}
                                  </h2>
                                </div>
                                <div className="col-md-3">
                                  <h5 className="service-subtitle">
                                    {element.quantity}
                                  </h5>
                                </div>
                                <div className="col-md-3">
                                  <h5 className="service-subtitle">
                                    {element.price}
                                  </h5>
                                </div>

                                <hr />
                              </>
                            );
                          })}
                      </div>
                      <div className="row">
                        <div className="col-sm-10 col-xs-8">
                          <h4 className="sub-total">SUB TOTAL</h4>
                        </div>
                        <div className="col-sm-2 col-xs-4">
                          <h3 className="sub-total-price">
                            ₹ {curentInvoice.total_amount}
                          </h3>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-sm-10 col-xs-8">
                          <h4 className="discount">
                            TAX({curentInvoice.tax}%)
                          </h4>
                        </div>
                        <div className="col-sm-2 col-xs-4">
                          <h3 className="discount-price">
                            ₹{" "}
                            {(curentInvoice.total_amount * curentInvoice.tax) /
                              100}
                          </h3>
                        </div>
                        <div className="col-sm-10 col-xs-8">
                          <h4 className="discount">
                            DISCOUNT({curentInvoice.discount}%)
                          </h4>
                        </div>
                        <div className="col-sm-2 col-xs-4">
                          <h3 className="discount-price">
                            ₹ -
                            {(curentInvoice.total_amount *
                              curentInvoice.discount) /
                              100}
                          </h3>
                        </div>

                        <div className="col-sm-10 col-xs-8">
                          <h3 className="total-due">GRAND TOTAL</h3>
                        </div>
                        <div className="col-sm-2 col-xs-4">
                          <h3 className="total-due-price">
                            ₹{" "}
                            {curentInvoice.total_amount -
                              (curentInvoice.total_amount *
                                curentInvoice.discount) /
                                100 +
                              (curentInvoice.total_amount * curentInvoice.tax) /
                                100}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Empty description={"Please click on an invoice!"} />
      )}
    </>
  );
};

export default Card;
