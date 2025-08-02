import React, { useState, useEffect } from "react";
import { LandingPage } from "./LandingPage";
import { Auth } from "./Auth";
import { Dashboard } from "./Dashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'auth' | 'dashboard'>('landing');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem("authToken");
    if (token) {
      setCurrentView('dashboard');
    }
    setIsLoading(false);
  }, []);

  const handleGetStarted = () => {
    setCurrentView('auth');
  };

  const handleAuthSuccess = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setCurrentView('landing');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl animate-pulse mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (currentView === 'landing') {
    return <LandingPage onGetStarted={handleGetStarted} />;
  } else if (currentView === 'auth') {
    return <Auth onAuthSuccess={handleAuthSuccess} />;
  } else {
    return <Dashboard onLogout={handleLogout} />;
  }
};

export default Index;
