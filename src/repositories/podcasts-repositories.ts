import fs from "fs"
import path from "path";
import {PodcastModel} from "../models/podcast-model"


const DB = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodCast = async (podCastName? : string ): Promise<PodcastModel[]> =>  {
  const dataRaw = fs.readFileSync(DB, "utf8");
  let jsonFile = JSON.parse(dataRaw);
  
  if(podCastName){
    jsonFile = jsonFile.filter(
      (podcast : PodcastModel) => podcast.podcastName === podCastName
    )
  };

  return jsonFile;
};


