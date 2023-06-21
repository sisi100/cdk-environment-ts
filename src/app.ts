import * as cdk from "aws-cdk-lib";
import { getEnvironmentVariables } from "./env";
const app = new cdk.App();

const env = app.node.tryGetContext("env");
const envVars = getEnvironmentVariables(env);
console.log(envVars?.hogeParam);

app.synth();
