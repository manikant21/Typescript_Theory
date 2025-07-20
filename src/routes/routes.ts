import { Router } from "express";
import {deleteName, getResponse, saveRequest} from '../controllers/controllers';

const router = Router();

router.get("/", getResponse);
router.post("/post", saveRequest);
router.delete("/delete", deleteName);

export  {router} ; 