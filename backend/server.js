const express = require("express");
const cors = require("cors");
const path = require("path");

const torcidas = require("./data/corinthians.json");

const app = express();
const PORT = 3000;

app.use(cors());

// SERVIR ARQUIVOS ESTÁTICOS
app.use(
    "/fotos",
    express.static(path.join(__dirname, "data", "fotos"))
);

function sortear(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[\s\-_]+/g, "");
}

// =====================================================
// ROTAS DA API
// =====================================================

// ROTA 1: Foto aleatória
app.get("/api/torcidas/aleatorio", (req, res) => {
    const todasAsFotos = Object.values(torcidas).flat();
    const item = sortear(todasAsFotos);

    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// ROTA 2: Busca por torcida
app.get("/api/torcidas/:torcida", (req, res) => {
    const termoBusca = normalizar(req.params.torcida);

    const chaveEncontrada = Object.keys(torcidas).find(key => normalizar(key) === termoBusca);

    if (!chaveEncontrada || !torcidas[chaveEncontrada].length) {
        return res.status(404).json({
            status: "error",
            message: `Torcida '${req.params.torcida}' não encontrada`
        });
    }

    const item = sortear(torcidas[chaveEncontrada]);

    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// =====================================================
// INICIA O SERVIDOR
// =====================================================

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📂 Servindo fotos da pasta: data/fotos/`);
});