import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<p>home</p>} />
        </Routes>
    );
}

export default App;