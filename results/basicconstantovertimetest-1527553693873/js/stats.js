var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1473",
        "ok": "1470",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "303",
        "ok": "303",
        "ko": "3159"
    },
    "maxResponseTime": {
        "total": "8051",
        "ok": "7523",
        "ko": "8051"
    },
    "meanResponseTime": {
        "total": "1982",
        "ok": "1974",
        "ko": "6205"
    },
    "standardDeviation": {
        "total": "2236",
        "ok": "2228",
        "ko": "2170"
    },
    "percentiles1": {
        "total": "633",
        "ok": "632",
        "ko": "7404"
    },
    "percentiles2": {
        "total": "4479",
        "ok": "4474",
        "ko": "7728"
    },
    "percentiles3": {
        "total": "6031",
        "ok": "6024",
        "ko": "7986"
    },
    "percentiles4": {
        "total": "6923",
        "ok": "6764",
        "ko": "8038"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 932,
        "percentage": 63
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 45,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 493,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "77.526",
        "ok": "77.368",
        "ko": "0.158"
    }
},
contents: {
"req_my-request-f106a": {
        type: "REQUEST",
        name: "My Request",
path: "My Request",
pathFormatted: "req_my-request-f106a",
stats: {
    "name": "My Request",
    "numberOfRequests": {
        "total": "1473",
        "ok": "1470",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "303",
        "ok": "303",
        "ko": "3159"
    },
    "maxResponseTime": {
        "total": "8051",
        "ok": "7523",
        "ko": "8051"
    },
    "meanResponseTime": {
        "total": "1982",
        "ok": "1974",
        "ko": "6205"
    },
    "standardDeviation": {
        "total": "2236",
        "ok": "2228",
        "ko": "2170"
    },
    "percentiles1": {
        "total": "633",
        "ok": "632",
        "ko": "7404"
    },
    "percentiles2": {
        "total": "4479",
        "ok": "4474",
        "ko": "7728"
    },
    "percentiles3": {
        "total": "6031",
        "ok": "6024",
        "ko": "7986"
    },
    "percentiles4": {
        "total": "6923",
        "ok": "6764",
        "ko": "8038"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 932,
        "percentage": 63
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 45,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 493,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "77.526",
        "ok": "77.368",
        "ko": "0.158"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
