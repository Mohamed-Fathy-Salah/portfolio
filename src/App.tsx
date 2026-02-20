import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { SectionList } from './pages/SectionList';
import { DetailView } from './pages/DetailView';
import { experiences, projects, awards, education, coursesAndBooks } from './data/portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="experience" element={
            <SectionList title="Work Experience" items={experiences} type="experience" />
          } />

          <Route path="projects" element={
            <SectionList title="Featured Projects" items={projects} type="project" />
          } />

          <Route path="awards" element={
            <SectionList title="Honors & Awards" items={awards} type="award" />
          } />

          <Route path="education" element={
            <SectionList title="Education" items={education} type="education" />
          } />

          <Route path="courses" element={
            <SectionList title="Courses & Books" items={coursesAndBooks} type="course" />
          } />

          {/* Details Routes - using the same component but generic generic path */}
          <Route path=":type/:id" element={<DetailView />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
