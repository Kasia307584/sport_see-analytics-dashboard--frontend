export function getMainData(userId) {
  return fetch(`http://localhost:3000/user/${userId}`).then((response) =>
    response.json()
  );
}
export function getUserActivity(userId) {
  return fetch(`http://localhost:3000/user/${userId}/activity`).then(
    (response) => response.json()
  );
}
export function getAverageSessions(userId) {
  return fetch(`http://localhost:3000/user/${userId}/average-sessions`).then(
    (response) => response.json()
  );
}
export function getPerformance(userId) {
  return fetch(`http://localhost:3000/user/${userId}/performance`).then(
    (response) => response.json()
  );
}
