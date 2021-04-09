const faker = require('faker');
const Todo = require('./models/Todo');

async function seedTodo(){
    await Todo.deleteMany({})
    for(const i of new Array(10)){
        const title = faker.lorem.word();
        const description = faker.lorem.text();

        const todoData={
            title,
            description
        };
        let todo = new Todo(todoData);
        await todo.save();
    };
    console.log("10 posts created")
};


module.exports = seedTodo;