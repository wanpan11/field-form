/* eslint-disable react/prop-types */

import React, { StrictMode } from 'react';
import Form from 'rc-field-form';
import Input from './components/Input';

const { List, useForm } = Form;

const Demo = () => {
  const [form] = useForm();

  return (
    <div>
      <h3>List of Form</h3>
      <p>You can set Field as List</p>

      <StrictMode>
        <Form form={form} preserve={false} style={{ border: '1px solid red', padding: 15 }}>
          <Form.Field shouldUpdate>
            {() => JSON.stringify(form.getFieldsValue(), null, 2)}
          </Form.Field>

          <List name="users">
            {(fields, { add, remove }) => {
              return (
                <div>
                  <h4>List of `users`</h4>

                  {fields.map(({ key, name, ...restField }) => {
                    return (
                      <div
                        key={key}
                        style={{ marginBottom: 12, display: 'flex', alignItems: 'center' }}
                      >
                        <Form.Field
                          {...restField}
                          name={[name, 'first']}
                          rules={[{ required: true, message: 'Missing first name' }]}
                        >
                          <Input placeholder="First Name" />
                        </Form.Field>

                        <button
                          style={{ height: 24 }}
                          onClick={() => {
                            remove(name);
                          }}
                        >
                          -
                        </button>
                      </div>
                    );
                  })}

                  <button
                    onClick={() => {
                      add({ first: 'first' });
                    }}
                  >
                    + New User
                  </button>

                  <button
                    onClick={() => {
                      form.resetFields();
                    }}
                  >
                    resetFields
                  </button>
                </div>
              );
            }}
          </List>
        </Form>
      </StrictMode>

      {/* <div style={{ border: '1px solid #000', padding: 15 }}>
        <h4>Out Of Form</h4>
        <button
          type="button"
          onClick={() => {
            form.setFieldsValue({
              users: ['light', 'bamboo'],
            });
          }}
        >
          Set List Value
        </button>

        <button
          type="button"
          onClick={() => {
            console.log('`users` touched:', form.isFieldTouched('users'));
          }}
        >
          Is List touched
        </button>
      </div> */}
    </div>
  );
};

export default Demo;
