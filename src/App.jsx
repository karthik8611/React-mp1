import "./styles/App.css";
import CreditCard from "./components/CreditCard";
import FormControl from "./components/Form";
import { useState } from "react";

function App() {
  //form data for inputs value and cards rendering
  const [formInfo, setFormInfo] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  return (
    <main className="app">
      <picture>
        <img src="./images/bg-main-desktop.png" alt="background" />
      </picture>
      <aside className="card-wrapper">
        <CreditCard
          name={formInfo.name}
          number={formInfo.number}
          month={formInfo.month}
          year={formInfo.year}
          side={false}
        />
        <CreditCard cvc={formInfo.cvc} side={true} />
      </aside>
      <div className="form-wrapper">
        <FormControl handleData={setFormInfo} data={formInfo} />
      </div>
    </main>
  );
}

export default App;
