import { Router, request, response } from "express";

import {v4 as uuidV4}  from 'uuid'
import { Cattegory } from "../model/Cattegory";
const categoriesRoutes =Router();


const categories:Cattegory[]= [];

categoriesRoutes.post("/", (request,response)=> {
const {name,desc}=request.body;


const category: Cattegory={
    name,
    desc,
    id: uuidV4(),
    created_at:new Date(),
};

categories.push(category);


return response.status(201).send();
});
export{categoriesRoutes};
