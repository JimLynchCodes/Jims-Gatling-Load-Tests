package jimsLoadTests

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class basicAtOnceTest extends Simulation {
	
	val httpConf = http.baseURL("https://YOUR_URL")

	println("hello" + sys.env("HOME"))

    val concurrentRequests = sys.env("HOME").toInt
	val scn = scenario("My Scenario")
	  
	  .exec(
	  	http("My Request")
	      .get("/Stage?tickers=BNBBTC")
	      .check(status is 200))
	
	setUp(scn.inject(atOnceUsers(concurrentRequests)).protocols(httpConf))
}