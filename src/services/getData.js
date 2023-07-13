export function getMainData(userId) {
  return fetch(`http://localhost:3000/user/${userId}`)
    .then((response) => response.json())
    .then((json) => json.data);
}
export function getUserActivity(userId) {
  return fetch(`http://localhost:3000/user/${userId}/activity`)
    .then((response) => response.json())
    .then((json) => json.data);
}
export function getAverageSessions(userId) {
  return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    .then((response) => response.json())
    .then((json) => json.data);
}
export function getPerformance(userId) {
  return fetch(`http://localhost:3000/user/${userId}/performance`)
    .then((response) => response.json())
    .then((json) => json.data);
}
