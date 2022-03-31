import Header from './components/header';
import Intro from './components/intro';
import Project from './components/project';
import weatherApp from './images/weather-app.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Project
        title="Weather App"
        image={weatherApp}
        link="https://jagroopbagri.github.io/Weather-App/"
        repo="https://github.com/JagroopBagri/Weather-App"
        summary="A weather app that uses OpenWeather API to retrieve
        the current weather from any city or country in the world. Retrieved JSON data using Fetch API along with async/await. "
        technology="JavaScript, HTML, CSS, Webpack"
      />
    </div>
  );
}

export default App;
