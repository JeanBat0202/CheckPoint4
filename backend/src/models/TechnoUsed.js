const AbstractManager = require("./AbstractManager");

class TechnoUsedManager extends AbstractManager {
  constructor() {
    super({ table: "technoused" });
  }
}

module.exports = TechnoUsedManager;
