const FirstComponent = () => {
  return <h1>My very first component</h1>;
};

const NamedComponent = ({name})=>{
  return <p>My name is {name}</p>
}
  function App() {
    return (
      <div>
        <h1>Greetings!</h1>
        <FirstComponent />
        <NamedComponent name ="Ahmed"/>
      </div>
    );
  }
  // Create a root and render the app
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  