import "./App.css";
import Form from "./components/Form/Form.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./components/List/List.js";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [{ id: 2, name: "testName", goodWeather: true }],
  });
  function handleAddActivity(data) {
    setActivities([{ ...data, id: uid() }, ...activities]);
    console.log(activities);
  }

  return (
    <div className="box">
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

//orginale Fassung

export default App;
