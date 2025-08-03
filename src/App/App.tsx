import "./App.css";
import {StoreProvider} from "@/App/Provider/StoreProvider.tsx";
import {BrowserProvider} from "@/App/Provider/BrowserProvider.tsx";

function App() {
    return (
        <StoreProvider>
            <BrowserProvider/>
        </StoreProvider>
    );
}

export default App;
