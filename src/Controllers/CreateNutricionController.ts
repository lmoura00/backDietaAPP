import { FastifyRequest, FastifyReply} from 'fastify'
import { CreateNutricionService } from '../Services/CreateNutricionService'

export interface Data{
    name : string, 
    weight : string, 
    height : string, 
    age : string, 
    gender : string, 
    objective : string, 
    level: string
}


class CreateNutricionController{
    async handle(request:FastifyRequest, reply: FastifyReply){
        const {name, weight, height, age, gender, objective, level} = request.body as Data

        const create = new CreateNutricionService()

        const nutricion = await create.execute({name, weight, height, age, gender, objective, level})
        
        reply.send(nutricion)
    
    }
}

export {CreateNutricionController}

