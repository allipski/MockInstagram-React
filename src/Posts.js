import Post from "./Post";

export default function Posts() {

    const posts = [
        {
            usersrc: "img/meowed.svg",
            username: "meowed",
            contentsrc: "img/gato-telefone.svg",
            commentsrc: "img/respondeai.svg",
            likeuser: "respondeai",
            likenumber: "outras 101.523 pessoas"
        }, 
        {
            usersrc: "img/barked.svg",
            username: "barked",
            contentsrc: "img/dog.svg",
            commentsrc: "img/adorable_animals.svg",
            likeuser: "adorable_animals",
            likenumber: "outras 99.159 pessoas"
        }
    ]

    return (
        <div class="posts">
             {posts.map(post => <Post usersrc={post.usersrc} username={post.username} contentsrc={post.contentsrc} commentsrc={post.commentsrc} likeuser={post.likeuser} likenumber={post.likenumber} />)}
        </div>
    );
}