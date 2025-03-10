import { Link } from 'react-router-dom';
import "./Button.css";

interface Props {
  title: string,
  to: string,
  className: string
}

export default function Button({ title, to}: Props) {
  return (
    <Link className="btn" to={to}>
      {title}
    </Link>
  )
}