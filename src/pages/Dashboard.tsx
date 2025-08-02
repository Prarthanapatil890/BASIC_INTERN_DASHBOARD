import React from "react";
import { useQuery } from "@tanstack/react-query";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { RewardsSection } from "@/components/dashboard/RewardsSection";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { api } from "@/lib/api";
import { Loader2 } from "lucide-react";

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [currentPage, setCurrentPage] = React.useState<'dashboard' | 'leaderboard'>('dashboard');

  const { data: internData, isLoading: isLoadingIntern } = useQuery({
    queryKey: ['intern-data'],
    queryFn: api.getInternData,
  });

  const { data: rewards, isLoading: isLoadingRewards } = useQuery({
    queryKey: ['rewards'],
    queryFn: api.getRewards,
    enabled: currentPage === 'dashboard',
  });

  const { data: leaderboard, isLoading: isLoadingLeaderboard } = useQuery({
    queryKey: ['leaderboard'],
    queryFn: api.getLeaderboard,
    enabled: currentPage === 'leaderboard',
  });

  if (isLoadingIntern) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!internData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-destructive">Failed to load dashboard data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader
        internData={internData}
        onLogout={onLogout}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      <main className="container mx-auto px-4 py-8">
        {currentPage === 'dashboard' ? (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Welcome back, {internData.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-muted-foreground text-lg">
                You've raised ${internData.totalDonations.toLocaleString()} so far - keep up the great work!
              </p>
            </div>

            {/* Stats */}
            <DashboardStats internData={internData} />

            {/* Rewards */}
            {isLoadingRewards ? (
              <div className="text-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Loading rewards...</p>
              </div>
            ) : rewards ? (
              <RewardsSection rewards={rewards} totalDonations={internData.totalDonations} />
            ) : null}
          </div>
        ) : (
          <div>
            {isLoadingLeaderboard ? (
              <div className="text-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Loading leaderboard...</p>
              </div>
            ) : leaderboard ? (
              <Leaderboard leaderboard={leaderboard} currentUserId={internData.id} />
            ) : null}
          </div>
        )}
      </main>
    </div>
  );
};