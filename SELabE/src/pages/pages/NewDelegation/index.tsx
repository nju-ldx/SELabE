import {useState} from 'react';
import {Card} from 'antd';
import StepApplyPage from "@/pages/StepApplyPage";
import FuntionList from "@/pages/FuntionList";
//import { useLocation } from 'react-router-dom';
const delegationList = [
  {
    key: '委托申请书',
    tab: '委托申请书',
  },
  {
    key: '委托功能列表',
    tab: '委托功能列表',
  }
];


const TabsCard = () => {
  const [activeTabKey, setActiveTabKey] = useState('委托申请书');
  const onTabChange = (key:any) => {
    setActiveTabKey(key);
  };
  //const params = useLocation() as any;
  //console.log(params);
  //console.log(params.query.id);
  const contentList = {
    委托申请书:
      <Card>
        <StepApplyPage/>
      </Card>,
    委托功能列表: <Card><FuntionList /></Card>,
  };

  return (
    <>
      <Card
        style={{width: '100%'}}
        title="填写委托"
        tabList={delegationList}
        onTabChange={key => {
          onTabChange(key);
        }}
      >
        {contentList[activeTabKey]}
      </Card>
    </>
  );
};

export default () => <TabsCard/>;
