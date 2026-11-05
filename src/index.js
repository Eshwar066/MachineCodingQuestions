import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CarsouselTest from "./List/Carosuel/carosuelTest";
import UseFetch from "./List/CustomHook/user";
import Accordion from "./List/Accordian/Accordian";
import AccordianTest from "./List/Accordian/AccordianTest";
import InfiniteScroll from "./List/InfiniteScroll/InfiniteScroll";
import Virtualization from "./List/Virtualization/Virtualization";
import VirtualizationTest from "./List/Virtualization/VirtualizationTest";
import ProgressBar from "./List/ProgressBar/ProgressBar";
import Calendar from "./List/Calendar/Calendar";
import Notification from "./List/Portals/Notification";
import Timer from "./List/Timer/Timer";
import Calculator from "./List/Calculator/Calculator";
import BackgroundColorChanger from "./List/BackgroundColorChanger/BackgroundColorChanger";
import Pagination from "./List/Pagination/Pagination";
import Table from "./List/Table/Table";
import Todo from "./List/Todo/Todo";
import Form from "./List/Form/Form";
import Reusabel from "./List/RecursionQuestions/Reusable";
import Button from "./List/GenericButton/Button";
import AutoCompleteSearch from "./List/AutoCompleteSearch/AutoCompleteSearch"
import ProductListing from "./List/ProductListingPage/ProductListingPage"
import Stopwatch from "./List/Timer/StopWatch";
import TrafficLight from "./List/Trafficlight/TrafficLight";
import CountdownTimer from "./List/Timer/PorterTimer"
import Carosuel from "./List/Carosuel1/Carosuel"
import NestedAccordian from "./List/RecursionQuestions/NestedAccordian1";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
  <StrictMode>
    {
      // <Accordion />
      // <AccordianTest />
      // <AutoCompleteSearch/>
      // <CarsouselTest />
      // <UseFetch />
      // <InfiniteScroll />
      // <Virtualization />
      // <ProgressBar />
      // <VirtualizationTest />
      // <Calendar />
      // <Notification/>
      // <Timer/>
      // <Calculator/>
      // <BackgroundColorChanger/>
      // <Pagination/>
      // <Table/>
      // <Todo/>
      // <Form/>
      // <Reusabel/>
      // <Button />
      // <ProductListing/>
      // <Stopwatch/>
      // <TrafficLight/>
      // <CountdownTimer/>
      // <ProgressBar speed={20}/>
      // <Carosuel/>
      <NestedAccordian/>
    }
  </StrictMode>
);
