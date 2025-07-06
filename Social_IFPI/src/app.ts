import express, {request, Request , response, Response} from 'express';

const app = express();
app.use(express.json());

app.get("/socialifpi", (request, response) => {
    response.status(201).send({"message": "Get Requisitado" });
    console.log("Client connected! - GET");
});

app.post("/socialifpi", (request, response) => {
    response.status(201).send({"message": "Post Requisitado" });
    console.log("Client connected! - POST");
})

app.get("/error", (request, response) => {
    response.status(500).send({"message": "Internal Server Error" });
});


let postagens = [
    {
        id: 1,
        autor: "Nicolas Rafael",
        texto: "Primeira postagem",
        curtidas: 0
    },
    {
        id: 2,
        autor: "Nicolas Rafael",
        texto: "Segunda postagem",
        curtidas: 10
    },
    {
        id: 3,
        autor: "Nicolas Rafael",
        texto: "Terceira postagem",
        curtidas: 20
    }
]

app.get("/socialifpi/postagens", (request, response) => {
    response.status(200).send(postagens);
});

app.get("/socialifpi/postagens/:id", (request, response) => {
    let id = Number(request.params.id);
    const postagem = postagens.find(postagem => postagem.id === id);

    if (!postagem) {
        response.status(404).send({"message": "Postagem não encontrada"});
        return;
    }

    response.status(200).send(postagem);
});

app.post("/socialifpi/postagens", (request, response) => {
    const {id, autor, texto, curtidas} = request.body;
    const postagem = postagens.find(postagem => postagem.id === id);

    if (postagem) {
        response.status(409).send({"message": "Postagem já cadastrada"});
        return;
    }

    postagens.push({id, autor, texto, curtidas});
    response.status(201).send({"message": "Postagem cadastrada com sucesso"});
});

app.delete("/socialifpi/postagens/:id", (request, response) => {
    let id = Number(request.params.id);
    const postagem = postagens.find(postagem => postagem.id === id);

    if (!postagem) {
        response.status(404).send({"message": "Postagem não encontrada"});
        return;
    }

    postagens.splice(postagens.indexOf(postagem), 1);
    response.status(200).send({"message": "Postagem deletada com sucesso"});
})

app.use((request, response) => {
    response.status(404).send({"message": "Rota não encontrada"});
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});