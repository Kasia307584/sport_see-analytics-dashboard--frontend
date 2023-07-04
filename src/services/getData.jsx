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
