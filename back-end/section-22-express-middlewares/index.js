const express = require('express');

const app = express();

app.use(express.json());

const postReturn = [{id: 1, message: 'deu certo'}, {id: 2, message: 'deu certo tbm'}]

app.post()

app.get('/posts/:id', (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(404).json({ "message": "post not found" });
  }

  const findId = postReturn.find((value) => value.id === id)

  if (findId) {
    res.status(200).json(findId)
  }
})

const PORT = 3300

app.listen(PORT);
