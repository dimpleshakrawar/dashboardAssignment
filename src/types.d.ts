export type TInsightSummary = {
  total_queries: number;
  successful_queries: number;
  failed_queries: number;
  average_response_time: number;
};

export type TCategoryDistribution = {
  small_talk: number;
  technical_support: number;
  sales_inquiries: number;
  customer_service: number;
};

export interface AIResponse {
  insight_summary: {
    total_queries: number;
    successful_queries: number;
    failed_queries: number;
    average_response_time: number;
  };
  category_distribution: Record<string, number>;
  response_times: {
    day_wise: { date: string; average_time: number }[];
    week_wise: { week: string; average_time: number }[];
  };
  user_satisfaction: { ratings: { rating: number; count: number }[] };
  usage_statistics: {
    by_platform: Record<string, number>;
    by_country: Record<string, number>;
  };
}
