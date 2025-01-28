import { PodCastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodCast } from "../repositories/podcasts-repositories"
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodies = async (): Promise<PodCastTransferModel> =>{
    
  let responseFormat: PodCastTransferModel = {
    statusCode: 0,
    body: []
  }

  const data = await repositoryPodCast(); 
  
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data
  }
  
  return responseFormat;

}
