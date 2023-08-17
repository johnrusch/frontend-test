export interface Breakdown {
  rating1Percentage: number;
  rating1Count: number;
  rating2Percentage: number;
  rating2Count: number;
  rating3Percentage: number;
  rating3Count: number;
  rating4Percentage: number;
  rating4Count: number;
  rating5Percentage: number;
  rating5Count: number;
}

// types.ts
export interface ReviewStatus {
  PUBL: number;
  SCHED: number;
  APPR: number;
  PEND: number;
  FLAG: number;
  ARCH: number;
  total: number;
  reviewStatusBreakdownScheduleEnabled: boolean;
  reviewStatusBreakdownApprovedEnabled: boolean;
}

export interface ProfileStatus {
  LIVE: number;
  OFFLINE: number;
  PUB: number;
  PRV: number;
  DIS: number;
  isVpsUser: boolean;
  profileStatusBreakdownUrlPrefix: string;
}

export type Review = {
  profileLink: string;
  profileTitle: string;
  reviewDetailsLink: string;
  rating: number;
  reviewText: string;
  status: string;
  publishDate: string;
  reviewDate: string;
  createdDate: string;
};
