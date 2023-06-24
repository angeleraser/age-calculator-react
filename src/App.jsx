import "./assets/css/index.css";
import { Card } from "./components/Card/Card";

import { AgeForm } from "./components/AgeForm/AgeForm";

function App() {
  return (
    <Card maxWidth="840px">
      <AgeForm onSubmit={console.log} />
    </Card>
  );
}

export default App;
