import http from "http";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";
import * as control from "./controllers/podcontrol";
import { StatusCode } from "./utils/status-code";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
  
  const urlBase = request.url?.split("?")[0] ?? "";

  if(request.method === HttpMethods.GET && urlBase === Routes.LIST ){
    await control.getListEpisodies(request, response);  
    return;
  };

  if(request.method === HttpMethods.GET && urlBase === Routes.PODCASTS ){
    await control.filterEpisodies(request, response);  
    return;
  }
  
  response.writeHead(StatusCode.NotFound,{'Content-Type': 'text/html'})
  response.end("Not Found 404");
  
};
