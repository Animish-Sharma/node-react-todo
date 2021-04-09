const Todo = require("../models/Todo");

module.exports = {
    async todoIndex(req, res,next){
        try{
          let todos = await Todo.find({}).sort("-_id");
          res.status(200).json({todos}); 
        }catch(err){
            throw err;
        }
    },
    async todoDetail(req,res,next){
        try{
            const detailTodo = await Todo.findById({ _id:req.params.id });
            res.status(200).json({ detailTodo });
        }catch(err){
            throw err;
        }
    },
    async todoCreate(req,res,next){
        try{
          const body= req.body;
          const todo = new Todo({
          title:body.title,
          description:body.description
        });
        await todo.save();
        res.status(201).json({ todo }); 
        }catch(err){
            throw err;
        }  
    },
    async todoUpdate(req,res,next){
        try{
            const {
            params:{ id },
            body
        }=req;
        const updateTodo = await Todo.findByIdAndUpdate(
            {_id:id},
            req.body
        );
        await updateTodo.save();
        res.status(200).json({message:req.body})
        }catch(err){
            throw new Error
        };
    },
    async todoDelete(req,res,next){
        try{
            await Todo.findByIdAndRemove(req.params.id);
            res.status(200).json({message:"Todo Deleted"});
        }catch(err){
            throw err;
        }
    },
    async todoDeleteAll(req,res,next){
        try{
            await Todo.deleteAll();
            res.status(200).json({message:"All Todo Deleted"});
        }catch(err){
            console.log(err);
            throw new Error(err);
        }
    }
}