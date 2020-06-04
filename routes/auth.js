//rutas para autenticar usuarios

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");
//crea un usaurio

//api/auth
router.post(
  "/",
  /* [
    check("email", "Agrega un Email valido").isEmail(),
    check("password", "El password debe ser minimo 6 caracteres").isLength({
      min: 6,
    }),
  ],*/
  authController.autenticarUsuario
);

router.get("/", auth, authController.usuarioAutenticado);

module.exports = router;
