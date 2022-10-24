import { MouseEventHandler } from 'react';
import './button.scss';

type ButtonProps = {
  text: string;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button ({ text, className, onClick }: ButtonProps) {
  return (
    <button className={`button ${className}}`} onClick={onClick}>{text}</button>
  );
}

export default Button;
