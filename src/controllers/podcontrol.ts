import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodies } from '../services/list-eposodies-service'
import { serviceFilterEpisodes } from '../services/filter-episodies-service'

export const  getListEpisodies = async ( 
  request : IncomingMessage, 
  response: ServerResponse
) => {
  let content = await serviceListEpisodies();
  
  response.writeHead(content.statusCode, {'Content-Type': 'application/json'})
  response.write(JSON.stringify(content.body))
  response.end();

}
export const  filterEpisodies = async ( 
  request : IncomingMessage, 
  response: ServerResponse
) => {
  let content = await serviceFilterEpisodes(request)

  response.writeHead(content.statusCode,{'Content-Type': 'application/json'})
  response.write(JSON.stringify(content.body))
  response.end();
}
