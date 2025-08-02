import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, Trophy, Users } from "lucide-react";
import { InternData } from "@/lib/api";

interface DashboardHeaderProps {
  internData: InternData;
  onLogout: () => void;
  onNavigate: (page: 'dashboard' | 'leaderboard') => void;
  currentPage: 'dashboard' | 'leaderboard';
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  internData, 
  onLogout, 
  onNavigate, 
  currentPage 
}) => {
  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ID
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Intern Dashboard</h1>
              <p className="text-sm text-muted-foreground">Fundraising Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex items-center space-x-4">
          <Button
            variant={currentPage === 'dashboard' ? 'default' : 'ghost'}
            onClick={() => onNavigate('dashboard')}
            className={currentPage === 'dashboard' ? 'bg-gradient-primary' : ''}
          >
            <Trophy className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={currentPage === 'leaderboard' ? 'default' : 'ghost'}
            onClick={() => onNavigate('leaderboard')}
            className={currentPage === 'leaderboard' ? 'bg-gradient-primary' : ''}
          >
            <Users className="mr-2 h-4 w-4" />
            Leaderboard
          </Button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <Avatar>
              {internData.avatar ? (
                <img src={internData.avatar} alt={internData.name} className="w-full h-full object-cover" />
              ) : (
                <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                  {internData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-foreground">{internData.name}</p>
              <p className="text-xs text-muted-foreground">Rank #{internData.rank}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onLogout}
            className="text-muted-foreground hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};