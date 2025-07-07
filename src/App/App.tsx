import "./App.css";
import { BrowserProvider } from "./Provider/BrowserProvider.tsx";
import { StoreProvider } from "./Provider/StoreProvider.tsx";

function App() {
  return (
    <StoreProvider>
      <BrowserProvider />
    </StoreProvider>
  );
}

export default App;
