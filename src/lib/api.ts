// Mock API functions to simulate backend responses
import sarahAvatar from "@/assets/avatar-sarah.jpg";
import michaelAvatar from "@/assets/avatar-michael.jpg";
import alexAvatar from "@/assets/avatar-alex.jpg";
import emmaAvatar from "@/assets/avatar-emma.jpg";
import davidAvatar from "@/assets/avatar-david.jpg";

export interface InternData {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  totalDonations: number;
  rank: number;
  joinDate: string;
  avatar?: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  requiredAmount: number;
  unlocked: boolean;
  icon: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  totalDonations: number;
  rank: number;
  avatar?: string;
}

// Mock data
const mockInternData: InternData = {
  id: "3",
  name: "Alex Johnson",
  email: "alex.johnson@company.com",
  referralCode: "alex2025",
  totalDonations: 2450,
  rank: 3,
  joinDate: "2024-01-15",
  avatar: alexAvatar
};

const mockRewards: Reward[] = [
  {
    id: "1",
    title: "First Donation",
    description: "Raise your first $100",
    requiredAmount: 100,
    unlocked: true,
    icon: "🎯"
  },
  {
    id: "2",
    title: "Rising Star",
    description: "Raise $500 in donations",
    requiredAmount: 500,
    unlocked: true,
    icon: "⭐"
  },
  {
    id: "3",
    title: "Fundraising Champion",
    description: "Raise $1,000 in donations",
    requiredAmount: 1000,
    unlocked: true,
    icon: "🏆"
  },
  {
    id: "4",
    title: "Community Leader",
    description: "Raise $2,500 in donations",
    requiredAmount: 2500,
    unlocked: false,
    icon: "👑"
  },
  {
    id: "5",
    title: "Donation Master",
    description: "Raise $5,000 in donations",
    requiredAmount: 5000,
    unlocked: false,
    icon: "💎"
  }
];

const mockLeaderboard: LeaderboardEntry[] = [
  {
    id: "1",
    name: "Sarah Chen",
    totalDonations: 3200,
    rank: 1,
    avatar: sarahAvatar
  },
  {
    id: "2",
    name: "Michael Torres",
    totalDonations: 2800,
    rank: 2,
    avatar: michaelAvatar
  },
  {
    id: "3",
    name: "Alex Johnson",
    totalDonations: 2450,
    rank: 3,
    avatar: alexAvatar
  },
  {
    id: "4",
    name: "Emma Wilson",
    totalDonations: 2100,
    rank: 4,
    avatar: emmaAvatar
  },
  {
    id: "5",
    name: "David Kim",
    totalDonations: 1950,
    rank: 5,
    avatar: davidAvatar
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Get current intern data
  async getInternData(): Promise<InternData> {
    await delay(500);
    return mockInternData;
  },

  // Get rewards data
  async getRewards(): Promise<Reward[]> {
    await delay(300);
    return mockRewards.map(reward => ({
      ...reward,
      unlocked: mockInternData.totalDonations >= reward.requiredAmount
    }));
  },

  // Get leaderboard
  async getLeaderboard(): Promise<LeaderboardEntry[]> {
    await delay(400);
    return mockLeaderboard;
  },

  // Mock login function
  async login(email: string, password: string): Promise<{ success: boolean; token?: string }> {
    await delay(800);
    // Simple mock validation
    if (email && password) {
      return { success: true, token: "mock-jwt-token" };
    }
    return { success: false };
  },

  // Mock signup function
  async signup(name: string, email: string, password: string): Promise<{ success: boolean; token?: string }> {
    await delay(1000);
    // Simple mock validation
    if (name && email && password) {
      return { success: true, token: "mock-jwt-token" };
    }
    return { success: false };
  }
};