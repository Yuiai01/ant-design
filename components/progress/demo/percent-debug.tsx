import React from 'react';
import { Progress, Button } from 'antd';
import { green } from '@ant-design/colors';

const App = () => {
  const [percent, setPercent] = React.useState(0);
  return (
    <>
      <Progress percent={percent} />
      <br />
      <Progress type='circle' percent={percent} success={{ strokeColor: '#ff00ff' }} />
      <Progress type='circle' success={{ percent, strokeColor: '#ff00ff' }} />
      <br />
      <Progress success={{ percent }} />
      <Progress type="dashboard" percent={percent} success={{ percent }} />
      <Progress type="circle" percent={percent} success={{ percent }} />
      <br />
      <Progress percent={percent} steps={10} strokeColor={green} />

      <br />
      <Button onClick={() => setPercent((v) => (v + 5) % 105)}>Change Percent</Button>
    </>
  );
};

export default App;
