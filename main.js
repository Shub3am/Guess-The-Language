import { franc } from "franc";
import langs from "langs";

console.log(langs.where("3", franc(process.argv[2])).name);
