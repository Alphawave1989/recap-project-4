import "./List.css";

export default function List({ filteredActivities, id, goodWeather }) {
  return (
    <>
      <h2>
        {goodWeather
          ? "schönes Wetter! geh raus!"
          : "schlechtes Wetter! bleib zu Hause"}
      </h2>
      <ul className="list">
        {filteredActivities.map((activity) => (
          <li key={activity.id} className="item">
            {activity.name}
          </li>
        ))}
      </ul>
    </>
  );
}
