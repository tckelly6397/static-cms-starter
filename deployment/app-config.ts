import * as dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
    account_number: process.env.ACCOUNT_NUMBER || '',
    region: process.env.REGION || '',
    stack_name: process.env.STACK_NAME || '',
    github: {
        auth_token: process.env.AUTH_TOKEN || '',
        repo_owner: process.env.REPO_OWNER || '',
        repo_name: process.env.REPO_NAME || '',
        branch: { 
            dev: process.env.DEV_BRANCH || '',
            prod: process.env.PROD_BRANCH || '',
        }
    },
};

export { CONFIG };
