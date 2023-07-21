const AbstractManager = require("./AbstractManager");

class ProjetManager extends AbstractManager {
  constructor() {
    super({ table: "projet" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  insert(projet) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, concept, date, image1, image2, image3) VALUES (?, ?, ?, ?, ?, ? )`,
      [
        projet.title,
        projet.concept,
        projet.date,
        projet.image1,
        projet.image2,
        projet.image3,
      ]
    );
  }

  update(projet) {
    return this.database.query(
      `UPDATE ${this.table} SET title = ?, concept = ?, date = ?, image1 = ?, image2 = ?, image3 = ? where id = ?`,
      [
        projet.title,
        projet.concept,
        projet.date,
        projet.image1,
        projet.image2,
        projet.image3,
        projet.id,
      ]
    );
  }

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = ProjetManager;
