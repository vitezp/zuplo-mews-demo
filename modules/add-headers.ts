import {ZuploContext, ZuploRequest} from "@zuplo/runtime";

type MyPolicyOptionsType = {
  myOption: any;
};

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {

  request.headers.set("access-token", request.user.data.accessToken);
  request.headers.set("client-token", request.user.data.clientToken);

  return request;
}
