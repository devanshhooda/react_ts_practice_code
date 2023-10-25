import Alert from "./components/Alert";
import DismissingHeader from "./components/DimissingHeader";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const ncr = ["New Delhi", "Gurugram", "Noida", "Faridabad", "Greater Noida"];

  const handleItemSelect = (item: String) => console.log(`${item} is selected`);

  const [showHeader, toggleHeader] = useState(false);

  return (
    <div>
      {/* <ListGroup
        ncr={ncr}
        heading={"NCR Cities List"}
        onSelected={handleItemSelect}
      /> */}
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      <DismissingHeader
        // description={"You should check in on some of those fields below."}
        onClose={() => toggleHeader(false)}
        showHeader={showHeader}
        title={"Holy guacamole!"}
      />
      <Button
        onClick={() => {
          console.log("Submit button Clicked");
          toggleHeader(true);
        }}
        color="danger"
        text={"Submit"}
      />
    </div>
  );
}

export default App;
