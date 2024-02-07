import { CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: process.env.UserPoolId,
    ClientId: process.env.ClientId
}

let UserPool = new CognitoUserPool(poolData)

export default UserPool;