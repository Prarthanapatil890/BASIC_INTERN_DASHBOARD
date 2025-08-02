import React, { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";

interface AuthProps {
  onAuthSuccess: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-large">
              ID
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Intern Dashboard
          </h1>
          <p className="text-muted-foreground">
            Track your fundraising progress and compete with fellow interns
          </p>
        </div>

        {/* Auth Form */}
        {isLogin ? (
          <LoginForm
            onLoginSuccess={onAuthSuccess}
            onSwitchToSignup={() => setIsLogin(false)}
          />
        ) : (
          <SignupForm
            onSignupSuccess={onAuthSuccess}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}

        {/* Demo Info */}
        <div className="mt-8 text-center">
          <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-border/50">
            <p className="text-sm text-muted-foreground mb-2 font-medium">
              Demo Credentials
            </p>
            <p className="text-xs text-muted-foreground">
              Email: any email • Password: any password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};