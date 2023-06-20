import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
const app=express();

app.use(express.json());

app.use("/categories",categoriesRoutes);



app.get ("/",(request,response)=>{
    return response.json({message:"hello word!!!"});
});

    app.post("/courses",(request ,response)=> {

        console.log(request.body);
        const {name} = request.body;
        return response.json({name});
    });

app.listen(4444, () => console.log("server in running!"));


