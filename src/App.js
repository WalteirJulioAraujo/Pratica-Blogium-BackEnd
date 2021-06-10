import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const posts = [{
    id: 1,
    title: 'Hello World',
    coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
    contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
    content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
    commentCount: 2
}];

const comments =[{
    id: 1,
    postId: 1,
    author: 'João',
    content: 'Muito bom esse post! Tá de parabéns'
  }, {
    id: 2,
    postId: 1,
    author: 'Maria',
    content: 'Como faz pra dar palmas?'
}];

let idComments = 3;
let idPosts = 2;

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