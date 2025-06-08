import { Link } from 'react-router-dom';
import "./Button.css";

interface Props {
  title: string,
  to: string,
  className: string
}

export default function Button({ className, title, to}: Props) {
  return (
    <Link
      className={className}
      to={to}>
        {title}
    </Link>
  )
}