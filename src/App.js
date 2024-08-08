import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { WelcomePage } from "./routes/WelcomePage/WelcomePage";
import { SkillPage } from "./routes/SkillPage/SkillPage";
import { ProjectPage } from "./routes/ProjectPage/ProjectPage";
import { ContactPage } from "./routes/ContactPage/ContactPage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomePage />
      <SkillPage />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
