async function insert(hobbit) {
  // the second parameter here is of other databases, SQLite returns the id by default
  const [id] = await db('hobbits').insert(hobbit, 'id');

  return db('hobbits')
    .where({ id })
    .first();
}
