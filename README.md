# 🥗 Nutricare: Inteligência em Alimentação Saudável

<p align="center">
  <img src="https://lh3.googleusercontent.com/d/1PMpaWKZGBkJNN8tdcf02Xm_x2Lfqkkg_" alt="Nutricare Logo" width="280">
</p>

O **Nutricare** é uma solução de backend desenvolvida para gerenciar ecossistemas de delivery focados em bem-estar e saúde. Construída sobre o ecossistema **NestJS**, a API oferece um controle rigoroso sobre o catálogo de produtos, informações nutricionais e categorizações dietéticas.


---

## 🚀 Funcionalidades

Esta API foi desenhada para atender às necessidades específicas de um público que busca transparência nutricional:

- **Catálogo Inteligente**: Cadastro e manutenção completa de pratos e bebidas saudáveis.
- **Classificação Nutri-Score**: Atribuição de selos de qualidade nutricional (A a E) para cada item do menu.
- **Filtros por Dieta Especial**: Suporte nativo para categorização de produtos:
  - 🌱 **Vegano** e **Vegetariano**.
  - 🚫 **Sem Glúten** (Gluten-Free).
  - 🥛 **Zero Lactose**.
- **Controle Calórico**: Monitoramento preciso do valor energético (kcal) por porção.
- **Pesquisa por Nome**: Sistema de busca flexível para localização rápida de itens no cardápio.
- **Gestão Financeira**: Armazenamento de valores com alta precisão decimal para evitar erros em transações.

---

## 🌟 Diferenciais do Projeto

- **Filtro Nutricional**: Sistema integrado de `Nutri-Score` (A-E) para classificação de saudabilidade.
- **Categorização Inteligente**: Suporte nativo para dietas Veganas, Vegetarianas, Zero Lactose e Sem Glúten.
- **Precisão Financeira**: Gerenciamento de valores com escala decimal para evitar erros de arredondamento.
- **Sanitização de Dados**: Limpeza automática de strings e validações rigorosas de entrada.

## 🛠️ Stack Tecnológica

| Tecnologia          | Função                                  |
| :------------------ | :-------------------------------------- |
| **NestJS**          | Framework core de alta performance      |
| **TypeScript**      | Tipagem estática para código resiliente |
| **MySQL**           | Banco de dados relacional robusto       |
| **TypeORM**         | Mapeamento Objeto-Relacional moderno    |
| **Class Validator** | Garantia de integridade dos dados       |

## 📂 Estrutura de Módulos

```text
src/
├── produto/            # Gerenciamento do catálogo saudável
│   ├── controllers/    # Endpoints e rotas da API
│   ├── entities/       # Modelagem (tb_produtos) com TypeORM
│   ├── services/       # Regras de negócio e lógica de busca
│   └── produto.module.ts
├── main.ts             # Inicialização da aplicação
└── app.module.ts       # Orquestrador central de módulos
```
