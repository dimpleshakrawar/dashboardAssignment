import aiData from "./ai-data.json";
import { AIResponse } from "./types";

export async function fetchAIData(): Promise<AIResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("Unable to process");
      resolve(aiData);
    }, 1000);
  });
}
