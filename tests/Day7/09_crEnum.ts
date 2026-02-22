//Class room activities
enum environment {
    LOCAL = 8080,
    DEVELOPMENT = "dev.server.com",
    STAGING = "staging.server.com",
    PRODUCTION = 8081,
    QA,
    UAT = "uat.server.com"
}

function runTest(params: environment) {
   // console.log(`Running tests in environment: ` + environment[params]);
    console.log(`Running tests in environment: ${params}`);
    console.log(`Running tests in environment:` + params);
    return;
}
runTest(environment.DEVELOPMENT); 
runTest(environment.LOCAL); 
runTest(environment.PRODUCTION); 
runTest(environment.STAGING); 
runTest(environment.QA); 
runTest(environment.UAT);