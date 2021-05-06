import "./Button.css";

const Button = ({ text, icon, isFloating, isPrimary }) => {
  return isFloating ? (
    <button
      className={
        isPrimary
          ? "Btn__primary Btn--floating"
          : "Btn__secondary Btn--floating"
      }
    >
      {icon}
    </button>
  ) : (
    <button className={isPrimary ? "Btn__primary" : "Btn__secondary"}>
      {text}
    </button>
  );
};

export default Button;
