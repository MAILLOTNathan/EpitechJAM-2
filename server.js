const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://noah:julWAvKT742ZCPXR@mydb.exhfxs3.mongodb.net/').then(() => {console.log("ok")
}).catch((error) => {
    console.log(error);
});



app.use(bodyParser.json());

const YourSchema = mongoose.Schema({
    id: {type: String, required: true},
    student: {type: String, required: true}
});


const YourModel = mongoose.model('workshop', YourSchema);


app.get('/',  (req, res) => {
    YourModel.find()
    req.params.Schema.YourSchema
    .then((hu) => {return res.status(200).json(hu)})
    .catch((error) => {return res.status(400).json({error})});});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
