## Backend SJCC

### Descrição

### Design da aplicação
```
/src
│   app.js               # Servidor Node.js
│
├── /app
│   ├── /controllers      # Lida com as requisições HTTP
│   ├── /repositories     # Interações com o banco de dados (Repository Pattern)
│   ├── /routes           # Definição das rotas da API
│   ├── /services         # Contém a lógica de negócios
│
├── /config               # Arquivos de configuração (e.g., banco de dados, variáveis de ambiente)
│
├── /middlewares          # Funções intermediárias (e.g., autenticação, validação)
│
├── /models               # Modelos do banco de dados (opcional, caso use ORM)
│
└── /tests                # Testes unitários e de integração
```
