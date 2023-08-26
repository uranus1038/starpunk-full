import { token as env} from "../../../umi-config.json";
import rateLimit , { } from 'express-rate-limit';
import { Request, Response, NextFunction } from 'express';
export class YUMI {
    public limiter:any  ; 
    constructor ()
    {
        // Limite time requast
        this.limiter = rateLimit({
            windowMs: 15 * 60 * 1000, 
            max: 18, 
            message: 'Too many requests, please try again later.' 
          })
    }  
    public OnLimiter():void
    {

    }
    public isToken(req: Request, reply: Response, next: NextFunction) {
        const {token} = req.body ;    
        if(token !== env.pin)
        {
            return reply.status(401).send("You are not authorized to access this resource");
        }
        next(); 
      }
      

}