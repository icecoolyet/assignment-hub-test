import React, { useState } from 'react';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { Navbar, Footer } from './components/Layout';
import { Login } from './components/Login';
import { TeacherDashboard } from './components/TeacherDashboard';
import { SubmissionTracker } from './components/SubmissionTracker';
import { StudentDashboard } from './components/StudentDashboard';

type View = 'login' | 'teacher-dashboard' | 'submission-tracker' | 'student-dashboard';
type Role = 'teacher' | 'student' | null;

export default function App() {
  const [currentView, setCurrentView] = useState<View>('login');
  const [userRole, setUserRole] = useState<Role>(null);

  const handleLogin = (role: 'teacher' | 'student') => {
    setUserRole(role);
    setCurrentView(role === 'teacher' ? 'teacher-dashboard' : 'student-dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentView('login');
  };

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'teacher-dashboard':
        return <TeacherDashboard onViewTracker={() => setCurrentView('submission-tracker')} />;
      case 'submission-tracker':
        return <SubmissionTracker onBack={() => setCurrentView('teacher-dashboard')} />;
      case 'student-dashboard':
        return <StudentDashboard />;
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <BackgroundAnimation />
      
      {currentView !== 'login' && userRole && (
        <Navbar 
          userRole={userRole} 
          userName="สมชาย ใจดี" 
          onLogout={handleLogout}
          onNavigate={(view) => setCurrentView(view as View)}
          currentView={currentView}
        />
      )}

      <main className="flex-grow">
        {renderView()}
      </main>

      {currentView !== 'login' && <Footer />}
    </div>
  );
}
