import { useEffect, useState } from "react";;
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import RoutesList from "./Components/RoutesList/RoutesList";

// shift + alt + f позволяет форматировать код(выставлять скопированный текст в красивом виде)

function App() {
  return (
    <>
      <div className="app-layout">
        <Navbar />
        <div className="app-container">
          <Sidebar />
          <div className="content">
            <RoutesList />
          </div>
        </div>
      </div>
    </>
  );
}


// function App() {
//     const [forecasts, setForecasts] = useState();

//     useEffect(() => {
//         populateWeatherData();
//     }, []);

//     const contents = forecasts === undefined
//         ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//         : <table className="table table-striped" aria-labelledby="tableLabel">
//             <thead>
//                 <tr>
//                     <th>Date</th>
//                     <th>Temp. (C)</th>
//                     <th>Temp. (F)</th>
//                     <th>Summary</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {forecasts.map(forecast =>
//                     <tr key={forecast.date}>
//                         <td>{forecast.date}</td>
//                         <td>{forecast.temperatureC}</td>
//                         <td>{forecast.temperatureF}</td>
//                         <td>{forecast.summary}</td>
//                     </tr>
//                 )}
//             </tbody>
//         </table>;

//     return (
//         <div>
//             <h1 id="tableLabel">Weather forecast</h1>
//             <p>This component demonstrates fetching data from the server.</p>
//             {contents}
//         </div>
//     );

//     async function populateWeatherData() {
//         const response = await fetch('weatherforecast');
//         const data = await response.json();
//         setForecasts(data);
//     }
// }

export default App;
