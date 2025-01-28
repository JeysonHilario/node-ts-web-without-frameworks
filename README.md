# Podcast Manager

## Descrição

O **Podcast Manager** é um aplicativo no estilo Netflix, projetado para centralizar diferentes episódios de podcasts em um único lugar, organizados por categorias. A ideia principal é fornecer uma experiência fácil e intuitiva para explorar e assistir podcasts em vídeo, filtrando conteúdos de acordo com os interesses do usuário.

---

## Domínio

O foco do **Podcast Manager** é em podcasts feitos em vídeo, permitindo aos usuários assistir diretamente no aplicativo ou acessar o conteúdo via links para plataformas de vídeo como o YouTube.

---

## Features

- Listagem de episódios de podcasts organizados por categorias.
- Categorias disponíveis (exemplo):
  - **Saúde**
  - **Fisiculturismo**
  - **Mentalidade**
  - **Humor**
- Filtro de episódios por nome de podcast.

---

## Como Funciona

### Listagem de Episódios por Categoria

A listagem dos episódios será feita através de uma **API REST** que retorna os dados em formato JSON. Cada episódio conterá as seguintes informações:

- Nome do podcast
- Nome do episódio
- Imagem de capa do episódio
- Link para o vídeo
- ID do vídeo
- Categorias associadas

Exemplo de resposta da API:

```json
[
    {
        "podcastName": "flow",
        "episodie": "CBUM - Flow #319",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "videoID": "pQSuQmUfS30",
        "urlVideo": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "cateries": ["saude", "fisiculturismo", "mentalidade"]
    },
    {
        "podcastName": "flow",
        "episodie": "MC Livinho - Flow #320",
        "cover": "https://i.ytimg.com/vi/gMVFtfY6NRs/maxresdefault.jpg",
        "videoID": "gMVFtfY6NRs",
        "urlVideo": "https://www.youtube.com/watch?v=gMVFtfY6NRs",
        "cateries": ["cantor", "musica", "funk"]
    }
]
```

---

## Como Implementar

### Backend
- Desenvolver uma **API REST** utilizando um framework como **Node.js** (Express).
- Criar endpoints para listar os episódios filtrados por categoria e/ou nome do podcast.

### Frontend
- Criar uma interface intuitiva e responsiva com tecnologias como **React** ou **Vue.js**.
- Implementar componentes para:
  - Exibir as categorias
  - Listar episódios com base nos filtros
  - Exibir informações do episódio com capa e link para o vídeo

---

## Exemplos de Uso

#### Listar Episódios de uma Categoria
Endpoint:
```http
GET /api/episodes?c=fisiculturismo
```

Resposta:
```json
[
    {
        "podcastName": "flow",
        "episodie": "CBUM - Flow #319",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "videoID": "pQSuQmUfS30",
        "urlVideo": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "cateries": ["saude", "fisiculturismo", "mentalidade"]
    }
]
```

#### Filtrar Episódios por Nome do Podcast
Endpoint:
```http
GET /api/episodes?p=flow
```

Resposta:
```json
[
    {
        "podcastName": "flow",
        "episodie": "CBUM - Flow #319",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "videoID": "pQSuQmUfS30",
        "urlVideo": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "cateries": ["saude", "fisiculturismo", "mentalidade"]
    },
    {
        "podcastName": "flow",
        "episodie": "MC Livinho - Flow #320",
        "cover": "https://i.ytimg.com/vi/gMVFtfY6NRs/maxresdefault.jpg",
        "videoID": "gMVFtfY6NRs",
        "urlVideo": "https://www.youtube.com/watch?v=gMVFtfY6NRs",
        "cateries": ["cantor", "musica", "funk"]
    }
]
```

---

## Tecnologias

- **Backend:**
  - Node.js
  - TypeScript

---

## Roadmap

1. Desenvolver a API REST para gerenciamento de podcasts.
2. Criar a interface inicial para listagem e filtro de episódios.
3. Implementar paginação e filtros dinâmicos por categorias.
4. Integrar com plataformas de vídeo, como YouTube, para exibição dos episódios.

---

## Contribuição

1. Fork o repositório.
2. Crie uma branch com sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Adicionei uma nova feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.


