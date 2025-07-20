import { Request, Response } from "express";

type requestBody = {
    name: string
}

interface Box {
    id: String,
    name: String
}

let todo: Box[] = [];

export const getResponse = (req: Request, res: Response) : void=> {
 res.status(200).json({todo: todo})
}

export const deleteName = (req: Request, res: Response) => {
    let body = req.body as requestBody;
    todo= todo.filter((user: Box )=> user.name != body.name)
    res.status(200).json({msg: "User deleted successfully"});
}

export const saveRequest = (req: Request, res: Response) => {
    try {
        const body = req.body as requestBody;
        const data: Box = {
            id: new Date().toISOString(),
            name : body.name
        };
        todo.push(data);
        res.status(201).json({msg: "Data successfully pushed into array"})
    } catch (error) {
        console.log("Something went wrong!!");
        res.status(500).json({msg: "Something went wrong!!"})
    }
}

