import express, { Request, Response, Router } from 'express';
import { UMIMysql } from '../config/database';
import bcrypt from 'bcrypt';
import { YUMI } from "./UMIProtection/YUMI";
import { accout } from '../interface/user';
export class GetData {
    public router: Router;
    public yumi: YUMI = new YUMI();
    constructor() {
        this.router = express.Router();
        this.Init();
    }
    private Init(): void {
        this.router.post('/', this.yumi.limiter, this.getData);
    }
    private async getData(req: Request, reply: Response):Promise<void> {
        const { userName } = req.body;
        console.log("n:"+userName);
        const promises = [
            UMIMysql.query("SELECT * FROM `cDat1` WHERE userName = ?", [userName]),
            UMIMysql.query("SELECT * FROM `cDat2` WHERE userName = ?", [userName]),
            //UMIMysql.query("SELECT * FROM `characterdataslot3` WHERE userName = ?", [userName])
        ];
        await Promise.all(promises)
                        .then(([result1, result2, result3]) => {
                            const data1:accout[] =(<accout[]><unknown[]>result1) ; 
                            const data2:accout[] =(<accout[]><unknown[]>result2) ; 
                            //const data3:accout[] =(<accout[]><unknown[]>result3) ;
                            // send data
                            reply.status(200).send(JSON.stringify({ "status": "200", "cDat1":data1[0] , 
                            "cDat2":data2[0] }));
                        })
    }
}