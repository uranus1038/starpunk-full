import mysql2 from "mysql2/promise"; 
import {mysql}  from "../../umi-config.json";
export const UMIMysql = mysql2.createPool({
    host: mysql.host,
    user: mysql.user,
    password: mysql.password,
    database: mysql.database
  });