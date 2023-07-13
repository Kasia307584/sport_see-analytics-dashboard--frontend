import data from "./dataMock.json";

export function getMainData(userId) {
  return data.USER_MAIN_DATA.find((item) => item.id === userId);
}

export function getUserActivity(userId) {
  return data.USER_ACTIVITY.find((item) => item.userId === userId);
}
export function getAverageSessions(userId) {
  return data.USER_AVERAGE_SESSIONS.find((item) => item.userId === userId);
}
export function getPerformance(userId) {
  return data.USER_PERFORMANCE.find((item) => item.userId === userId);
}
