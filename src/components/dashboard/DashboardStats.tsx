import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Target, TrendingUp, Copy, Check } from "lucide-react";
import { InternData } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

interface DashboardStatsProps {
  internData: InternData;
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({ internData }) => {
  const [copied, setCopied] = React.useState(false);
  const { toast } = useToast();

  const copyReferralCode = async () => {
    try {
      await navigator.clipboard.writeText(internData.referralCode);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Referral code copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please copy the code manually",
        variant: "destructive",
      });
    }
  };

  const progress = Math.min((internData.totalDonations / 5000) * 100, 100);
  const nextGoal = internData.totalDonations < 2500 ? 2500 : 5000;
  const remaining = nextGoal - internData.totalDonations;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Total Donations */}
      <Card className="shadow-soft border-0 bg-gradient-secondary/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
          <DollarSign className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">
            ${internData.totalDonations.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            +12% from last month
          </p>
        </CardContent>
      </Card>

      {/* Rank */}
      <Card className="shadow-soft border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
          <TrendingUp className="h-4 w-4 text-secondary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-secondary">
            #{internData.rank}
          </div>
          <p className="text-xs text-muted-foreground">
            Out of 25 interns
          </p>
        </CardContent>
      </Card>

      {/* Next Goal */}
      <Card className="shadow-soft border-0 md:col-span-2 lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Next Goal</CardTitle>
          <Target className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">
            ${remaining > 0 ? remaining.toLocaleString() : "Achieved!"}
          </div>
          <p className="text-xs text-muted-foreground">
            {remaining > 0 ? `To reach $${nextGoal.toLocaleString()}` : "Goal completed!"}
          </p>
        </CardContent>
      </Card>

      {/* Referral Code */}
      <Card className="shadow-soft border-0 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">Your Referral Code</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-gradient-secondary rounded-lg">
            <div>
              <Badge variant="secondary" className="text-lg font-mono px-4 py-2 bg-card">
                {internData.referralCode}
              </Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Share this code to track your referrals
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={copyReferralCode}
              className="ml-4 transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Progress */}
      <Card className="shadow-soft border-0">
        <CardHeader>
          <CardTitle className="text-lg">Progress to Next Level</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Current: ${internData.totalDonations.toLocaleString()}</span>
              <span>Goal: ${nextGoal.toLocaleString()}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="bg-gradient-success h-3 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min((internData.totalDonations / nextGoal) * 100, 100)}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((internData.totalDonations / nextGoal) * 100)}% complete
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};