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

export const getUserData = async (id) => {
  const [mainData, activityData, averageSessions, performance] =
    await Promise.all([
      getMainData(id),
      getUserActivity(id),
      getAverageSessions(id),
      getPerformance(id),
    ]);

  // data transformation
  // vaut mieux creer un nouveau tableau
  activityData.sessions = activityData.sessions.map((session, i) => {
    session.day = (++i).toString();
    return session;
  });
  let weekdays = ["L", "M", "M", "J", "V", "S", "D"];
  averageSessions.sessions = averageSessions.sessions.map((session, i) => {
    session.day = weekdays[i];
    return session;
  });
  // map sur data creer un nouvel objet avec titre (recuper id donc le 1, performance.kind[1]) et valeur (le meme)

  return {
    mainData,
    activityData,
    averageSessions,
    performance,
  };
};
