import "./button.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      className={`btn ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
