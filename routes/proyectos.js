const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");
//crea un proyecto
//api/auth
router.post(
  "/",
  auth,
  [check("nombre", "el nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.crearProyecto
);

//obtener proyecto
router.get("/", auth, proyectoController.obtenerProyectos);

//actualizar proyecto via ID
router.put(
  "/:id",
  auth,
  [check("nombre", "el nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.actualizarProyecto
);

//elimar por ID
router.delete("/:id", auth, proyectoController.eliminarProyecto);
module.exports = router;
