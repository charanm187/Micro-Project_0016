import "./creditcard.css";

function CreditCard({
  name,
  number,
  expMonth,
  expYear,
  cvc,
}) {
  const displayNumber =
    number || "0000 0000 0000 0000";

  const formattedNumber = displayNumber
    .replace(/\s/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

  return (
    <div className="credit-cards">

      {/* FRONT CARD */}
      <div className="front-card">

        <div className="card-top">
          <div className="card-logo">
            <div className="logo-large"></div>
            <div className="logo-small"></div>
          </div>
        </div>

        <div className="card-number">
          {formattedNumber}
        </div>

        <div className="card-bottom">

          <span className="card-name">
            {name || "JANE APPLESEED"}
          </span>

          <span className="card-expiry">
            {expMonth || "00"}/{expYear || "00"}
          </span>

        </div>

      </div>


      {/* BACK CARD */}
      <div className="back-card">

        <div className="magnetic-strip"></div>

        <div className="cvc-area">
          {cvc || "000"}
        </div>

        <div className="back-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </div>
  );
}

export default CreditCard;