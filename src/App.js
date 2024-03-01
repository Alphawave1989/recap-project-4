import "./App.css";
import Form from "./components/Form/Form.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [{ id: 2, name: "testName", goodWeather: true }],
  });
  function handleAddActivity(data) {
    setActivities([{ id: uid(), ...data }, ...activities]);
    console.log(activities);
  }

  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
