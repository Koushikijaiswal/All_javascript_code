// const { Sequelize, DataTypes}=require("sequelize");
// //console.log(Sequelize);

// let sequelize = new Sequelize('ecommerce','root','Koushiki@321',{
//     host : 'localhost',
//     dialect:'mysql',
//     define: {
//         timestamps: false
//     }
// });

// sequelize.authenticate().then(()=> {
//     console.log("connection successfully");
// }).catch((error)=> {
//     console.log("error while connecting",error);
// });

// //return {sequelize}


// // created schema 
// let userModel=sequelize.define("users",{

//     id:{ 
//     type:DataTypes.TINYINT,
//     allowNull:false,
//     autoIncrement:true,
//     primaryKey:true
// },

//  name :{
//     type:DataTypes.STRING,
//     allowNull:false
//  },

// email:{
//     type:DataTypes.STRING,
//     allowNull:false
//  },

// password:{
//     type:DataTypes.STRING,
//     allowNull:false
//  },
//  created_at:{
//     type:DataTypes.DATE,
//     defaultValue:sequelize.fn('NOW')
//  }

// }
// );

// function addUser(user){
//     sequelize.sync().then(()=>{
//         userModel.create(user).then(()=>{
//             console.log('user connect successfully');
//         })
//     })
// }

// deleteUserById(8);
// function deleteUserById(id){
//     sequelize.sync().then(()=>{
//         userModel.destroy({
//             where:{
//                 id: id
//             }
//         }).then(()=>{
//             console.log('user deleted successfully');
//         })
//     })
// }


const { userController } = require('./controllers/user.controller');
const { productController } = require('./controllers/product.controller');
const { executeWithSync } = require('./sequelize.connection');

// let p1 = userController
// .findUserById(2, true)
// .then((data) => {
//     console.log(data);
// })
// ;

let p1=userController
.findAllUsers(2)
.then((data)=>{
    return data.map((user)=>user.dataValues)
})
.then((data)=>{
    data.forEach((user)=> {
        console.log(user);
    });
})

executeWithSync(p1);