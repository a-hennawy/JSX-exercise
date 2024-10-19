const hobbyArr = ["Reading", "Cooking", "Hiking", "Swimming", "Cycling"];

const Person = ({ name, age, hobbies = hobbyArr }) => {
  let msg;
  let nameToReturn;

  const randomIdx = Math.floor(Math.random() * hobbies.length);
  let hobby = hobbies[randomIdx];

  if (age > 18) {
    msg = "please go vote!";
  } else {
    msg = "you must be 18!";
  }
  if (name.length > 8) {
    nameToReturn = name.slice(0, 6);
  } else {
    nameToReturn = name;
  }
  return (
    <div>
      <p>Learn more about the person</p>;<h2>Name: {nameToReturn}</h2>
      <h2>Message: {msg}</h2>
      <h2>Hobby: {hobby} </h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Person name="P1" age={12} />
      <Person name="P2" age={21} />
      <Person name="P1" age={18} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
