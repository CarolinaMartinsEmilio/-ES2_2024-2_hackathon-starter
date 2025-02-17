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
  - Sistema Operacional: WWindows 🖥️, Linux 🐧
* **Testes Efeituados:**

1️⃣  **Verificação do conteúdo da página inicial "Home".**

🎯 **Objetivo do Teste:** O objetivo deste teste foi verificar se os elementos da página inicial estão sendo exibidos corretamente e se os botões "View Details" estão funcionando conforme esperado.

 - **Resultado Esperado:** Todo o conteúdo da página "Home" deve ser carregado corretamente, sem erros de renderização. Ao clicar em cada botão "View Details", verificar se há alguma ação executada (redirecionamento para outra página ou exibição de mais informações).
   
- **Resultado Obtido:** Todo o conteúdo da página "Home" foi carregado corretamente, sem erros de renderização. Mas Ao clicar em cada botão "View Details"  não executam nenhuma ação.

2️⃣ **Verificação do conteúdo da página "API Examples".**Verificar se os botões/ícones da página API Examples estão funcionando corretamente e se os redirecionamentos são feitos como esperado.

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
