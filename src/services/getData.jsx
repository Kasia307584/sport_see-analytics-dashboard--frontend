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

export const getUserData = async (id) => {
  //ici transformation des données si nécessaire (ex : jours de semaine au lieu de 2020-07-01 etc...)
  const [mainData, activityData, averageSessions, performance] =
    await Promise.all([
      getMainData(id),
      getUserActivity(id),
      getAverageSessions(id),
      getPerformance(id),
    ]);

  return {
    mainData,
    activityData,
    averageSessions,
    performance,
  };
};
