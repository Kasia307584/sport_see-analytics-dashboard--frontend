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

export default async function getUserData(userId) {
  const [mainData, activityData, averageSessions, performance] =
    await Promise.all([
      getMainData(userId),
      getUserActivity(userId),
      getAverageSessions(userId),
      getPerformance(userId),
    ]);

  // data transformation
  // vaut mieux creer un nouveau tableau
  // precise ici si tu es en version moquee ou pas
  activityData.sessions = activityData.sessions.map((session, i) => {
    session.day = (++i).toString();
    return session;
  });
  let weekdays = ["L", "M", "M", "J", "V", "S", "D"];
  averageSessions.sessions = averageSessions.sessions.map((session, i) => {
    session.day = weekdays[i];
    return session;
  });

  return {
    mainData,
    activityData,
    averageSessions,
    performance,
  };
}
