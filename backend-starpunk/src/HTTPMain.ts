import { HttpWebAppServices } from "./HTTPServices";

const app = new HttpWebAppServices(8000);
app.login("/login",(result)=>{console.log(result);});