import { Schema, model } from "mongoose";
const productoSchema = new Schema({
    categoria:[{ type: Schema.Types.ObjectId, ref: "Categoria" }], 
    modelo:{
        type: String,
        require: true
        
    },
    marca:{
        type: String,
        require: true,
        index: { unique: true }         
    },
    descripcion:{
        type: String,
        require: true
        
    },
    stock:{
        type: Number,
        require: true
    },    
    
    precio:{
        type: Number,
        require: true
    }  

},{timestamps:true ,
    versionKey:false});
export default model("Producto", productoSchema);