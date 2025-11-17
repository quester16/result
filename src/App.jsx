import { useViewportSize } from "./components/useViewportSize";

function App() {
  const { height, width } = useViewportSize();

  return (
    <div>
      Width: {width}, height: {height}
    </div>
  );
}

export default App;
