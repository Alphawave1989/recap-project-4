import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      goodWeather: event.target.goodWeather.checked,
    };
    onAddActivity(data);
    event.target.reset();
    event.target.name.focus();
  }
  return (
    <form className="form" aria-label="activity-form" onSubmit={handleSubmit}>
      <h2>Add new activity:</h2>
      <section className="form_section">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text"></input>
      </section>
      <section className="form_section">
        <label htmlFor="goodWeather">Good-Weather activity:</label>
        <input id="goodWeather" type="checkbox" />
      </section>
      <button type="submit" name="submit">
        Submit
      </button>
    </form>
  );
}
