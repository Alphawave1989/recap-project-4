import "./List.css";

export default function List({ activities, id }) {
  return (
    <>
      <ul className="list">
        {activities.map((activity) => (
          <li key={id} className="item">
            {activity.name}
          </li>
        ))}
      </ul>
    </>
  );
}
