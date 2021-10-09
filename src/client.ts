import axios from 'axios';
import PQueue from 'p-queue';

const API_URL = 'http://localhost:8001';

const queue = new PQueue({ concurrency: 2 });

(async () => {
  const promises = [];
  for (let i = 1; i <= 30; i++) {
    promises.push(
      queue.add(async () => {
        const { data } = await axios.post(API_URL, { id: i });
        console.log(data);
      }),
    );
  }
  await Promise.all(promises);
})();
