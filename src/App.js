import { Button } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import testApi from "./api/testApi";

function App() {
  const [idValue, setIdValue] = useState("");
  const [responseValue, setResponseValue] = useState("");

  const handleSubmit = async () => {
    if (idValue) {
      const response = await testApi.getTestResponse(idValue);

      if (response) {
        console.log("response.data", JSON.stringify(response));
        setResponseValue(JSON.stringify(response));
      }
    }
  };

  return (
    <div className="App">
      <div className="d-flex align-items-center justify-content-center flex-column h-100">
        <div>
          <label className="fw-bold me-2">ID: </label>
          <input
            onChange={(e) => {
              setIdValue(e.target.value);
            }}
          />
        </div>
        <div>
          <Button variant="primary" className="mt-3" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
        <div className="mt-4 fw-bold">{responseValue}</div>
      </div>
    </div>
  );
}

export default App;
