import data from "./dataMock.json";

export function getMainDataMock() {
  return data.USER_MAIN_DATA;
}
// il faut plutot faire comme ca:
// export function getMainDataMock(userId) {
//   return data.USER_MAIN_DATA.find((item) => item.id === userId);
// }
export function getUserActivityMock() {
  return data.USER_ACTIVITY;
}
export function getAverageSessionsMock() {
  return data.USER_AVERAGE_SESSIONS;
}
export function getPerformanceMock() {
  return data.USER_PERFORMANCE;
}

export function getMainData(userId) {
  fetch(`http://localhost:3000/user/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
export function getUserActivity(userId) {
  fetch(`http://localhost:3000/user/${userId}/activity`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
export function getAverageSessions(userId) {
  fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
export function getPerformance(userId) {
  fetch(`http://localhost:3000/user/${userId}/performance`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

// soit tu stock les donnees dans une var apres les recuperer via le fetch
// useEffect = ou??
