import data from "./dataMock.json";

export function getMainData() {
  return data.USER_MAIN_DATA;
}
// il faut plutot faire comme ca:
// export function getMainDataMock(userId) {
//   return data.USER_MAIN_DATA.find((item) => item.id === userId);
// }
export function getUserActivity() {
  return data.USER_ACTIVITY;
}
export function getAverageSessions() {
  return data.USER_AVERAGE_SESSIONS;
}
export function getPerformance() {
  return data.USER_PERFORMANCE;
}

// soit tu stock les donnees dans une var apres les recuperer via le fetch
// useEffect = ou??
