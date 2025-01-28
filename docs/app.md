# NOME DO APLICATIVO
Podcast Manager

## Descrição

Um app Estilo Netflix, aonde possa centralizar diferentes episodios podcast separados por categoria

# Dominio

Podcast feitos em videos

#### Features

- Listar os episodios pod por sessao de categorias
- [saude, fisiculturismo, mentalidade, humor]
    - Filtrar episodios por nome de podcast

## Como

#### Listar os episodios porcast por sessao de categoria

### Como vou implementar:

Vou retornar em uma API REST um json o nome do podcast, nome do episodio,imagem de capa, link, ID do video,

```js
[
    {
        podcastName: "flow",
        episodie: "CBUM - Flow #319",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        videoID: "pQSuQmUfS30",
        urlVideo: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        cateries: ["saude", "fisiculturismo", "mentalidade"],

    }
    {
        podcastName: "flow",
        episodie: "CBUM - Flow #319",
        cover: "https://i.ytimg.com/vi/gMVFtfY6NRs/maxresdefault.jpg",
        videoID: "gMVFtfY6NRs",
        urlVideo: "https://www.youtube.com/watch?v=gMVFtfY6NRs",
        cateries: ["cantor", "musica", "funk"],

    }

]
```
