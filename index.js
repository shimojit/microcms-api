const express = require('express');
const MicroCms = require('./libs/microcms');
const microcms = new MicroCms();
const constants = require('./constants/constants');
const cors = require('cors');

const app = express();
const PORT = 8888;
app.use(express.json());
app.use(cors());

const queries = { limit: constants.MEMBERS_LIST_LIMIT };
const membersList = microcms.getList("members", queries);

app.get('/', (req, res) => {
  console.log(membersList);
  console.log(membersList.contents);
  res.send('microCMS API is working');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});