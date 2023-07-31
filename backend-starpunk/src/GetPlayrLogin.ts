import express, { Request, Response, Router } from 'express';
import { UMIMysql } from '../config/database';
import bcrypt from 'bcrypt';
import { YUMI } from "./UMIProtection/YUMI";
export class GetPlayerLogin {
    public router: Router;
    public yumi: YUMI = new YUMI();
    constructor() {
        this.router = express.Router();
        this.Init();
    }
    private Init(): void {
        this.router.post('/', this.yumi.limiter, this.getDataPlayer);
    }
    private  getDataPlayer(req: Request, reply: Response):void {
        const { email, QUk8sYq_x } = req.body;
        const passWord:string = QUk8sYq_x;
        console.log("u:"+email + " pw:" + passWord);
        UMIMysql.query("SELECT * FROM accouts WHERE email = ? ", [email]).then(([result]) => {
            // if(Array.isArray(result))
            if ((<any[]>result).length === 1) {
                 if(bcrypt.compareSync(passWord, (<any[]>result)[0].passWord)){
                    reply.status(200).send(JSON.stringify({
                        "status": "200", "data": {
                            "userName": (<any[]>result)[0].userName,
                            "gender": (<any[]>result)[0].gender
                        }
                    }));
                }else
                {
                    reply.send(JSON.stringify({ "status": "404" }));
                }
            } else {
                reply.send(JSON.stringify({ "status": "404" }));
            }
        }).catch((error)=>
        {
            console.error(error);
        })
    }
}