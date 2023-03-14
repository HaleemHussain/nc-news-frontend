import {useEffect, useState} from "react";
import {getComments} from "../api";

export default function Comments({article_id}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(article_id).then((data) => {
            setComments(data);
        });
    }, [article_id]);
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Comments
                </div>

                {comments.map((comment) => {
                    return (
                        <div key={comment.comment_id} className="card-body">
                            <blockquote className="blockquote border-bottom mb-0">
                                <p>{comment.body}</p>
                                <footer className="blockquote-footer">
                                    {comment.author}
                                    <div className='float-end'>
                                        <button type="button" className="btn btn-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                            </svg>
                                            {comment.votes}
                                        </button>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    );
                })}

            </div>
        </>
    )
}