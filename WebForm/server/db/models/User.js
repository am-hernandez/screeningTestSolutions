const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  choice_A: {
    type: Sequelize.STRING,
  },
  choice_B: {
    type: Sequelize.STRING,
  },
  choice_C: {
    type: Sequelize.STRING,
  },
});

User.beforeCreate(async (user, options) => {
  try {
    const choices = [user.choice_A, user.choice_B, user.choice_C];
    if (!choices.includes("calculus")) {
      const error = new Error(
        "Calculus missing from choices. Calculus must be one of the choices."
      );
      throw error;
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = User;
