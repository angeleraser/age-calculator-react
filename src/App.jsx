import "./assets/css/index.css";
import { ArrowIcon } from "./components/ArrowIcon";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";

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
    </Card>
  );
}

export default App;
