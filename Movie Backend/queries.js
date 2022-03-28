const Pool = require('pg').Pool
const pool = new Pool({
  user: 'Ashu',
  host: 'localhost',
  database: 'movieapi',
  password: 'ashu',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserByYear = (request, response) => {
  const yr = request.params.year;
  const ch = request.params.ch;
  pool.query('SELECT * FROM users WHERE year = $1 ORDER By $2 DESC', [yr, ch], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserByTitle = (request, response) => {
  const title = request.params.title;
  pool.query('SELECT * FROM users WHERE title = $1', [title], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const title = request.body.Title;
  const year = request.body.Year;
  const plot = request.body.Plot;
  const image = request.body.Poster;
  const imDB = request.body.Ratings[0].Value;
  const rottenTomatoes = request.body.Ratings[1].Value;
  const metaCritic = request.body.Ratings[2].Value;
  const imdbID = request.body.imdbID;

  pool.query('INSERT INTO users (title, year, plot, image, imDB, rottenTomatoes, metaCritic, imdbid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [title, year, plot, image, imDB, rottenTomatoes, metaCritic, imdbID], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added successfully.`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const plot = request.body.plot;

  pool.query(
    'UPDATE users SET plot = $1 WHERE id = $2',
    [plot, id],
    (error, results) => {
      if (error) {
        console.log(" eeeee",error)
        throw error
      }
      response.status(200).send('Plot successfully modified');
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User successfully deleted`);
  })
}

module.exports = {
  getUsers,
  getUserByYear,
  getUserByTitle,
  createUser,
  updateUser,
  deleteUser,
}

