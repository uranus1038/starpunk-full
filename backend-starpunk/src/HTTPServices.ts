import express, { Request, Response, Router } from "express";

export class HttpWebAppServices{
    private app: express.Application = express();
    constructor(port:number) {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.listener(port);
    }
    public login(path: string, callback: (data: any) => void): void {
        this.app.post(path, (req: Request, reply: Response) => {
            console.log(req.body.name);
            reply.send("success");
        });
    }
    public listener(port:number)
    {
        this.app.listen(port,()=>{console.log("UMILog::Server start port : " +port);
        })
    }
}