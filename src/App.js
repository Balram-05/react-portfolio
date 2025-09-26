import React from "react";
import { Routes, Route } from "react-router-dom";

import Portfolio from "./components/Portfolio/Portfolio";
import Stopwatch from "./components/StopwatchProject/Stopwatch";
import Weather from "./components/WeatherProject/Weather";
import Todo from "./components/TodoProject/Todo";
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />

        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
