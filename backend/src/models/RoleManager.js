const AbstractManager = require("./AbstractManager");

class RoleManager extends AbstractManager {
  constructor() {
    super({ table: "role" });
  }

  insert(role) {
    return this.database.query(`INSERT INTO ${this.table} (name) VALUES (?)`, [
      role.name,
    ]);
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = RoleManager;
