import  {HttpWebAppServices}  from "./HTTPServices";
const app = new HttpWebAppServices();
//api web
app.creation("/api/creation/submit");

//api app
app.playerLogin("/api/user/getPlyerLogin/");
app.playerData("/api/user/getPlyerData/");
app.listener(8000);