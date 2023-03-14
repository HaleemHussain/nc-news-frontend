import axios from "axios";

const newsAPI = axios.create({
    baseURL: "https://nc-news-o54u.onrender.com/api/",
});

export const fetchArticles = () => {
    return newsAPI.get("/articles").then((res) => {
        const {data} = res;
        return data.articles;
    });
};

export const fetchArticleById = (article_id) => {
    return newsAPI.get(`/articles/${article_id}`).then((res) => {
        const {data} = res;
        return data.article;
    });
};