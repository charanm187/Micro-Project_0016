import { useState } from "react";
import "./cardform.css";

function CardForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    /* =========================
       CARDHOLDER NAME
    ========================= */

    if (!name.trim()) {
      newErrors.name = "Can't be blank";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Wrong format, alphabets only";
    }


    /* =========================
       CARD NUMBER
       EXACTLY 16 DIGITS
    ========================= */

    const cleanNumber = number.replace(/\s/g, "");

    if (!cleanNumber) {
      newErrors.number = "Can't be blank";
    } else if (!/^\d{16}$/.test(cleanNumber)) {
      newErrors.number = "Wrong format, 16 digits required";
    }


    /* =========================
       EXPIRY MONTH
       1 - 12 (accept both 1 and 01)
    ========================= */

    const normalizedMonth = expMonth.trim().padStart(2, "0");

    if (!expMonth.trim()) {
      newErrors.expMonth = "Can't be blank";
    } else if (!/^(0?[1-9]|1[0-2])$/.test(expMonth)) {
      newErrors.expMonth = "Enter a month between 01 and 12";
    }


    /* =========================
       EXPIRY YEAR
       ANY 2 DIGITS
       00 - 99
    ========================= */

    if (!expYear.trim()) {
      newErrors.expYear = "Can't be blank";
    } else if (!/^\d{2}$/.test(expYear)) {
      newErrors.expYear = "Enter a valid 2-digit year";
    }


    /* =========================
       CVC
       EXACTLY 3 DIGITS
    ========================= */

    if (!cvc.trim()) {
      newErrors.cvc = "Can't be blank";
    } else if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = "Wrong format, 3 digits required";
    }


    /* =========================
       SHOW ERRORS
    ========================= */

    setErrors(newErrors);


    /* =========================
       STOP IF INVALID
    ========================= */

    if (Object.keys(newErrors).length > 0) {
      return;
    }


    /* =========================
       SEND DATA TO APP
    ========================= */

    onConfirm({
      name: name.trim().toUpperCase(),
      number: cleanNumber,
      expMonth: normalizedMonth,
      expYear: expYear,
      cvc: cvc,
    });
  }


  /* =========================
     FORMAT CARD NUMBER
  ========================= */

  function formatCardNumber(value) {
    const numbersOnly = value
      .replace(/\D/g, "")
      .slice(0, 16);

    return numbersOnly
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }


  return (
    <form
      className="card-form"
      onSubmit={handleSubmit}
    >

      {/* =========================
          CARDHOLDER NAME
      ========================= */}

      <div className="form-group">

        <label>
          CARDHOLDER NAME
        </label>

        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={name}
          onChange={(e) => {
            const value = e.target.value.replace(
              /[^a-zA-Z\s]/g,
              ""
            );

            setName(value);
          }}
        />

        {errors.name && (
          <p className="error">
            {errors.name}
          </p>
        )}

      </div>


      {/* =========================
          CARD NUMBER
      ========================= */}

      <div className="form-group">

        <label>
          CARD NUMBER
        </label>

        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={formatCardNumber(number)}
          onChange={(e) => {
            const value = e.target.value
              .replace(/\D/g, "")
              .slice(0, 16);

            setNumber(value);
          }}
        />

        {errors.number && (
          <p className="error">
            {errors.number}
          </p>
        )}

      </div>


      {/* =========================
          EXPIRY DATE + CVC
      ========================= */}

      <div className="details-row">

        {/* EXPIRY DATE */}

        <div className="expiry-section">

          <label>
            EXP. DATE (MM/YY)
          </label>

          <div className="expiry-inputs">

            {/* MONTH */}

            <div>

              <input
                type="text"
                placeholder="MM"
                maxLength="2"
                value={expMonth}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 2);

                  setExpMonth(value);
                }}
              />

              {errors.expMonth && (
                <p className="error">
                  {errors.expMonth}
                </p>
              )}

            </div>


            {/* YEAR */}

            <div>

              <input
                type="text"
                placeholder="YY"
                maxLength="2"
                value={expYear}
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 2);

                  setExpYear(value);
                }}
              />

              {errors.expYear && (
                <p className="error">
                  {errors.expYear}
                </p>
              )}

            </div>

          </div>

        </div>


        {/* CVC */}

        <div className="cvc-section">

          <label>
            CVC
          </label>

          <input
            type="text"
            placeholder="e.g. 123"
            maxLength="3"
            value={cvc}
            onChange={(e) => {
              const value = e.target.value
                .replace(/\D/g, "")
                .slice(0, 3);

              setCvc(value);
            }}
          />

          {errors.cvc && (
            <p className="error">
              {errors.cvc}
            </p>
          )}

        </div>

      </div>


      {/* =========================
          CONFIRM BUTTON
      ========================= */}

      <button
        className="confirm-button"
        type="submit"
      >
        Confirm
      </button>

    </form>
  );
}

export default CardForm;