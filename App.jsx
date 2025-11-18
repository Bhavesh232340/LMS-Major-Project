import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './course_management/CourseNavigationBar';
import CourseRegister from './course_management/CourseRegister';
import CourseUpdate from './course_management/CourseUpdate';
import CourseDelete from './course_management/CourseDelete';
import CourseList from './course_management/CourseList';
import CourseDetails from './course_management/CourseDetails';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<CourseRegister />} />
        <Route path="/update" element={<CourseUpdate />} />
        <Route path="/delete" element={<CourseDelete />} />
        <Route path="/list" element={<CourseList />} />
        <Route path="/details" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;