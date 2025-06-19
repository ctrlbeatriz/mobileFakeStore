# 📱Aplicativo Móvel Ionic + Angular | MobileFakeStore

Aplicativo móvel desenvolvido com **Ionic** e **Angular**, consumindo dados da [Fake Store API](https://fakestoreapi.com).
O app simula uma loja virtual, exibindo produtos, seus detalhes e informações do autor do projeto.

---

## 🧾 Descrição do projeto

Este projeto foi desenvolvido como parte de uma avaliação acadêmica com foco em desenvolvimento mobile. A aplicação utiliza o template `tabs` do Ionic e consome dados da Fake Store API, apresentando uma interface intuitiva com três seções principais:

- **Tab1 (Produtos):** Listagem produtos disponíveis na loja contendo nome, imagem e preço.
- **Tab2 (Detalhes):** Exibe informações detalhadas de um produto selecionado pelo usuário.
- **Tab3 (Sobre):** Apresenta dados do(a) autor(a) do projeto.

---

## 💻 Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) - v16+ (e npm)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Angular CLI](https://angular.io/cli)
- [Capacitor](https://capacitorjs.com/)
- Um emulador Android/iOS ou dispositivo físico configurado (opcional)
- Conexão à Internet para consumir API pública.


---

## 📥 Como baixar

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/mobileFakeStore.git

# Acesse o diretório do projeto
cd mobileFakeStore

# Instale as dependências
npm install

# Rode o projeto no navegador
ionic serve

# Para testar no emulador ou dispositivo:
🚧1️⃣ (para primeira configuração da plataforma):

ionic build
npx cap add android (ou ios)
npx cap copy
npx cap open android (abrir no Android Studio)
# (Configurar SDK/emulador conforme documentação Capacitor)

✅2️⃣ (para projetos já configurados):

ionic build
npx cap sync
npx cap open android # ou ios
```
---
## 🤝 Contribuindo com o projeto
Projeto desenvolvido individualmente como atividade avaliativa. No entanto, sugestões ou estudos colaborativos são bem-vindos!

1. Faça um fork
2. Crie uma branch com sua funcionalidade: git checkout -b minha-feature
3. Commit das alterações: git commit -m 'feat: nova funcionalidade'
4. Push na branch: git push origin minha-feature
5. Teste antes de abrir um Pull Request (PR)
6. Documente mudanças no README, se necessário.

---

## 👩‍💻 Autor

| Nome              | Curso                                    | Contato                                                  |
| ----------------- | ---------------------------------------- | -------------------------------------------------------- |
| Samuel Alexandre Barbosa da Silva | Análise e Desenvolvimento de Sistemas - Uninassau🧠 | \ samuel.abarbosas@gmail.com |

---

## 📄 Licença
Este projeto está licenciado sob os termos da Creative Commons Attribution 4.0 International.
Consulte o arquivo LICENSE para maiores detalhes.

---

## 🖼️ Imagens do Projeto - GIF
As 5 imagens mínimas solicitadas no projeto foram direcionadas a um GIF interativo acima do texto como forma de apresentação prévia ao interessado.
