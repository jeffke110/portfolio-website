import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import ProjectSetOne from './sections/CplusplusProjects.jsx';
import ProjectSetTwo from './sections/PythonProjects.jsx';
import ProjectSetThree from './sections/UnrealProjects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <ProjectSetOne/>
      <ProjectSetTwo/>
      <ProjectSetThree/>
      <WorkExperience/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;
