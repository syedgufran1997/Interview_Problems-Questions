// import dynamic from "next/dynamic";
// import DashBoard from "@/components/customHook/dashboard";
// import ProdcutsApi from "@/components/HarmannAssessment";
// import ComponentTranitionHook from "@/components/useTransition";
// import Altemetric from "@/components/Altemetric";
// const TodoApp = dynamic(() => import("../components/todoPractice"));

import TodoReduxApp from "../components/todoRedux";

export default function Home() {
  return (
    <div>
      {/* <TodoApp /> */}
      {/* <TodoPractice /> */}
      {/* <DashBoard /> */}
      {/* <ComponentTranitionHook /> */}
      {/* <ProdcutsApi /> */}
      {/* <Altemetric /> */}
      <TodoReduxApp />
    </div>
  );
}
