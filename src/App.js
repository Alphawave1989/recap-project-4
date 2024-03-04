import "./App.css";
import { useEffect } from "react";
import { uid } from "uid";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: [],
  });

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.error("Error");
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchWeather();
    const timer = setInterval(() => {
      fetchWeather();
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [setWeather]); // useEffect wird jedes mal ausgeführt, wenn sich setWeather verändert.

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <div className="app">
      {weather === null ? (
        <h1 className="app__heading">Wetter wird geladen ...</h1>
      ) : (
        <>
          <h1 className="app__heading">
            <span>{weather.condition}</span>
            <span>{weather.temperature} °C</span>
          </h1>
          <List
            activities={filteredActivities}
            isGoodWeather={weather.isGoodWeather}
            onDeleteActivity={handleDeleteActivity}
          />
          <Form onAddActivity={handleAddActivity} />
        </>
      )}
    </div>
  );
}

export default App;
