import React from "react";
// import State from "./Interview/State";
import Var from "./Var";
import Effect from "./Effect";
import Map from "./Map";
import Axioss from "./Axios";
import Usestate from "./Interview/Usestate";
import Http from "./Interview/Http";
import C from "./Interview/ClassC";
import Parent from "./PropsC";
import Useref from "./Useref";
import Redux from "./Redux";
import Propsp from "./Propsp";
import Statess from "./Statess";
function App() {
  const value = '20'
  return (
    <>
    {/* <State /> */}
    {/* <Var text={'abcddef'} date="123"/> */}
    {/* <Effect /> */}
     <br />
     {/* <Map /> */}
     {/* <Axioss /> */}
     {/* <Useref /> */}
    {/* <Redux value={value}/> */}
    <Statess />
      <br />
      {/* <Propsp obj={{name: 'pratik', class: 'BCA', Color: 'Black'}} obj2={{name: 'Harish', class: 'ABC', Color: 'Red'}}  /> */}
      {/* <Usestate /> */}
      {/* <Http /> */}
      {/* <C /> */}
      {/* <Parent /> */}
    </>
  );
}

export default App;
