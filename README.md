# AWS Lambda Boilerplate (JS)

[![Build Status](https://travis-ci.org/dtimberlake/aws-lambda-boilerplate.svg?branch=master)](https://travis-ci.org/dtimberlake/aws-lambda-boilerplate-js)
[![Coverage Status](https://coveralls.io/repos/github/dtimberlake/aws-lambda-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/dtimberlake/aws-lambda-boilerplate-js?branch=master)
[![Code Climate](https://codeclimate.com/github/dtimberlake/aws-lambda-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)

This is my starting point for all of my nodejs lambda functions.

**Features:**
- Dead code elimination and code minimization with Webpack
- Jest test setup
- Logging with winston
- Deployment with CloudFormation
- Pipeline setup for CI

**Manual Deploy Steps**:
1. Set s3Bucket and stackName config values in `package.json`
2. `yarn build`
3. `yarn package`
4. `yarn deploy`

**CI Deploy Steps**:
1. Set parameters in `package.json`
    -  `s3Bucket`
    - `stackName`
    - `applicationName`
    - `ciStackName`
    - `githubUser`
    - `githubRepo`
    - `githubBranch`
2. Set environment variable `GITHUB_OAUTH_TOKEN`
3. Run `yarn deploy:ci`

*Contributions always welcome*