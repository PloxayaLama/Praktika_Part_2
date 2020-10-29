/*const users = [
    {name:"user001", age:"228"},
    {name:"user002", age:"322"}
]*/

User = require('./models/UserModel'),

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.end("<h1>Hello from Nedo_server</h1>");      
    })
    
    app.get("/users", (req, res) => {
        User.find(function(err, users) {
            if (err) { 
                res.send(err);
            }
            res.json(users); 
        });
           
    })
    
    app.post("/users", (req, res) => {
        res.send(users);      
    })
}