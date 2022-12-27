import './assets/styles.scss';
import { Header, Hero, About } from './components';
import Projects from './components/projects/Projects';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <Projects />
        </div>
    );
}

export default App;
