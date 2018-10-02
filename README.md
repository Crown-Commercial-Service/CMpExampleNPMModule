# CMpExampleNPMModule
Example NPM module for build pipe line that allows access to AppConfig information from environment variables. 

This is a minimal implementation to allow a simple build pipe line to be created and the resulting npm package to be referenced by another project, in this case app1 in the CMpExampleApp1 repository. It provides a small class, `AppConfig` that inspects the environment variables to generate a valid URL for invoking the example Api.

## Local Testing ##
To test locally, assuming nodejs and npm are installed, checkout the repository from Github and execute the following:

```
npm install
npm test
```

## Build Pipeline ##
The corresponding example build pipeline project is in the `CMpDevEnvironment` repository as `/terraform/build/npm1`. The pipeline currently needs to be stored within the `CMpDevEnvironment` repository because it requires access to various Terraform modules.
