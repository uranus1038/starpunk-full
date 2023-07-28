import express from "express";
import cors from "cors" ;
import { CreationUser } from "./CreationUser";
import { GetPlayerLogin } from "./GetPlayrLogin";
export class HttpWebAppServices{
    private app: express.Application = express();
    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
    }
    public creation(path: string): void {
        this.app.use(path, new CreationUser().router);
    }
    public playerLogin(path: string): void {
        this.app.use(path, new GetPlayerLogin().router);
    }
    public listener(port:number)
    {
        this.app.listen(port,()=>{console.log("UMILog::Server start port : " +port);
        })
    }
}