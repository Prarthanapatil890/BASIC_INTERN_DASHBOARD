import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Target } from "lucide-react";
import { LeaderboardEntry } from "@/lib/api";

interface LeaderboardProps {
  leaderboard: LeaderboardEntry[];
  currentUserId: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard, currentUserId }) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <Target className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getRankBadgeVariant = (rank: number) => {
    switch (rank) {
      case 1:
        return "default";
      case 2:
        return "secondary";
      case 3:
        return "outline";
      default:
        return "secondary";
    }
  };

  const getCardStyle = (rank: number, isCurrentUser: boolean) => {
    let baseStyle = "shadow-soft transition-all duration-300 hover:shadow-medium ";
    
    if (isCurrentUser) {
      baseStyle += "ring-2 ring-primary/50 bg-gradient-secondary/30 ";
    }
    
    switch (rank) {
      case 1:
        return baseStyle + "border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50";
      case 2:
        return baseStyle + "border-gray-200 bg-gradient-to-r from-gray-50 to-slate-50";
      case 3:
        return baseStyle + "border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50";
      default:
        return baseStyle + "border-border";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Fundraising Leaderboard
        </h2>
        <p className="text-muted-foreground mt-2">
          See how you stack up against other interns
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {leaderboard.slice(0, 3).map((entry, index) => (
          <Card
            key={entry.id}
            className={`${getCardStyle(entry.rank, entry.id === currentUserId)} ${
              index === 0 ? 'md:order-2' : index === 1 ? 'md:order-1' : 'md:order-3'
            }`}
          >
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {getRankIcon(entry.rank)}
              </div>
              <Avatar className="mx-auto mb-4 h-16 w-16">
                {entry.avatar ? (
                  <img src={entry.avatar} alt={entry.name} className="w-full h-full object-cover" />
                ) : (
                  <AvatarFallback className="bg-gradient-primary text-white font-bold text-lg">
                    {entry.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                )}
              </Avatar>
              <h3 className="font-semibold text-lg mb-2">{entry.name}</h3>
              <p className="text-2xl font-bold text-primary mb-2">
                ${entry.totalDonations.toLocaleString()}
              </p>
              <Badge variant={getRankBadgeVariant(entry.rank)}>
                Rank #{entry.rank}
              </Badge>
              {entry.id === currentUserId && (
                <Badge variant="outline" className="ml-2 text-primary border-primary">
                  You
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Leaderboard */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-primary" />
            <span>Complete Rankings</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {leaderboard.map((entry) => (
              <div
                key={entry.id}
                className={`p-4 flex items-center justify-between hover:bg-muted/50 transition-colors ${
                  entry.id === currentUserId ? 'bg-gradient-secondary/20' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8">
                    {getRankIcon(entry.rank)}
                  </div>
                  <Avatar className="h-10 w-10">
                    {entry.avatar ? (
                      <img src={entry.avatar} alt={entry.name} className="w-full h-full object-cover" />
                    ) : (
                      <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                        {entry.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold">{entry.name}</p>
                      {entry.id === currentUserId && (
                        <Badge variant="outline" className="text-xs text-primary border-primary">
                          You
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Rank #{entry.rank}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-primary">
                    ${entry.totalDonations.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    total raised
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};