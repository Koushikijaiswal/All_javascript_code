const { Sequelize, DataTypes}=require("sequelize");
//console.log(Sequelize);
function createconnection(){
let sequelize = new Sequelize('ecommerce','root','Koushiki@321',{
    host : 'localhost',
    dialect:'mysql',
    define: {
        timestamps: false
    }
});

sequelize.authenticate().then(()=> {
    console.log("connection successfully");
}).catch((error)=> {
    console.log("error while connecting",error);
});

  return{sequelize}
}

let {sequelize}=createconnection();
function executeWithSync(promisecallback){
    sequelize.sync().then(()=>promisecallback);
}
module.exports={sequelize,executeWitSync};