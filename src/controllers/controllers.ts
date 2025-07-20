import { Request, Response } from "express";

interface Box {
    id: String,
    name: String
}

let todo: Box[] = [];

export const getResponse = (req: Request, res: Response) : void=> {
 res.status(200).json({todo: todo})
}

export const deleteName = (req: Request, res: Response) => {
    let name = req.body.name;
    todo= todo.filter((user: Box )=> user.name != name)
    res.status(200).json({msg: "User deleted successfully"});
}

export const saveRequest = (req: Request, res: Response) => {
    try {
        const data: Box = {
            id: new Date().toISOString(),
            name : req.body.name
        };
        todo.push(data);
        res.status(201).json({msg: "Data successfully pushed into array"})
    } catch (error) {
        console.log("Something went wrong!!");
        res.status(500).json({msg: "Something went wrong!!"})
    }
}

