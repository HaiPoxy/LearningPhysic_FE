import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import ExamList from './ExamPage/ExamList';
import DoingExam from './ExamPage/DoingExam';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ExamList />} />
        <Route path="/doing-exam/:className" element={<DoingExam />} />
      </Routes>
    </>
  );
}

export default App;
