import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
 
export function rateLimit(request: ZuploRequest, context: ZuploContext) {
  const user = request.user;
 
  // portfolio tokens get 10 requests per mintue
  if (user.data.scope === "portfolio") {
    return {
      key: user.sub,
      requestsAllowed: 100,
      timeWindowMinutes: 1,
    };
  }
 
  // everybody else gets 3 requests per minute
  return {
    key: user.sub,
    requestsAllowed: 3,
    timeWindowMinutes: 1,
  };
}