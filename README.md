# Sorteador de Números (Alura)

Projeto desenvolvido em JavaScript com o objetivo de realizar o sorteio de números aleatórios dentro de um intervalo definido pelo usuário, sem repetição, utilizando manipulação do DOM.

---

## Funcionalidades

- Definir a **quantidade de números** a serem sorteados
- Informar o **valor mínimo (de)** e o **valor máximo (até)** do intervalo
- Gerar números **aleatórios e não repetidos**
- Exibir o resultado na tela
- Botão para **reiniciar** o sorteio e limpar os campos

---

## 🛠️ Tecnologias Utilizadas

- **HTML**
- **CSS**
- **JavaScript (ES6)**
- Manipulação do **DOM**

---
## 📘 Lições Aprendidas

- **`document.getElementById()`**  
  Utilizado para acessar e manipular elementos HTML pelo seu atributo `id`.
- **`.value`**  
  Usado para recuperar valores digitados em campos de formulário (`input`).
- **`Math.random()`**
  Gera um número aleatório entre `0` e `1`.
- **`Math.floor`**
  Arrendonda o número para baixo e remove os decimais.
  
  ```js
  Math.floor(Math.random() * (max - min + 1)) + min
  
- Gera um número aleatório, com min e max, inclusive ↑
- **`Array.push(valor)`**
  Adiciona um valor ao final do array.
- **`includes()`**
  Determina se um array possui um valor especifico. Retorna true ou false.
- **`.innerHTML`**
  Utilizado quando precisamos manipular o conteudo HTML interno de um elemento.
- **`.textContent`**
  Utilizado quando queremos inserir ou modificar um texto simples dentro de um elemento HTML.
- **`While`**
  Repete um bloco de código enquanto uma condição for verdadeira.
- **`.classList`**
  Lista as classes de um elemento.
- - **`.classList.contains`**
    Verifica se um elemento possui certa classe
- - **`.classList.remove`**
    Remove uma classe específica
- - **`.classList.add`**
    Adiciona uma classe específica
        
