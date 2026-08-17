import { useState } from "react";
import CreditCard from "./components/CreditCard";
import CardForm from "./components/CardForm";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(null);
  const [showToast, setShowToast] = useState(false);

  function handleConfirm(values) {
    setSubmitted(values);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  }

  return (
    <div className="app">

      <div className="purple-background"></div>

      <div className="main-container">

        <div className="cards-section">
          <CreditCard
            name={submitted?.name}
            number={submitted?.number}
            expMonth={submitted?.expMonth}
            expYear={submitted?.expYear}
            cvc={submitted?.cvc}
          />
        </div>

        <div className="form-section">
          <CardForm onConfirm={handleConfirm} />
        </div>

      </div>

      {showToast && (
        <div className="toast">
          Card details confirmed successfully!
        </div>
      )}

    </div>
  );
}

export default App;