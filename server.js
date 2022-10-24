const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3001;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'recipe_archives_app',
});

app.get('/', (req, res) => {
  res.send('hello express!');
});

app.get('/recipe_data', (req, res) => {
  connection.query(
    'SELECT * FROM recipe_data',
    (err, results, fields) => {
      if (err) {
        console.log('接続エラー');
        throw err;
      }

      res.json({ recipe_data: results });
    }
  )
});

// レシピ追加
app.post('/recipe_data', (req, res) => {
  let body__newData = '';

  req.on('data', (chunk) => {
    body__newData += chunk;

    const data = JSON.parse(body__newData);

    connection.query(
      `INSERT INTO recipe_data (recipe_name, recipe_description ) VALUES ('${data.recipe_name}', '${data.recipe_description}')`,
      (err, results, fields) => {
        if (err) throw err;
        console.log(results);
      }
    )
  });

  req.on('end', () => {
    res.end();
  });
});

// レシピの削除
app.post('/recipe_data__delete', (req, res) => {
  let body__id = '';

  req.on('data', (chunk) => {
    body__id += chunk

    connection.query(
      `DELETE FROM recipe_data WHERE recipe_data.id = ${body__id}`,
      (err, results, fields) => {
        if (err) throw err;
        console.log(results);
      }
    )
  });

  req.on('end', () => {
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
})