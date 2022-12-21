import useSwr from "swr";
import "./App.css";

const fetchData = (url) => fetch(url).then((response) => response.json());

function App() {
  const { data, error, isLoading } = useSwr(
    "https://dummyjson.com/products/1",
    fetchData
  );
  console.log(data);
  return (
    <div className="App">
      <div>Home</div>
    </div>
  );
}

export default App;
