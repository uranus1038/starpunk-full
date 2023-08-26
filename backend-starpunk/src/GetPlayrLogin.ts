import express, { Request, Response, Router } from 'express';
import { UMIMysql } from '../config/database';
import {accout} from '../interface/accout'
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
    private async getDataPlayer(req: Request, reply: Response):Promise<void> {
        const { email, QUk8sYq_x } = req.body;
        const passWord:string = QUk8sYq_x;
        console.log("u:"+email + " pw:" + passWord);
        await UMIMysql.query("SELECT * FROM accouts WHERE email = ? ", [email]).then(([result]) => {
            const data:accout =  (<accout[]>result)[0] ;
            if (Array.isArray(result)&& result.length === 1) {
                 if(bcrypt.compareSync(passWord, data.passWord)){
                    reply.status(200).send(JSON.stringify({
                        "status": "200", "data": {
                            "userName": data.userName,
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