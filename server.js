const express = require('express')
const mongoose = require('mongoose')
const Data = require('./dataModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
/***
 * Get all the Data listing
 */
app.get('/data', async(req, res) => {
    try {
        const data = await Data.find({}, {_id :0, __v:0});
        if(data.length > 0)
            res.status(200).json(data);
        else    
            res.status(200).json({message: `No record found`});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

/***
 * Get a specific Data record
 */
app.get('/data/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const data = await Data.find({id: id}, {_id :0});
        if(data.length > 0)
            res.status(200).json(data);
        else    
            res.status(200).json({message: `No record exist with ID ${id}`});   

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

/***
 * Post the id, name and title data to insert a new record
 */
app.post('/data', async(req, res) => {
    try {
        if(Object.keys(req.body).length > 0) {
            const data = await Data.create(req.body)
            res.status(200).json(data);
        } else {
            res.status(200).json({message: `No data provided to create new record`})
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update the data 
app.put('/data/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const data = await Data.updateOne({id: id}, req.body);
        // we cannot find any data in database
        if(!data){
            return res.status(404).json({message: `cannot find any data with ID ${id}`})
        }
        const updateddata = await Data.find({id: id}, {_id :0, __v:0});
        res.status(200).json(updateddata);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a data
app.delete('/data/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const data = await Data.deleteOne({id: id});
        if(!data){
            return res.status(404).json({message: `cannot find any data with ID ${id}`})
        }
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)
mongoose.connect('mongodb://localhost:27017/crudapi')
  .then(() => {
    console.log('Connected!')
    app.listen(3000, () => 
    console.log('Node CURD APP running on port 3000')
)
  }).catch(() => {
    console.log(error)
 })