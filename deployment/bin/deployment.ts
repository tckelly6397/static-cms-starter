#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CognitoStack } from '../lib/cognito-stack';
import { WebStack } from '../lib/web-stack';
import { CONFIG } from '../app-config';

const env = {
    account: CONFIG.account_number,
    region: CONFIG.region
};

const app = new cdk.App();
new CognitoStack(app, `${CONFIG.stack_name}-CognitoStack`, {
    env
});

new WebStack(app, `${CONFIG.stack_name}-WebStack`, {
    env
});
