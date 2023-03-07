import "./_button.scss";

function Button({ text, icon, modifiers, selected, clickHandler }) {
  return (
    <button
      className={`btn ${modifiers} ${selected ? "selected" : ""}`}
      onClick={clickHandler}
    >
      <span className="btn__icon">{icon}</span>
      {text}
    </button>
  );
}

export default Button;
