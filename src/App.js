import Header from './components/header';
import Intro from './components/intro';
import Project from './components/project';
import weatherApp from './images/weather-app.png';
import calculator from './images/calculator.png';
import todo from './images/todo-app.png';
import etch from './images/etch.png';

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
        technology="JavaScript, HTML, CSS, Fetch API, Webpack"
      />
      <Project
        title="To-Do List "
        image={todo}
        link="https://jagroopbagri.github.io/to-do-list/"
        repo="https://github.com/JagroopBagri/to-do-list"
        summary="A To-Do app made with vanilla JavaScript and incorporates the use of local storage, so that the users list is saved on their device. Date-fns library was used to simplify the due dates."
        technology="JavaScript, HTML, CSS, Date-fns, Webpack"
      />
      <Project
        title="Calculator"
        image={calculator}
        link="https://jagroopbagri.github.io/calculator/"
        repo="https://github.com/JagroopBagri/calculator"
        summary="A calculator app that has decimal number and keyboard support. Uses vanilla JavaScript in order to force fundamental understanding of the language."
        technology="JavaScript, HTML, CSS"
      />
      <Project
        title="Etch-a-Sketch"
        image={etch}
        link="https://jagroopbagri.github.io/etch-a-sketch/"
        repo="https://github.com/JagroopBagri/etch-a-sketch"
        summary="An Etch-a-Sketch app that takes inspiration from the classic toy. Uses vanilla JavaScript in order to force fundamental understanding of the language."
        technology="JavaScript, HTML, CSS"
      />
    </div>
  );
}

export default App;
