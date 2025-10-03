import "../card.css";

interface CardProps {
  id: number | string;
  name: string;
  imageUrl: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <input type="hidden" id="card_id" name="card_id" value={props.id} />
      <img src={props.imageUrl} alt="" className="card-image"></img>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}
