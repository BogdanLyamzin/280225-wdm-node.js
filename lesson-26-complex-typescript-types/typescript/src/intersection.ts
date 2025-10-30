type StatusCode = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 409 | 500 | 501 | 502;

type Headers = {
    headers: {
        date: Date;
        "Content-Type": string;
    }
}

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type ResponseData = {
    data: Post[]
};

type Response = Headers & ResponseData & {status: StatusCode};

const res: Response = {
    status: 200,
    headers: {
        date: new Date(),
        "Content-Type": "application/json"
    },
    data: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
    ]
}