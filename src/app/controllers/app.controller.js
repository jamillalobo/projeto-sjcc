class AppController {
    constructor() {}

    searchByKeyWord(req, res) {
        res.send("Criacao de palavras chave com sucesso!")
    };

    createSugestion(req, res) {
        res.send("Criacao de sugestoes com sucesso!")
    };

    getNews(req, res) {
        res.send("Listagem de conteudo")
    };

}

export default new AppController();