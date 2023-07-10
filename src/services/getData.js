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

export async function getUserData(userId) {
  const [mainData, activityData, averageSessions, performance] =
    await Promise.all([
      getMainData(userId),
      getUserActivity(userId),
      getAverageSessions(userId),
      getPerformance(userId),
    ]);

  return {
    mainData,
    activityData,
    averageSessions,
    performance,
  };
}

export default async function getUserDataFormatted(userId) {
  const dataRecieved = await getUserData(userId);

  const data = { ...dataRecieved };

  // activity data transformation
  data.activityData.sessions = data.activityData.sessions.map((session, i) => {
    session.day = (++i).toString();
    console.log(session);
    return session;
  });

  // average sessions data transformation
  const weekdays = ["L", "M", "M", "J", "V", "S", "D"];
  data.averageSessions.sessions = dataRecieved.averageSessions.sessions.map(
    (session, i) => {
      session.day = weekdays[i];
      return session;
    }
  );

  // performance data transformation
  const kindFr = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };
  data.performance = data.performance.data.map((item) => {
    const performanceItem = {};

    performanceItem.kind = kindFr[item.kind];
    performanceItem.value = item.value;

    return performanceItem;
  });
  console.log(dataRecieved);
  console.log(data);

  return data;
}
