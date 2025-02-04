// @ts-ignore
/* eslint-disable */

import {Key} from "react";

declare namespace API {
  type Response = {
    code: number,//0:ok
    data: any,
    msg: string,
  }
  type DelegationItem = {
    key?: Key;
    /*avatar?: string;
    workId?: number
    delegationId?: number;*/

    contractId?: number;//合同id*
    creatorId?: number;//发起者编号
    id?: number;//编号
    launchTime?: string;//发起时间*
    marketDeptStaffId?: number;//分配的市场部人员id
    marketRemark?: string;//市场部人员处理意见*
    offerId?: string;//报价单ID
    offerRemark?: string;//用户报价单意见*
    reportId?: number;//测试报告id
    sampleId?: number;//样品id
    solutionId?: number;//测试方案id
    state?: string;//状态*
    table14Id?: string;//软件文档评审表ID
    table2Id?: string;//软件项目委托测试申请表ID
    table3Id?: string;//委托测试软件功能列表ID
    testingDeptStaffId?: number;//分配的测试部人员id
    testingRemark?: string;//测试部人员处理意见*
    url?: string;//文档材料url
  }
  type DelegationList = {
    data?: DelegationItem[],
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }
  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
