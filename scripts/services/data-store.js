let allItemsCache = null;
let feedbacksCache = null;

import { fetchJSON } from "./api.js";

export async function getAllItems() {
  if (!allItemsCache) {
    allItemsCache = await fetchJSON("../data/all-items.json");
  }
  return allItemsCache;
}

export async function getFeedbacks() {
  if (!feedbacksCache) {
    feedbacksCache = await fetchJSON("../data/feedbacks.json");
  }
  return feedbacksCache;
}
