import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import StepFormOne from './StepFormOne'
import StepFormTwo from './StepFormTwo'
import StepFormThree from './StepFormThree';
// import PreviewCV from './PreviewCV';
import {Form} from 'antd';

const steps = [
  {
    title: 'Profile',
    content: <StepFormOne />,
  },
  {
    title: 'Technical Skills',
    content: <StepFormTwo />,
  },
  {
    title: 'Projects',
    content: <StepFormThree />,
  },
  // {
  //   title: 'Preview',
  //   content: <PreviewCV />,
  // },
];

const StepperForm = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };

  return (
    <Form layout="vertical">
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </Form>
  );
};
export default StepperForm;