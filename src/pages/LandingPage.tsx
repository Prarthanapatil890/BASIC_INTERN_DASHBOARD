import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Trophy, Target, TrendingUp, Star, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ID
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Intern Dashboard</h1>
              <p className="text-xs text-muted-foreground">Fundraising Portal</p>
            </div>
          </div>
          <Button 
            onClick={onGetStarted}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Track Your
                </span>
                <br />
                <span className="text-foreground">Fundraising</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Impact
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join our intern community and make a difference while building your career. 
                Track donations, compete with peers, and unlock rewards as you contribute to meaningful causes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-muted"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Active Interns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">$50K+</div>
                <div className="text-sm text-muted-foreground">Raised Total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">12</div>
                <div className="text-sm text-muted-foreground">Organizations</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-3xl transform rotate-3"></div>
            <img 
              src={heroImage} 
              alt="Team collaboration" 
              className="relative rounded-2xl shadow-large w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and insights you need to maximize your fundraising impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-muted-foreground">
                Track your donations, progress, and impact with detailed analytics and beautiful visualizations.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Leaderboard</h3>
              <p className="text-muted-foreground">
                Compete with fellow interns and see where you rank in the fundraising leaderboard.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rewards System</h3>
              <p className="text-muted-foreground">
                Unlock achievements and rewards as you reach fundraising milestones and goals.
              </p>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Goal Tracking</h3>
              <p className="text-muted-foreground">
                Set personal targets and track your progress towards fundraising goals with visual indicators.
              </p>
            </CardContent>
          </Card>

          {/* Feature 5 */}
          <Card className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Insights</h3>
              <p className="text-muted-foreground">
                Get detailed insights into your fundraising trends and performance over time.
              </p>
            </CardContent>
          </Card>

          {/* Feature 6 */}
          <Card className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recognition</h3>
              <p className="text-muted-foreground">
                Get recognized for your contributions and share your impact with the community.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="shadow-large border-0 bg-gradient-primary/10 backdrop-blur">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to make an impact?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of dedicated interns and start tracking your fundraising journey today.
            </p>
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-medium"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
              ID
            </div>
            <span className="text-sm text-muted-foreground">© 2024 Intern Dashboard. Built for impact.</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Empowering the next generation of changemakers
          </div>
        </div>
      </footer>
    </div>
  );
};