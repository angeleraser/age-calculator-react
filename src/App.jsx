import "./assets/css/index.css";
import { Card } from "./components/Card/Card";

import { AgeForm } from "./components/AgeForm/AgeForm";
import { Heading } from "./components/Heading/Heading";

function App() {
  return (
    <Card maxWidth="840px">
      <AgeForm onSubmit={console.log} />

      <div className="headings-container">
        <Heading value="" label="years" />
        <Heading value="" label="months" />
        <Heading value="" label="days" />
      </div>
    </Card>
  );
}

export default App;
