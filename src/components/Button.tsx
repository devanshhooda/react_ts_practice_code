interface ButtonProps {
  text: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ text, color, onClick }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
