import dynamic from "next/dynamic";
// import DashBoard from "@/components/customHook/dashboard";
// import ProdcutsApi from "@/components/HarmannAssessment";
// import ComponentTranitionHook from "@/components/useTransition";
// import Altemetric from "@/components/Altemetric";

import TodoRedux from "../components/todoRedux";
const TodoApp = dynamic(() => import("../components/todoPractice"));

export default function Home() {
  return (
    <div>
      {/* <TodoApp /> */}
      <TodoRedux />
      {/* <TodoPractice /> */}
      {/* <DashBoard /> */}
      {/* <ComponentTranitionHook /> */}
      {/* <ProdcutsApi /> */}
      {/* <Altemetric /> */}
    </div>
  );
}
