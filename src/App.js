import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const posts = [];

const comments =[];

let idComments = 1;
let idPosts = 1;

app.get('/posts',(req,res)=>{
    res.send(posts);
    console.log('posts foram enviados');
})

app.get('/posts/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const filterPost = posts.filter((e)=>id===e.id);
    res.send(filterPost);
    console.log('enviou post com id predefinido');
})

app.get('/post/:id/comments',(req,res)=>{
    const id = parseInt(req.params.id);
    const filterComments = comments.filter((e)=>id===e.postId);
    res.send(filterComments);
    console.log('enviou comentarios de um post predefinid');
    
})

app.post('/post',(req,res)=>{
    const addPost = {id:idPosts,...req.body}
    posts.push(addPost);
    res.send('Post adicionado');
    idPosts++;
})

app.post('/post/:id/comments',(req,res)=>{
    const id = req.params.id;
    const addComment = {id:idComments,...req.body};
    comments.push(addComment);
    res.send('Comentario adicionado');
    idComments++;
})


app.listen(4000,()=>{
    console.log('Servidor ligado!!')
});