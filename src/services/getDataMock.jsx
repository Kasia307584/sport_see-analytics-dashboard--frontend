import data from "./dataMock.json";

const toNum = (id) => Number.parseInt(id, 10);

export function getMainData(userId) {
  return data.USER_MAIN_DATA.find((item) => item.id === toNum(userId));
}

export function getUserActivity(userId) {
  return data.USER_ACTIVITY.find((item) => item.userId === toNum(userId));
}
export function getAverageSessions(userId) {
  return data.USER_AVERAGE_SESSIONS.find(
    (item) => item.userId === toNum(userId)
  );
}
export function getPerformance(userId) {
  return data.USER_PERFORMANCE.find((item) => item.userId === toNum(userId));
}

export const getUserData = async (id) => {
  let [mainData, activityData, averageSessions, performance] =
    await Promise.all([
      getMainData(id),
      getUserActivity(id),
      getAverageSessions(id),
      getPerformance(id),
    ]);

  // data transformation
  activityData.sessions.forEach((session, i) => {
    session.day = (++i).toString();
  });

  let weekdays = ["L", "M", "M", "J", "V", "S", "D"];
  averageSessions.sessions.forEach((session, i) => {
    session.day = weekdays[i];
  });

  return {
    mainData,
    activityData,
    averageSessions,
    performance,
  };
};
