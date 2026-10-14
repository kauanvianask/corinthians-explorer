//============================================
// ELEMENTOS HTML
//============================================

const torcidaImage = document.getElementById("torcidaImage");
const torcidaName = document.getElementById("torcidaName");
const randomBtn = document.getElementById("randomBtn");
const searchBtn = document.getElementById("searchBtn");
const torcidaInput = document.getElementById("torcidaInput");
const corinthiansArea = document.querySelector(".corinthians-area");

const API = "http://localhost:3000/api/torcidas";

//============================================
// FUNÇÃO PRINCIPAL
//============================================

async function buscarTorcida(url) {
    if (corinthiansArea) corinthiansArea.classList.add("loading");

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("Resposta da API:", data);

        if (!response.ok || data.status === "error") {
            if (torcidaName) torcidaName.textContent = data.message || "Torcida não encontrada";
            if (torcidaImage) torcidaImage.src = "";
            return;
        }

        if (torcidaImage) torcidaImage.src = data.message;

        const partes = data.message.split("/");
        const pasta = partes[partes.length - 2];

        const nomesBonitos = {
            "camisa12": "Camisa 12",
            "chopp": "Coringão Chopp",
            "gavioes": "Gaviões da Fiel"
        };

        if (torcidaName) {
            torcidaName.textContent = nomesBonitos[pasta] || pasta.toUpperCase();
        }

    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
        if (torcidaName) {
            torcidaName.textContent = "📳 Servidor offline - rode: node server.js";
        }
        if (torcidaImage) torcidaImage.src = "";
    } finally {
        if (corinthiansArea) corinthiansArea.classList.remove("loading");
    }
}

// ==========================================
// AÇÕES
// ==========================================

function torcidaAleatoria() {
    buscarTorcida(`${API}/aleatorio`);
}

function buscarPorTorcida() {
    const torcida = torcidaInput.value.trim();

    if (!torcida) {
        alert("Digite o nome de uma torcida!");
        return;
    }

    buscarTorcida(`${API}/${encodeURIComponent(torcida)}`);
}

// ==================================
// EVENTOS
// ==================================

if (randomBtn) randomBtn.addEventListener("click", torcidaAleatoria);
if (searchBtn) searchBtn.addEventListener("click", buscarPorTorcida);
if (torcidaImage) torcidaImage.addEventListener("click", torcidaAleatoria);

if (torcidaInput) {
    torcidaInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            buscarPorTorcida();
        }
    });
}

// CARREGA AO ABRIR A PÁGINA
torcidaAleatoria();