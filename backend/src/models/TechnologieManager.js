const AbstractManager = require("./AbstractManager");

class TechnologieManager extends AbstractManager {
  constructor() {
    super({ table: "technologie" });
  }

  insert(technologie) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, logo) VALUES (?, ?)`,
      [technologie.name, technologie.logo]
    );
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }
}
module.exports = TechnologieManager;
