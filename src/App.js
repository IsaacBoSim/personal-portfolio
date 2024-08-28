import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { WelcomePage } from "./routes/WelcomePage/WelcomePage";
import { SkillPage } from "./routes/SkillPage/SkillPage";
import { ProjectPage } from "./routes/ProjectPage/ProjectPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomePage />
      <SkillPage />
      <ProjectPage />
    </div>
  );
}

export default App;
