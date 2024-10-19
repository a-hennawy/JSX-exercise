const Tweet = ({ username, name, date, message }) => {
  return (
    <div class="container">
      <h2>
        {name}
        <h5>{username}</h5>
      </h2>
      <hr />
      <p>{message}</p>
      <small>{date}</small>
      <br />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Tweet
        username={"user_1"}
        name={"User1"}
        date={"12-04-2012"}
        message={"Hi I am Dev"}
      />
      <br />
      <Tweet
        username={"user_2"}
        name={"User2"}
        date={"12-04-2012"}
        message={"Hi I am Dev"}
      />
      <br />
      <Tweet
        username={"user_3"}
        name={"User3"}
        date={"12-04-2012"}
        message={"Hi I am Dev"}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
