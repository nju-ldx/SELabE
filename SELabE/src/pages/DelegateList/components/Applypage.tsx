import React ,{useState,useEffect} from 'react';
import { Card, Checkbox, Col, message, PageHeader, Row } from 'antd';
import {PageContainer, FooterToolbar} from "@ant-design/pro-layout";
import { Form, Input, Button, Select } from 'antd';
import { FormInstance } from 'antd/es/form';
const { TextArea } = Input;
import {useRequest} from 'umi';
import ProForm, {
  ProFormDependency,
  ProFormCheckbox,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormDatePicker,
  ProFormGroup,
} from '@ant-design/pro-form';
import FormItem from 'antd/lib/form/FormItem';
import ProCard from '@ant-design/pro-card';
const Applypage=()=>{
  const [values,setValues]=useState({});
  const init=useRequest('api/testb');
  const request=useRequest({
    url:'api/testbp',
    method:'post',
    body:JSON.stringify(values),
  },{
    manual:true
  });
  const [form]=Form.useForm();
  form.setFieldsValue(init.data);
  const onFinish = (value:any) => {
    console.log(value);
    setValues(value);
    request.run();
  };
  return (
    <PageContainer content="用户向本中心发起测试委托">
      <PageHeader
        className="site-page-header"
        title="软件项目委托测试申请书"
      />
      <ProForm
        hideRequiredMark
        name="basic"
        layout="vertical"
        initialValues={{
          public: '1',
          expectFinishDate: Date.now()
        }}
        form={form}
        onFinish={onFinish}
      >
        <ProCard bordered>
        <ProFormCheckbox.Group
          name="测试类型"
          label="测试类型"
          options={['软件确认测试', '成果/技术鉴定测试', '专项资金验收测试','其它']}
          layout="vertical"
        >
        </ProFormCheckbox.Group>
        </ProCard>
        

        <ProCard bordered>
          <ProFormText width="md" name="软件名称" label="软件名称" />
        </ProCard>

        
        <ProCard bordered>
          <ProFormText width="md" name="版本号" label="版本号" />
        </ProCard>
        <ProCard bordered>
        <ProFormText width="md" name="委托单位Ch" label="委托单位（中文）" />
        </ProCard>
        <ProCard bordered>
        <ProFormText width="md" name="委托单位En" label="委托单位（英文）" />
        </ProCard>
        <ProCard bordered>
        <ProFormText width="md" name="开发单位" label="开发单位" />
        </ProCard>
        <ProCard bordered>
        <ProFormSelect
          name="单位性质"
          label="单位性质"
          width='md'
          valueEnum={{
            内资企业:'内资企业',
            外合资企业:'外(合)资企业',
            科研院校:'科研院校',
            政府事业团体:'政府事业团体',
            港澳台合资企业:'港澳台(合)资企业',
            其它:'其它'
          }}
          placeholder="Please select"
          rules={[{ required: true }]}
        />
        </ProCard>
        <ProCard bordered>
        <Form.Item name="软件用户对象描述" label="软件用户对象描述" >
          <TextArea  style={{ height: 60 }}  />
        </Form.Item>
        </ProCard>
        <ProCard bordered>
        <Form.Item name="主要功能及用途简介（限200字）" label="主要功能及用途简介（限200字）" >
          <TextArea showCount maxLength={200}  style={{ height: 60 }}  />
        </Form.Item>
        </ProCard>
        <ProCard bordered>
        <ProFormCheckbox.Group
          name="测试依据"
          label="测试依据"
          layout="vertical"
          options={['GB/T 25000.51-2010', 'GB/T 16260.1-2006', 'NST-03-WI12-2011','NST-03-WI13-2011','其它']}
        />
        </ProCard>
        <ProCard bordered>
        <ProFormCheckbox.Group
          name="需要测试的技术指标"
          label="需要测试的技术指标"
          layout="vertical"
          options={['功能性' , '可靠性' , '易用性',  '效率' , '可维护性' , '可移植性',
            '代码覆盖度',  '缺陷检测率',  '代码风格符合度' , '代码不符合项检测率',
            '产品说明要求' , '用户文档集要求','其他']}
        />
       </ProCard>
       <ProCard title='软件规模（至少一种）' bordered>
       <ProForm.Group >
          <ProFormText width="md" name="功能数" label="功能数（到最后一级菜单）" />
          <ProFormText width="md" name="功能点数" label="功能点数" />
          <ProFormText width="md" name="代码行数" label="代码行数（不包括注释行、空行）" />
      </ProForm.Group>
      </ProCard>
      <ProCard title='软件类型' bordered>
      <ProForm.Group >
      <ProFormSelect
          name="系统软件"
          label="系统软件"
          width='md'
          valueEnum={{
            操作系统:'操作系统',
            中文处理系统:'中文处理系统',
            网络系统 :'网络系统',
            嵌入式操作系统:'嵌入式操作系统',
            其他:'其他'
          }}
          placeholder="Please select"
          rules={[{ required: true }]}
        />
        <ProFormSelect
          name="支持软件"
          label="支持软件"
          width='md'
          valueEnum={{
            程序设计语言:'程序设计语言',
            数据库系统设计:'数据库系统设计',
            工具软件 :'工具软件',
            网络通信软件:'网络通信软件',
            中间件:'中间件',
            其他:'其他'
          }}
          placeholder="Please select"
          rules={[{ required: true }]}
        />
        <ProFormSelect
          name="应用软件"
          label="应用软件"
          width='md'
          valueEnum={{
            行业管理软件:'行业管理软件',
            办公软件:'办公软件',
            模式识别软件:'模式识别软件',
            图形图像软件:'图形图像软件',
            控制软件:'控制软件',
            网络应用软件:'网络应用软件',
            信息管理软件:'信息管理软件',
            数据库管理应用软件:'数据库管理应用软件',
            安全与保密软件:'安全与保密软件',
            嵌入式应用软件:'嵌入式应用软件',
            教育软件:'教育软件',
            游戏软件 :'游戏软件 ',
            其他:'其他'
          }}
          placeholder="Please select"
          rules={[{ required: true }]}
        />
      </ProForm.Group>
      </ProCard>
      <ProCard title='运行环境' split={Response ? 'horizontal' : 'vertical'} bordered >
      <ProForm.Group  >
        <ProCard title='客户端' type="inner" bordered>
        <ProFormGroup >
        <ProFormCheckbox.Group
          name="操作系统"
          label="操作系统"
          layout="vertical"
          options={['Window','Linux','其他']}
        />
        <ProFormText width="xs" name="客户端内存要求" label="内存要求" addonAfter='MB'/>
        <Form.Item name="客户端其他要求" label="其他要求" >
          <TextArea  style={{ height: 60 }}  />
        </Form.Item>
        </ProFormGroup>
        </ProCard>
      </ProForm.Group>
        <ProCard title= '服务器端' type="inner" bordered>
        <ProFormGroup>
          <ProCard title='硬件' type="inner" bordered>
          <ProFormGroup>
          <ProFormCheckbox.Group
          name="架构"
          label="架构"
          layout="vertical"
          options={['PC服务器','UNIX／Linux服务器','其它']}
        />
          <ProFormText width="xs" name="服务器端内存要求" label="内存要求" addonAfter='MB'/>
          <ProFormText width="xs" name="服务器端硬盘要求" label="硬盘要求" addonAfter='MB'/>
          <Form.Item name="服务器端其他要求" label="其他要求" >
          <TextArea  style={{ height: 60 }}  />
        </Form.Item>
          </ProFormGroup>
          </ProCard>

          <ProCard title='软件' type="inner" bordered>
            <ProFormGroup>
            <ProFormText width="md" name="操作系统" label="操作系统"/>
            <ProFormText width="md" name="版本" label="版本"/>
            <ProFormText width="md" name="编程语言" label="编程语言"/>
            <ProFormText width="md" name="数据库" label="数据库"/>
            <ProFormText width="md" name="中间件" label="中间件"/>
            <ProFormText width="md" name="其他支撑软件" label="其他支撑软件"/>
            <ProFormCheckbox.Group
            name="架构"
            label="架构"
            layout="vertical"
            options={['C/S','B/S','其它']}
            />
            </ProFormGroup>
          </ProCard>

        </ProFormGroup>
        </ProCard>
        <ProCard bordered title="网络环境" type="inner">
        <ProFormText width="md" name="网络环境"/>
        </ProCard>
      </ProCard>

    <ProCard title="样品与数量" bordered split={Response ? 'horizontal' : 'vertical'}>
          <ProCard bordered title='软件介质' type='inner'>
          <ProFormCheckbox.Group
            name="软件介质"
            layout="vertical"
            options={['光盘','U盘','其它']}
            />
          </ProCard>
          <ProCard title="文档资料" bordered type='inner'>
          <Form.Item name="文档资料"  >
            <TextArea  style={{ height: 60 ,width:500}}  />
          </Form.Item>
          <div>
          注：1、需求文档（例如：项目计划任务书、需求分析报告、合同等）（验收、鉴定测试必须）
          2、用户文档（例如：用户手册、用户指南等）（必须）
          3、操作文档（例如：操作员手册、安装手册、诊断手册、支持手册等）（验收项目必须）
          </div>
          </ProCard>
          <ProCard title="提交的样品（硬拷贝资料、硬件）五年保存期满" bordered type='inner'>
          <ProFormSelect
          name="提交的样品"
          width='md'
          valueEnum={{
            由本实验室销毁:'由本实验室销毁',
            退还给我们:'退还给我们'
          }}
          placeholder="Please select"
          rules={[{ required: true }]}
        />
          </ProCard>
        
    </ProCard>
    <ProCard bordered>
        <ProFormText width="md" name="希望测试完成时间" label="希望测试完成时间"/>
        </ProCard>
        <ProCard title = '委托单位信息' bordered>
  <ProFormText width = "md" name = "委托单位_电话" label = "电话:"></ProFormText>
  <ProFormText width = "md" name = "委托单位_传真" label = "传真"></ProFormText>
  <ProFormText width = "md" name = "委托单位_地址" label = "地址"></ProFormText>
  <ProFormText width = "md" name = "委托单位_邮编" label = "邮编"></ProFormText>
  <ProFormText width = "md" name = "委托单位_联系人" label = "联系人"></ProFormText>
  <ProFormText width = "md" name = "委托单位_手机" label = "手机"></ProFormText>
  <ProFormText width = "md" name = "委托单位_Email" label = "E-mail"></ProFormText>
  <ProFormText width = "md" name = "委托单位_网址" label = "网址"></ProFormText>
</ProCard>
<ProCard title = '国家重点实验室联系方式' bordered>
  <div>单位地址：南京市栖霞区仙林大道163号</div>
  <div>邮政编码：210023</div>
  <div>电话： 86-25-89683467</div>
  <div>传真： 86-25-89686596</div>
  <div>网址： http://keysoftlab.nju.edu.cn</div>
  <div>E-mail:  keysoftlab@nju.edu.cn</div>
</ProCard>
<ProCard bordered>
  <ProForm.Group>
    <ProFormSelect
      name="密级"
      label="密级"
      width='md'
      valueEnum={{
        无密级:'无密级',
        秘密:'秘密',
        机密:'机密',
      }}
      placeholder="无密级"
      rules={[{ required: true }]}
    />
    <ProFormSelect
      name="查杀病毒"
      label="查杀病毒"
      width='md'
      valueEnum={{
        已完成:'已完成',
        无法完成:'无法完成',
      }}
      placeholder='已完成'
      rules={[{required: true}]}
    />
  </ProForm.Group>

</ProCard>
<ProCard title = '材料检查' bordered>
    <ProForm.Group>
      <ProFormCheckbox.Group
        name = '测试样品'
        label = '测试样品'
        layout = 'vertical'
        options={['源代码','可执行文件']}
      />
      <ProFormCheckbox.Group
        name = '需求文档'
        label = '需求文档'
        layout = 'vertical'
        options={['项目计划任务书','需求分析报告','合同']}
      />
      <ProFormCheckbox.Group
        name = '用户文档'
        label = '用户文档'
        layout = 'vertical'
        options = {['用户手册','用户指南']}
      />
      <ProFormCheckbox.Group
        name = '操作文档'
        label = '操作文档'
        layout = 'vertical'
        options = {['操作员手册','安装手册','诊断手册','支持手册']}
      />
      <ProFormText label = '其他' name = '材料检查_其他'></ProFormText>
    </ProForm.Group>
  </ProCard>
  <ProCard bordered>
    <ProForm.Group>
       <ProFormSelect
         width= 'md'
         name = '确认意见'
         label = '确认意见'
         valueEnum={
           {
             确认意见1:"测试所需材料不全，未达到受理条件。",
             确认意见2:"属依据国家标准或自编非标规范进行的常规检测，有资质、能力和资源满足委托方要求。",
             确认意见3:"无国家标准和规范依据，或实验室缺乏检测设备和工具，无法完成检测。",
             确认意见4:"超出实验室能力和资质范围，无法完成检测。"
           }
         }
         placeholder = "请选择"
         rules = {[{required : true}]}
       />
       <ProFormSelect
         width= 'md'
         name = '受理意见'
         label = '受理意见'
         valueEnum={
           {
             受理意见1:"受理-进入项目立项和合同评审流程",
             受理意见2:"不受理",
             受理意见3:"进一步联系"
           }
         }
         placeholder= "请选择"
         rules = {[{required : true}]}
       >
       </ProFormSelect>
    </ProForm.Group>
  </ProCard>
  <ProCard bordered>
    <ProFormText width = 'md' label = '测试项目编号' name = '测试项目编号'></ProFormText>
  </ProCard>
  <ProCard bordered>
    <ProFormTextArea
      name = "备注"
      label = "备注"
    >
    </ProFormTextArea>
  </ProCard>
  
  <ProCard>
  <ProForm.Group>
    <ProFormText name = "受理人（签字）" label = "受理人（签字）"></ProFormText>
    <ProFormText name = "受理人_日期" label = "日期"></ProFormText>
  </ProForm.Group>
</ProCard>
<ProCard>
  <ProForm.Group>
    <ProFormText name = "委托人（签字）" label = "委托人（签字）"></ProFormText>
    <ProFormText name = "委托人_日期" label = "日期"></ProFormText>
  </ProForm.Group>
</ProCard>
      </ProForm>
    </PageContainer>
  );
}
export default Applypage;
