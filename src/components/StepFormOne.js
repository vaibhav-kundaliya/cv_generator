import React from 'react'
import { Input, Form } from 'antd'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function StepFormOne() {
  return (
    <div>
      <Form.Item label="Name">
        <Input placeholder='Name of developer'></Input>
      </Form.Item>
      <Form.Item label="Profile">
        <Input placeholder='Developer profile eg. Fornt-end, Beck-end etc.'></Input>
      </Form.Item>
      <Form.Item label="Summery">
        <ReactQuill theme="snow" value={""} />;
      </Form.Item>
    </div>
  )
}
