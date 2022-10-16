import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-b2439-default-rtdb.firebaseio.com";

export function storeRecord(gameRecord) {
  axios.post(BACKEND_URL + "/gameRecords.json", gameRecord);
}

export async function fetchRecords() {
  const response = await axios.get(BACKEND_URL + "/gameRecords.json");

  const records = [];

  for (const key in response.data) {
    const recordObj = {
      id: key,
      player: response.data[key].player,
      point: response.data[key].point,
    };
    records.push(recordObj);
  }

  const topTenRecords = records
    .sort(function (a, b) {
      return a.point < b.point ? 1 : -1;
    })
    .slice(0, 10);

  return topTenRecords;
}

export async function fetchPersonalRecords(currentPlayer) {
  const response = await axios.get(BACKEND_URL + "/gameRecords.json");

  const records = [];

  for (const key in response.data) {
    if (response.data[key].player == currentPlayer) {
      const recordObj = {
        id: key,
        player: response.data[key].player,
        point: response.data[key].point,
      };
      records.push(recordObj);
    }
  }

  const bestRecords = Math.max(...records.map((o) => o.point));

  return bestRecords;
}
