import { Modal, Button } from "react-bootstrap";
import React, { useContext, useState } from "react";

import { FormLabels, BoldHeading } from "./styles";
import {
  MinusCircleOutlined,
  StepForwardFilled,
  EditTwoTone,
} from "@ant-design/icons";

import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Space,
  InputNumber,
  message,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { InvoiceContext } from "../../contexts/contextInvoice";
import { postInvoice } from "../../helpers/invoices";

const { Option } = Select;

const Dialog = (props) => {
  const { allInvoices, setAllInvoices, setCurentInvoice } =
    useContext(InvoiceContext);
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [subTotal, setSubTotal] = useState(0);
  const [currentView, setCurrentView] = useState(0);
  const [customer, setCustomer] = useState({});
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onChangeDiscount = (e) => {
    setDiscount(e);
  };
  const closeModal = () => {
    form.resetFields();
    form1.resetFields();
    setCustomer({});
    setCurrentView(0);
    setTax(0);
    setSubTotal(0);
    setDiscount(0);
    props.setModal();
  };

  const onChangeTax = (e) => {
    setTax(e);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  //   Add invoice dialog box
  return (
    <>
      {allInvoices ? (
        <>
          {" "}
          <Modal
            show={props.modal}
            onHide={closeModal}
            backdrop="static"
            size="lg"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <BoldHeading>
                  <span style={{ fontSize: 18 }}>Create New Invoice </span>{" "}
                  ORDER NO: {allInvoices.length + 1}
                </BoldHeading>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {!currentView ? (
                //   customer detail form
                <Form
                  form={form}
                  name="register"
                  onFinish={onFinish}
                  initialValues={{
                    prefix: "91",
                  }}
                  scrollToFirstError
                >
                  <Row>
                    <Col span={12}>
                      <BoldHeading
                        style={{
                          color: "rgb(68 60 60 / 41%)",
                          marginBottom: 0,
                          marginLeft: 0,
                        }}
                      >
                        CUSTOMER DETAILS
                      </BoldHeading>
                    </Col>
                    <Col span={12}>
                      <Button
                        onClick={() => {
                          form.setFieldsValue({
                            customer_address: "N/A",
                            customer_email: "N/A",
                            customer_name: "Unknown User",
                            customer_phone: "0000000000",
                            pin: 0,
                          });
                          setCustomer({
                            customer_address: "N/A",
                            customer_email: "N/A",
                            customer_name: "Unknown User",
                            customer_phone: "0000000000",
                            pin: 0,
                          });
                          setCurrentView(1);
                        }}
                        style={{ float: "right" }}
                        variant="outline-primary"
                        size="sm"
                      >
                        <strong>SKIP</strong>
                        <StepForwardFilled />
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                  <Row gutter={50}>
                    <Col span={11}>
                      {" "}
                      <FormLabels>Full Name *</FormLabels>
                      <Form.Item
                        name="customer_name"
                        rules={[
                          {
                            required: true,
                            message: "Please input name!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Customer Name"
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                      <FormLabels>Address *</FormLabels>
                      <Form.Item
                        name="customer_address"
                        rules={[
                          {
                            required: true,
                            message: "Please input address!",
                          },
                        ]}
                      >
                        <TextArea
                          placeholder="Complete Address"
                          rows={4}
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={11}>
                      {" "}
                      <FormLabels>Phone Number *</FormLabels>
                      <Form.Item
                        name="customer_phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input phone number!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Customer Phone Number"
                          addonBefore={prefixSelector}
                          style={{ width: "100%" }}
                        />
                      </Form.Item>{" "}
                      <FormLabels>Email ID *</FormLabels>
                      <Form.Item
                        name="customer_email"
                        rules={[
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: true,
                            message: "Please input E-mail!",
                          },
                        ]}
                      >
                        <Input placeholder="Customer Email Address" />
                      </Form.Item>{" "}
                      <FormLabels>Pincode</FormLabels>
                      <Form.Item name="pin">
                        <InputNumber min={0} style={{ width: "50%" }} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              ) : (
                <>
                  {/* Products detail form */}{" "}
                  <Row>
                    <Col span={12}>
                      <BoldHeading
                        style={{
                          color: "rgb(68 60 60 / 41%)",
                          marginBottom: 0,
                          marginLeft: 0,
                        }}
                      >
                        PRODUCT DETAILS
                      </BoldHeading>
                    </Col>
                    <Col span={12}>
                      <Row>
                        <Col span={20}>
                          <div style={{ float: "right" }}>
                            <BoldHeading
                              style={{
                                color: "rgb(68 60 60 / 41%)",
                                marginBottom: 0,
                                marginLeft: 0,
                              }}
                            >
                              CUSTOMER DETAILS
                            </BoldHeading>
                            <BoldHeading
                              style={{
                                color: "rgb(68 60 60 / 41%)",
                                fontSize: 16,
                                marginBottom: 0,
                                marginLeft: 0,
                              }}
                            >
                              {customer.customer_name}
                            </BoldHeading>
                            <BoldHeading
                              style={{
                                color: "rgb(68 60 60 / 41%)",
                                marginBottom: 0,
                                marginLeft: 0,
                              }}
                            >
                              {customer.customer_email}
                            </BoldHeading>
                          </div>
                        </Col>
                        <Col span={4}>
                          {" "}
                          <EditTwoTone
                            onClick={() => {
                              if (customer.customer_email == "N/A") {
                                form.resetFields();
                              }
                              setCurrentView(0);
                            }}
                            className="edit-icon"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Form
                    form={form1}
                    name="dynamic_form_nest_item"
                    onFinish={onFinish}
                    autoComplete="off"
                  >
                    <hr />
                    <Row>
                      <Col span={12}>ITEM</Col>
                      <Col span={6}>QUANTITY</Col>
                      <Col span={6}>PRICE - ₹</Col>
                    </Row>
                    <hr />
                    {/* Dynamic Product additions */}
                    <Form.List name="products">
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map(
                            ({ key, name, fieldKey, ...restField }) => (
                              <>
                                <Space
                                  key={key}
                                  style={{
                                    display: "flex",
                                    marginBottom: 8,
                                  }}
                                  align="baseline"
                                >
                                  <Form.Item
                                    {...restField}
                                    name={[name, "name"]}
                                    fieldKey={[fieldKey, "name"]}
                                    rules={[
                                      {
                                        required: true,
                                        message: "Missing product name",
                                      },
                                    ]}
                                  >
                                    <Input
                                      style={{ width: 365 }}
                                      placeholder="Product Name"
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    {...restField}
                                    name={[name, "quantity"]}
                                    fieldKey={[fieldKey, "quantity"]}
                                    rules={[
                                      {
                                        required: true,
                                        message: "Missing quantity",
                                      },
                                    ]}
                                  >
                                    <InputNumber
                                      min={0}
                                      style={{ width: "100%" }}
                                      placeholder="Quantity"
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    {...restField}
                                    name={[name, "price"]}
                                    fieldKey={[fieldKey, "price"]}
                                    rules={[
                                      {
                                        required: true,
                                        message: "Missing price",
                                      },
                                    ]}
                                  >
                                    <InputNumber
                                      min={0}
                                      style={{ width: "100%" }}
                                      onChange={() => {
                                        let vals = form1.getFieldsValue();
                                        let sum = 0;

                                        vals.products.forEach((item) => {
                                          if (item?.price) {
                                            sum = sum + item.price;
                                          }
                                        });
                                        setSubTotal(sum);
                                      }}
                                      placeholder="Price"
                                    />
                                  </Form.Item>
                                  <MinusCircleOutlined
                                    onClick={() => {
                                      remove(name);
                                      let vals = form1.getFieldsValue();
                                      let sum = 0;

                                      vals.products.forEach((item) => {
                                        if (item?.price) {
                                          sum = sum + item.price;
                                        }
                                      });
                                      setSubTotal(sum);
                                    }}
                                  />
                                </Space>
                                <hr />
                              </>
                            )
                          )}

                          <Form.Item>
                            <Button
                              onClick={() => add()}
                              // icon={<PlusOutlined />}
                            >
                              Add Product
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Form>
                  <hr />
                  <Row gutter={20}>
                    <Col span={4}>
                      <label>Tax (%)</label>
                      <InputNumber value={tax} min={0} onChange={onChangeTax} />
                    </Col>
                    <Col span={4}>
                      <label>Discount (%)</label>
                      <InputNumber
                        value={discount}
                        min={0}
                        onChange={onChangeDiscount}
                      />
                    </Col>
                    <Col span={8}></Col>
                    <Col span={4}>SUB TOTAL</Col>
                    <Col span={4}>₹ {subTotal}</Col>
                  </Row>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              {currentView ? (
                <Row gutter={20}>
                  <Col span={4}>Tax: ₹ {(subTotal * tax) / 100}</Col>
                  <Col span={6}>Discount: ₹ -{(subTotal * discount) / 100}</Col>
                  <Col span={4}></Col>
                  <Col span={6}>
                    Grand Total: ₹{" "}
                    {subTotal +
                      (subTotal * tax) / 100 -
                      (subTotal * discount) / 100}
                  </Col>
                  <Col span={4}>
                    {" "}
                    <Button
                      onClick={() => {
                        form1.validateFields().then((vals) => {
                          if (vals?.products?.length) {
                            customer["products"] = vals.products;
                            customer["tax"] = tax;
                            customer["discount"] = discount;
                            customer["total_amount"] = subTotal;
                            setAllInvoices(false);
                            postInvoice(customer).then((res) => {
                              setAllInvoices(
                                res.data.sort(function (a, b) {
                                  return b.id - a.id;
                                })
                              );
                              setCurentInvoice(res.data[res.data.length - 1]);
                              closeModal();
                            });
                          } else {
                            message.error("Please add atleast one product.");
                          }
                        });
                      }}
                      variant="primary"
                    >
                      Save
                    </Button>{" "}
                  </Col>
                </Row>
              ) : (
                <Button
                  onClick={() => {
                    form.validateFields().then((vals) => {
                      vals.customer_phone =
                        "+" + vals.prefix + vals.customer_phone;
                      delete vals.prefix;
                      setCustomer(vals);
                      setCurrentView(1);
                    });
                  }}
                  variant="primary"
                >
                  Proceed
                </Button>
              )}
            </Modal.Footer>
          </Modal>{" "}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Dialog;
