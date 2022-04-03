const router = require("express").Router();
const {
  models: { User },
} = require("../db");

// mounted at /api/users/
router.post("/", async (req, res, next) => {
  try {
    Object.keys(req.body).forEach(
      (choice) => (req.body[choice] = req.body[choice].toLowerCase())
    );
    const choices = Object.values(req.body);

    if (!choices.includes("calculus")) {
      const error = new Error(
        "Calculus missing from choices. Calculus must be one of the choices."
      );
      throw error;
    } else {
      const userChoices = await User.create(req.body);
      res.json(userChoices);
    }
  } catch (ex) {
    console.error(ex);
  }
});

module.exports = router;
