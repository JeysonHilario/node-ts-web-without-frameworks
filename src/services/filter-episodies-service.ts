import { IncomingMessage } from "http";
import {repositoryPodCast} from "../repositories/podcasts-repositories"
import { PodCastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async ( podCastName : IncomingMessage ) : Promise<PodCastTransferModel> => {
  
  let responseFormat: PodCastTransferModel = {
    statusCode: 0,
    body: []
  }
  
  const queryString = podCastName.url?.split("?p=")[1] || "";
  const data = await repositoryPodCast(queryString);
  
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data
  }
  
  return responseFormat;
}
