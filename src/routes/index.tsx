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
import LearningRow from "../pages/learningRow";
import {
  dashboard,
  network,
  create,
  learn,
  requset,
  answer,
  my,
  effective,
  managing,
  test,
  bachelor,
} from "../components/icons/icons";

export const routes = [
  {
    path: "/",
    name: "main",
    element: <MainLayout />,
    showInNav: false,
    children: [
      {
        path: "dashboard",
        name: "داشبورد",
        icon: dashboard,
        element: <Dashboard />,
        showInNav: true,
      },
      {
        path: "danesh-create",
        name: " شبکه دانش",
        icon: network,
        element: <CreateDanesh />,
        showInNav: true,
      },
      {
        path: "danesh-network",
        name: "ایجاد دانش",
        icon: create,
        element: <DaneshNetwork />,
        showInNav: true,
      },
      {
        path: "learn-way",
        name: "مسیر های آموزشی",
        icon: learn,
        element: <LearningRow />,
        showInNav: true,
      },
      {
        path: "danesh-reQ",
        name: "درخواست های دانشی (تصمیم یاری)",
        icon: requset,
        element: <DaneshReQ />,
        showInNav: true,
      },
      {
        path: "danesh-answer",
        name: "پاسخ های دانشی",
        icon: answer,
        element: <DaneshAnswer />,
        showInNav: true,
      },
      {
        path: "my-danesh",
        name: "کارتابل دانش های من",
        icon: my,
        element: <MyDanesh />,
        showInNav: true,
      },
      {
        path: "effective-managing",
        name: "کارتابل مدیریت بهره وری",
        icon: effective,
        element: <EffectiveManaging />,
        showInNav: true,
      },
      {
        path: "danesh-managing",
        name: "کارتابل مدیریت دانش ها",
        icon: managing,
        element: <DaneshManaging />,
        showInNav: true,
      },
      {
        path: "test-managing",
        name: "کارتابل ارزیابی",
        icon: test,
        element: <TestManaging />,
        showInNav: true,
      },
      {
        path: "bachelor",
        name: "کارتابل کارشناسی",
        icon: bachelor,
        element: <Bachelor />,
        showInNav: true,
      },
     
    ],
  },
];

export const CreateRouter = createBrowserRouter(routes);
