package jimsLoadTests

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class basicConstantOverTimeTest extends Simulation {

	val httpConf = http.baseURL("https://YOUR_URL")

	val scn = scenario("My Scenario")

	  .exec(
	  	http("My Request")
	      .get("/Stage?tickers=BNBBTC")
	      .check(status is 200))

	setUp(scn.inject(constantUsersPerSec(10) during (15 seconds) randomized).protocols(httpConf))
}