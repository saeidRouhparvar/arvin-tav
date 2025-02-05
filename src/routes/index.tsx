import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout";
import Dashboard from "../pages/dashboard";
import CreateDanesh from "../pages/createDanesh";
import DaneshNetwork from "../pages/daneshNetwork";
import DaneshReQ from "../pages/daneshReQ";
import DaneshAnswer from "../pages/daneshAnswer";
import MyDanesh from "../pages/myDanesh";
import EffectiveManaging from "../pages/effectiveManaging";
import DaneshManaging from "../pages/daneshManaging";
import TestManaging from "../pages/testManaging";
import Bachelor from "../pages/bachelor";
import Follow from "../pages/follow";
import Configuration from "../pages/configuration";
import LearningRow from "../pages/learningRow";
import Executive from "../pages/Executive";

export const routes = [
  {
    path: "/",
    name: "main",
    element: <MainLayout />,
    showInNav: false,
    children: [
      { path: "dashboard", name: "داشبورد", element: <Dashboard/>, showInNav: true },
      { path: "danesh-create", name: "ایجاد دانش", element: <CreateDanesh/>, showInNav: true },
      { path: "danesh-network", name: "شبکه دانش", element: <DaneshNetwork/>, showInNav: true },
      { path: "learn-way", name: "مسیر های آموزشی", element: <LearningRow/>, showInNav: true },
      { path: "danesh-reQ", name: "درخواست های دانشی (تصمیم یاری)", element: <DaneshReQ/>, showInNav: true },
      { path: "danesh-answer", name: "پاسخ های دانشی", element: <DaneshAnswer/>, showInNav: true },
      { path: "my-danesh", name: "کارتابل دانش های من", element: <MyDanesh/>, showInNav: true },
      { path: "effective-managing", name: "کارتابل مدیریت بهره وری", element: <EffectiveManaging/>, showInNav: true },
      { path: "danesh-managing", name: "کارتابل مدیریت دانش ها", element: <DaneshManaging/>, showInNav: true },
      { path: "test-managing", name: "کارتابل ارزیابی", element: <TestManaging/>, showInNav: true },
      { path: "bachelor", name: "کارتابل کارشناسی", element: <Bachelor/>, showInNav: true },
      { path: "executive", name: "کارتابل اجرایی", element: <Executive/>, showInNav: true },
      { path: "follow", name: "کارتابل پیگیری", element: <Follow/>, showInNav: true },
      { path: "configuration", name: "پیکربندی", element: <Configuration/>, showInNav: true },
    ],
  },
];

export const CreateRouter = createBrowserRouter(routes);






