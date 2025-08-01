// Importo exxpress
const express = require('express');
const router = express.Router();

// GET /posts → mostra tutti i post
router.get("/", (req, res) => {
  res.send("Lista dei post");
});

// GET /posts/:id → mostra un singolo post
router.get("/:id", (req, res) => {
  res.send(`Visualizzazione del post ${req.params.id}`);
});

// POST /posts → crea un nuovo post
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

// PUT /posts/:id → modifica completa del post
router.put("/:id", (req, res) => {
  res.send(`Modifica completa del post ${req.params.id}`);
});

// PATCH /posts/:id → modifica parziale del post
router.patch("/:id", (req, res) => {
  res.send(`Modifica parziale del post ${req.params.id}`);
});

// DELETE /posts/:id → elimina un post
router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});

//esporto router 
module.exports = router;