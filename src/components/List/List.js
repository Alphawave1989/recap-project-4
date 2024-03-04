import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "Schönes Wetter! Geh raus!"
          : "Schlechtes Wetter! Zeit um zu Hause zu bleiben!"}
      </h2>
      <ul className="list">
        {activities.map((activity) => (
          <li key={activity.id} className="list__item">
            {activity.name}
            <button
              type="button"
              aria-label="delete list item"
              className="list__item-delete-button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
