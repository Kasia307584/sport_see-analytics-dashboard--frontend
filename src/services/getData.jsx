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
  const [mainData, activityData, averageSessions, performance] =
    await Promise.all([
      getMainData(id),
      getUserActivity(id),
      getAverageSessions(id),
      getPerformance(id),
    ]);

  // data transformation
  activityData.sessions.map((session, i) => {
    return (session.day = (++i).toString());
  });
  let weekdays = ["L", "M", "M", "J", "V", "S", "D"];
  averageSessions.sessions.map((session, i) => {
    return (session.day = weekdays[i]);
  });

  return {
    mainData,
    activityData,
    averageSessions,
    performance,
  };
};
