var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");

/*  /users */

router.get("/", usersController.get_users);

router.get("/add", usersController.show_add_user_form);
router.post("/add", usersController.add_user); //fromdan gelen data

router.get("/:id/delete", usersController.delete_user);

router.get("/:id/:firstName/:lastName/edit", usersController.show_edit_user_form);
router.post("/:id/update", usersController.edit_user); //formdan gelen data

module.exports = router;
