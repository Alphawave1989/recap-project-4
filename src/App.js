import "./App.css";
import Form from "./components/Form/Form.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./components/List/List.js";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [{ id: 2, name: "testName" }],
  });

  const [weather, setWeather] = useState([]);
  console.log(weather);

  const filteredActivities = activities.filter(
    (activities) => activities.goodWeather === weather.goodWeather
  );

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();

      setWeather(data);
    }

    fetchWeather();
  }, [setWeather]);

  function handleAddActivity(data) {
    setActivities([{ ...data, id: uid() }, ...activities]);
    console.log(activities);
  }
  if (!weather) return;
  return (
    <div className="box">
      {weather === null ? (
        <h1 className="app-heading">Wetter wird geladen ..</h1>
      ) : (
        <>
          <h1 className="app-heading">
            <span>{weather.condition}</span>
            <span>{weather.temperature} °C</span>
          </h1>
          <List
            filteredActivities={filteredActivities}
            goodWeather={weather.goodWeather}
          />
          <Form onAddActivity={handleAddActivity} />
        </>
      )}
    </div>
  );
}

export default App;
