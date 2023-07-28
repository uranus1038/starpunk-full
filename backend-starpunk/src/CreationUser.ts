import express, { Request, Response, Router } from 'express';
import { UMIMysql } from '../config/database';
import bcrypt from 'bcrypt';
import { YUMI } from "./UMIProtection/YUMI";
export class CreationUser {
    public router: Router;
    public yumi: YUMI = new YUMI();
    constructor() {
        this.router = express.Router();
        this.Init();
    }
    private Init(): void {
        this.router.post('/',this.yumi.limiter ,this.create);
    }
    private async create(req: Request, reply: Response) {
        const { email, userName, passWord, birthday, pin, gender } = req.body;
        await UMIMysql.execute("SELECT email FROM accouts WHERE email = ? ", [email]).then(([result]) => {
            if ((<any[]>result).length === 1) {
                return reply.send({ status: "email-active" });
            } else if ((<any[]>result).length === 0) {
                UMIMysql.execute("SELECT * FROM accouts WHERE userName = ? ", [userName]).then(([result]) => {
                    if ((<any[]>result).length === 1) {
                        return reply.send({ status: "name-active" });
                    } else
                        if ((<any[]>result).length === 0) {
                            const accout: string = "member";
                            const date: Date = new Date();
                            const number: number = Math.floor(Math.random() * 9999) + 1;;
                            const passHash: string = bcrypt.hashSync(passWord, 10);
                            const pinHash: string = bcrypt.hashSync(pin.toString(), 10);
                            UMIMysql.execute("INSERT INTO accouts (email ,userName , passWord , birthday , gender ,date  ,accout ,PIN,number ) VALUES (?,?,?,?,?,?,?,?,?) ",
                                [email, userName, passHash, birthday, gender, date, accout, pinHash, number]).then(([result]) => {
                                }).then(() => {
                                    return reply.status(201).send({ status: "successed" });
                                })
                        }
                })  
            }
        });
    }
   

}