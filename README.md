# 🦅 Corinthians Grande - API de Torcidas

Aplicação web interativa para exibição e busca de imagens das torcidas organizadas do Corinthians. O projeto utiliza um servidor Node.js/Express para fornecer uma API REST que sorteia e entrega as imagens estáticas para a interface web.

---

## 🚀 Como Rodar o Projeto

1. Instalar as dependências:
   Abra o terminal na pasta backend e execute:
   npm install
| Método | Rota | Descrição | Exemplo de Resposta |
| :--- | :--- | :--- | :--- |
| GET | /api/torcidas/aleatorio | Retorna uma foto aleatória de qualquer torcida registrada. | { "status": "success", "message": "http://localhost:3000/fotos/gavioes/gavioes1.jpg" } |
| GET | /api/torcidas/:torcida | Retorna uma foto aleatória da torcida informada na URL. | { "status": "success", "message": "http://localhost:3000/fotos/chopp/chopp1.jpg" } |

 Categorias Disponíveis
camisa12 - Camisa 12

chopp - Coringão Chopp

gavioes - Gaviões da Fiel


![Print 1](img/Captura%20de%20tela%202026-10-14%20112159.png)

![Print 2](img/Captura%20de%20tela%202026-10-14%20112227.png)

![Print 3](img/Captura%20de%20tela%202026-10-14%20112246.png)


👤 Autor
Kauan Viana

Turma: DSi1 - SESI