import axios from "axios";

const API = axios.create({
    baseURL: "https://nc-news-o54u.onrender.com/api/",
});

export const getArticles = () => {
    return API.get("/articles")
        .then((res) => {
            const {data} = res;
            return data.articles;
        });
};

export const getArticleById = (article_id) => {
    return API.get(`/articles/${article_id}`)
        .then((res) => {
            const {data} = res;
            return data.article;
        });
};

export const getComments = (article_id) => {
    return API.get(`/articles/${article_id}/comments`)
        .then((res) => {
            const {data} = res;
            return data.comments;
        });
};

export const articleVote = (article_id) => {
    return API.patch(`/articles/${article_id}`, {inc_votes: 1})
        .then(({data}) => {
            return data;
        });
};

export const addComment = (articleId, newComment) => {
    return API.post(`/articles/${articleId}/comments`,
        {
            body: newComment,
            username: "grumpy19",
        })
        .then(({data}) => {
            return data.comment;
        });
};