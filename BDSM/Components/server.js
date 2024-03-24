const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let cors = require('cors');

const app = express();
const port = 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://noah:julWAvKT742ZCPXR@mydb.exhfxs3.mongodb.net/').then(() => {console.log("ok")
}).catch((error) => {
    console.log(error);
});

app.use(bodyParser.json());
app.use(cors());

const users = mongoose.Schema({
   mail: {type: String, required: true},
   prenom: {type: String, required: true},
   nom: {type: String, required: true},
   nbOuverture: {type: Number, required: true},
   age: {type: Number, required: true},
   password: {type: String, required: true}
});

const YourModel = mongoose.model('test', users);

const post = mongoose.Schema({
    user_name: {type: String, required: true},
    url : {type: String, required: true},
    content: {type: String, required: true}
 });
 
 const Post = mongoose.model('post', post);

const comments = mongoose.Schema({
   longitude: {type: String, required: true},
   latitude: {type: String, required: true},
   description: {type: String, required: true},
   title: {type: String, required: true},
});

const commentModel = mongoose.model('comments', comments);

app.get('/comments',  (req, res) => {
   commentModel.find()
   .then((hu) => {return res.status(200).json(hu)})
   .catch((error) => {return res.status(400).json({error})});});

app.post('/post', (req, res) => {
  const newComment = new Post(req.body)
  console.log(newComment)
  newComment.save().then((newComment) => {
     return res.status(201).json(newComment)
  })
  .catch((error) => {return res.status(400).json({error})})});

app.get('/post',  (req, res) => {
    Post.find()
    .then((hu) => {return res.status(200).json(hu)})
    .catch((error) => {return res.status(400).json({error})});});
 
 app.post('/comments', (req, res) => {
   const newComment = new Post(req.body)
   newComment.save().then((newComment) => {
      return res.status(201).json(newComment)
   })
   .catch((error) => {return res.status(400).json({error})})});

app.get('/',  (req, res) => {
    YourModel.find()
    .then((hu) => {return res.status(200).json(hu)})
    .catch((error) => {return res.status(400).json({error})});});

app.post('/', (req, res) => {
   const newUser = new YourModel(req.body)
   newUser.save().then((newUser) => {
      return res.status(201).json(newUser)
   })
   .catch((error) => {return res.status(400).json({error})})});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
