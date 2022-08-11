import { createRequire } from "module";
const require = createRequire(
    import.meta.url
);
import {franc, francAll} from 'franc';
const langs = require("langs");
const input = process.argv[2];
try{
const code = franc(input); 
const lang = langs.where('3', code);
console.log(`My guess is it's: ${lang.name}`);
}catch(e){
    console.log("Couldn't guess the language!! Try again with more sample text.");
}