import data from "./dataMock.json";

export function getMainData(userId) {
  return data.USER_MAIN_DATA.find((item) => item.id === userId);
}

export function getUserActivity(userId) {
  return data.USER_ACTIVITY.find((item) => item.userId === userId);
}
export function getAverageSessions(userId) {
  return data.USER_AVERAGE_SESSIONS.find((item) => item.userId === userId);
}
export function getPerformance(userId) {
  return data.USER_PERFORMANCE.find((item) => item.userId === userId);
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

  const weekdays = ["L", "M", "M", "J", "V", "S", "D"];
  const kindFr = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const mainData = dataRecieved.mainData;
  const activityData = dataRecieved.activityData;
  const averageSessions = dataRecieved.averageSessions;
  const performance = dataRecieved.performance;

  const dataFormatted = {
    userId: mainData.id,
    firstName: mainData.userInfos.firstName,
    todayScore: mainData.todayScore,
    keyData: mainData.keyData,
    sessions: activityData.sessions.map((session, i) => {
      const session_copy = { ...session };
      session_copy.day = (++i).toString();
      return session_copy;
    }),
    avgSessions: averageSessions.sessions.map((session, i) => {
      const session_copy = { ...session };
      session_copy.day = weekdays[i];
      return session_copy;
    }),
    performance: performance.data.map((item) => {
      const performanceItem = {};
      performanceItem.kind = kindFr[item.kind];
      performanceItem.value = item.value;
      return performanceItem;
    }),
  };

  return dataFormatted;
}
