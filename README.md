# 📌 ES2_2024-2_hackathon-starter

## 🚀 Low Code / No Code

### 👥 Integrantes do Grupo:
- 👩 **[natycristina](https://github.com/natycristina)**
- 👩 **[CarolinaMartinsEmilio](https://github.com/CarolinaMartinsEmilio)**
- 👩 **[akarys2304](https://github.com/akarys2304)**
- 🧑 **[lgstavo](https://github.com/lgstavo)**

---
### ✅ Testes Manuais (via GUI) 
* **Ambiente de Teste:**
  - Navegador: Microsoft Edge, Google Chrome
  - Sistema Operacional: Windows 🖥️, Linux 🐧
* **Testes Efeituados:**

1️⃣  **Verificação do conteúdo da página inicial "Home".**

🎯 **Objetivo do Teste:** O objetivo deste teste foi verificar se os elementos da página inicial estão sendo exibidos corretamente e se os botões "View Details" estão funcionando conforme esperado.

 - **Resultado Esperado:** Todo o conteúdo da página "Home" deve ser carregado corretamente, sem erros de renderização. Ao clicar em cada botão "View Details", verificar se há alguma ação executada (redirecionamento para outra página ou exibição de mais informações).
   
- **Resultado Obtido:** Todo o conteúdo da página "Home" foi carregado corretamente, sem erros de renderização. Mas Ao clicar em cada botão "View Details"  não executam nenhuma ação.

2️⃣ **Verificação do conteúdo da página "API Examples".

🎯 **Objetivo do Teste:** Verificar se os botões/ícones da página API Examples estão funcionando corretamente e se os redirecionamentos são feitos como esperado.

 - **Resultado Esperado:** Cada botão/ícone deve redirecionar corretamente para a página correspondente ou permitir a autenticação quando necessário.
   
- **Resultado Obtido:** Os seguintes botões funcionam corretamente, abrindo uma nova aba com o conteúdo esperado:
  
 ✅ GitHub

 ✅ Foursquare
 
 ✅ Last.fm
 
 ✅ New York Times
 
 ✅ Steam
 
 ✅ Twitch
 
 ✅ Stripe
 
 ✅ PayPal
 
 ✅ QuickBooks
 
 ✅ Twilio (text messaging)
 
 ✅ Tumblr
 
 ✅ Web Scraping
 
 ✅ Lob (USPS mailing)
 
 ✅ File Upload
 
 ✅ Pinterest
 
 ✅ HERE Maps
 
 ✅ Chart.js + Alpha Vantage 
 
 ✅ GitHub 
 
 ✅ ProjectIssuesPrivacy 
 
 ✅ PolicyTerms of Use
 
Os seguintes botões apresentam erro ao tentar fazer login:

❌ Facebook – Exibe erro: "Erro ao acessar aplicativo. Desculpe, mas o aplicativo que está tentando usar não existe ou foi desativado."

❌ Google Drive – Exibe erro: "Este app está bloqueado. Este app tentou acessar informações confidenciais na sua Conta do Google. Para manter sua conta segura, o Google bloqueou o acesso."

❌ Google Sheets – Mesmo erro do Google Drive.

A maioria dos botões da página API Examples está funcionando corretamente. No entanto, os botões do Facebook, Google Drive e Google Sheets apresentam erros que impedem a autenticação ou acesso.

3️⃣ **Verificação do conteúdo da página "Contact".**

🎯 **Objetivo do Teste:** Verificar se o formulário de contato está funcionando corretamente e enviando os dados conforme esperado.

 - **Resultado Esperado:** O formulário deve ser preenchido e enviado corretamente e uma mensagem de confirmação deve ser exibida.
   
- **Resultado Obtido:** O formulário de contato funciona corretamente e exibe a mensagem de sucesso.

![Mensagem de sucesso](https://github.com/user-attachments/assets/2ae5c6df-02d7-4453-a3c0-bfa242891c54)

4️⃣ **Verificação do conteúdo da página "Login".**

🎯 **Objetivo do Teste:** Verificar se a página de Login funciona corretamente, validando as credenciais do usuário e permitindo a recuperação de senha quando necessário.

 - **Resultado Esperado:** O sistema deve autenticar o usuário e redirecioná-lo para a página inicial. Caso inserir senha ou email incorretos, o sistema deve exibir uma mensagem de erro informando que as credenciais estão incorretas. Ao clicar no botão "fORGOT YOUR PASSWORD" e inseir seu email, o sistema deve enviar um e-mail com as instruções para redefinição de senha.
   
- **Resultado Obtido:** O usuário foi autenticado e redirecionado corretamente. Ao inserir o email ou a senha incorreta, a mensagem de erro foi exibida corretamente. No caso de redefinir a senha o e-mail foi enviado e o link para redefinição de senha foi recebido.

5️⃣ **Verificação do conteúdo da página "Create Account".**

🎯 **Objetivo do Teste:** Verificar se o processo de cadastro de um novo usuário está funcionando corretamente, incluindo todos os campos e a funcionalidade do botão "Sign Up".

 - **Resultado Esperado:** O cadastro do usuário deve ser realizado com sucesso. O sistema deve redirecionar o usuário para a próxima página ou exibir uma mensagem de sucesso. O botão "Sign Up" deve estar visível e funcional, permitindo que o usuário submeta o formulário.
   
- **Resultado Obtido:** O cadastro foi realizado com sucesso, e o sistema redirecionou para a próxima página ou exibiu a mensagem de sucesso. O botão "Sign Up" funcionou corretamente, enviando as informações inseridas para o backend.
---
## 🎥 Gravação dos Testes

Você pode assistir à gravação dos testes manuais no seguinte link:  
[▶ Assista ao vídeo do teste](https://drive.google.com/file/d/1dxL3CWXwsZFLUBJDu8bRB0TnnHa3Pwrq/view?usp=drive_link)

---
## 📊 Testes e Cobertura de Código
---
###  Testes Executados

#### **User Model**
- ✔️ should create a new user  
- ✔️ should return error if user is not created  
- ✔️ should not create a user with the unique email  
- ✔️ should find user by email  
- ✔️ should remove user by email  
- ✔️ should check password (**61ms**)  
- ✔️ should generate gravatar without email and size  
- ✔️ should generate gravatar with size  
- ✔️ should generate gravatar with email  

🟢 **9 testes passando** (*99ms*)  

---

## 📊 Cobertura de Código

![Relatório de Cobertura](images/coverage-report.jpeg)

---

### 📌 Observações
- A cobertura de código está **70.83%** em termos de linhas.
- Algumas linhas não estão cobertas pelos testes (**37-43, 54**).
- Melhorias nos testes podem focar nessas linhas para aumentar a cobertura.

---

👩‍💻 **Configuração do GitHub Actions**

No nosso trabalho, o GitHub Actions já veio habilitado, pois o sistema-alvo open-source que utilizamos, "hackathon-starter", já possuía essa configuração. O GitHub Actions está executando um workflow chamado "Node.js CI", que é acionado automaticamente sempre que há commits e pull requests no repositório.

Por meio do GitHub Actions, conseguimos acompanhar informações como eventos que disparam a execução, como commits e pull requests, tarefas realizadas, duração média das execuções, histórico de execuções, permitindo rastrear cada execução e seu status.

O uso do GitHUb Actions, trouxe benefícios como:

- Automação de testes, garantindo que novas alterações não quebrem o código.

- Facilidade de integração, pois cada commit e pull request passa por verificações automáticas.

- Histórico de execuções, permitindo identificar problemas rapidamente e melhorar a qualidade do código.

  ---

  📈 **Casos de testes implementados**

