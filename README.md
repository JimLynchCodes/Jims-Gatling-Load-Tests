# Jims-Gatling-Load-Tests
Some of Jim's load favorite Gatling load tests.

## Why Gatling?
Gatling is my load testing tool of choice, and I'm not even really a Scala programmer! I am primary building NodeJS backend lambda functions at the moment which are then exposed at REST endpoints.

I like Gatling because:

-
-
-

## Simple Scenarios Are Fine
A "scenario" is a concept in gatling that they define in the docs as, """


## Thinking Of Your Requests As Users, And Requests As Scenarios
Gatling was built to work for both REST endpoints and also measuring the load and response times of frontend web servers. As with any DSL, we have to sometimes bend our intuition to fit with the assumptions of out current framework. 


## Running The Test(s)

```
./bin/gatling.sh -m -s loadTests.JimTest
```

## Jim's Recommendations For Integration Gating Into A NodeJS Project
Sadly, there is no npm package containing Gatling. Because of this, I normally just download the official gatling starter folder from the [official downloads page](https://gatling.io/download/), move it into a load testing dedicated folder within my project, deleted all their starter tests, and create my own. I then run the tests with the _gatling.sh_ or _gatling.bat_ file.
 
 