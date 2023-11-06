# To_Do_List_Project
This project is an online to-do list application built using the MERN stack (MongoDB, Express and Node.js). The application is designed to be simple and allow users to easily keep track of their tasks with features such as task creation, and task deletion.

Here the below figure represents the folder or files structure that i have used in VS code...
![image](https://github.com/21505a0502/ToDoList/assets/131691278/9a614918-c8e3-4b79-b9ec-ed02072765a1)


In the above we can see that there are different files presented, here we have a short desccription for each file. like what it is actually used for.

##congig-> mongoose.js This file contains set of statements that establishes a connection between the VS code and mongoDB. step 1 : firstly we need to download mongoose shell into our System. https://www.mongodb.com/try/download/shell

step 2 : then we need to create an account in atlas. https://cloud.mongodb.com/

step 3 : we need to create a database named TODO and then use connect option MongoDB for VS Code, this will provide a link like this 'mongodb+srv://username:passwd@cluster0.pobbk4f.mongodb.net/TODO'

that's it mongoose file is now ready .

##models -> schema.js this file contains the database schema structure there is no additional steps involved in this file, we simply need to create a schema for our DB, which is created previously in altas.

##views -> To-do-frame.ejs this file contains the main user interface of todo list, this file includes html, css, js and ejs code. i haven't created any external css file.. i have already provide requried detailed info about code itself in the file...

##server.js this file contains controllers such as /(home page controller),adddata, deletedata and server listen creation. adddata controller is used to receive form data and insert the data into the database. deletedata controller is used to delete one or more tasks by using unique ID which is automatically assigned for each object.

![image](https://github.com/21505a0502/ToDoList/assets/131691278/fa4319a4-0d6c-4bd7-8923-746f9ac38144)

![image](https://github.com/21505a0502/ToDoList/assets/131691278/fd69692c-7a74-45b7-80a5-4d30a898332b)

![image](https://github.com/21505a0502/ToDoList/assets/131691278/9580f92c-4c46-4b65-b1ed-f0486c5211b0)

![image](https://github.com/21505a0502/ToDoList/assets/131691278/49042182-54cc-4b58-a408-78612b95d7ac)
