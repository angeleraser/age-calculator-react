import "./assets/css/index.css";
import { ArrowIcon } from "./components/ArrowIcon/ArrowIcon";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { Heading } from "./components/Heading/Heading";

function App() {
  return (
    <Card maxWidth="840px">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio error
      asperiores ab illo, rem enim perspiciatis molestiae numquam harum
      voluptatibus, quisquam eveniet id incidunt beatae? Asperiores nam sequi
      optio doloribus!
      <br />
      <Button color="primary" rounded>
        <ArrowIcon />
      </Button>
      <Heading value="12" label="years" />
      <Heading label="months" />
      <Heading value="12" label="days" />
    </Card>
  );
}

export default App;
