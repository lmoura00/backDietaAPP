import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateNutricionController } from "./Controllers/CreateNutricionController";



export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {


  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    let responseText = "```json\n{\n  \"nome\": \"Lucas\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 26,\n  \"altura\": 1.75,\n  \"peso\": 90,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da Manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos\",\n        \"1 banana\",\n        \"200ml de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manhã\",\n        \"alimentos\": [\n        \"1 iogurte grego com granola\"\n      ]\n    },\n    {\n      \"horario\": \"12:30\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis\",\n        \"Salada verde\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 batata doce média\",\n        \"1 xícara de espinafre\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Pré-sono\",\n      \"alimentos\": [\n        \"Caseína\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey Protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Glutamina\"\n  ]\n}\n```"
    try {
      //Extrair json
      let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
      let jsonObject = JSON.parse(jsonString)
      return reply.send({data:jsonObject})
    } catch (error) {
      console.log(error)
    }
  });

  fastify.post("/create",async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutricionController().handle(request, reply)
  });
}
