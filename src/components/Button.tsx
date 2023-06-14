interface ButtonProps {
  title: string;
  onClick(): void;
}

export const Button = ({ title, onClick }: ButtonProps) => (
  <button className="Button" onClick={onClick}>
    {title}
  </button>
);
