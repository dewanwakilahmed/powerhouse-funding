import { FC, ReactNode } from 'react';
import Link from 'next/link';

// CSS Import
import './button.css';

interface ButtonProps {
  className: string;
  btnType: 'primary' | 'secondary';
  onClick?: () => void;
  goTo: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  className,
  btnType,
  onClick,
  goTo,
  children,
}) => {
  return (
    <button className={`${className} btn ${btnType}`} onClick={onClick}>
      <Link href={`${goTo}`}>{children}</Link>
    </button>
  );
};

export default Button;
