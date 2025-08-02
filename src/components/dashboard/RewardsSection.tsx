import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lock, CheckCircle } from "lucide-react";
import { Reward } from "@/lib/api";

interface RewardsSectionProps {
  rewards: Reward[];
  totalDonations: number;
}

export const RewardsSection: React.FC<RewardsSectionProps> = ({ rewards, totalDonations }) => {
  const unlockedRewards = rewards.filter(r => r.unlocked);
  const nextReward = rewards.find(r => !r.unlocked);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Rewards & Achievements</h2>
        <Badge variant="secondary" className="bg-gradient-secondary text-secondary-foreground">
          {unlockedRewards.length}/{rewards.length} Unlocked
        </Badge>
      </div>

      {/* Next Reward Progress */}
      {nextReward && (
        <Card className="shadow-medium border-primary/20 bg-gradient-secondary/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">{nextReward.icon}</span>
              <div>
                <h3 className="text-lg font-semibold">{nextReward.title}</h3>
                <p className="text-sm text-muted-foreground">{nextReward.description}</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>${totalDonations.toLocaleString()} raised</span>
                <span>${nextReward.requiredAmount.toLocaleString()} needed</span>
              </div>
              <Progress 
                value={(totalDonations / nextReward.requiredAmount) * 100} 
                className="h-3"
              />
              <p className="text-xs text-muted-foreground">
                ${(nextReward.requiredAmount - totalDonations).toLocaleString()} remaining to unlock
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Rewards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rewards.map((reward) => (
          <Card 
            key={reward.id} 
            className={`shadow-soft transition-all duration-300 ${
              reward.unlocked 
                ? 'border-success/20 bg-gradient-secondary/20' 
                : 'border-border bg-muted/10'
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className={`text-3xl ${reward.unlocked ? '' : 'grayscale opacity-50'}`}>
                  {reward.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className={`font-semibold text-sm ${
                      reward.unlocked ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {reward.title}
                    </h3>
                    {reward.unlocked ? (
                      <CheckCircle className="h-4 w-4 text-success" />
                    ) : (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <p className={`text-xs mt-1 ${
                    reward.unlocked ? 'text-muted-foreground' : 'text-muted-foreground/70'
                  }`}>
                    {reward.description}
                  </p>
                  <div className="mt-2">
                    <Badge 
                      variant={reward.unlocked ? "default" : "secondary"}
                      className={`text-xs ${
                        reward.unlocked 
                          ? 'bg-success text-success-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      ${reward.requiredAmount.toLocaleString()}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};