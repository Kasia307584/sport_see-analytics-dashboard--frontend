import {
  getMainData,
  getUserActivity,
  getAverageSessions,
  getPerformance,
} from "./getDataMock";
// switch between ./getDataMock and ./getData to import mocked or fetched data

async function getFullData(userId) {
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

export default async function getFormattedData(userId) {
  const dataRecieved = await getFullData(userId);

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

  const formatKeyData = () => {
    const keyData_copy = { ...mainData.keyData };
    for (let value in keyData_copy) {
      keyData_copy[value] = keyData_copy[value].toLocaleString("en-US");
    }
    return keyData_copy;
  };

  const dataFormatted = {
    userId: mainData.id,
    firstName: mainData.userInfos.firstName,
    todayScore: mainData.todayScore,
    keyData: formatKeyData(),
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
