import "./GridContainerFullWidth.css";

interface Props {
    title: string,
}

export default function GridContainerFullWidth({title}: Props) {
  return (
    <div className="GridContainerFullWidth">
        <article className="gridItem">
            <div className="gridItem-inner">
                <h3>{title}</h3>
            </div>
        </article>
    </div>
  );
}