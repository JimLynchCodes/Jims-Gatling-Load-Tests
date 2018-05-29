var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2807",
        "ok": "2807",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3394",
        "ok": "3394",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2962",
        "ok": "2962",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "225",
        "ok": "225",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2824",
        "ok": "2824",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2977",
        "ok": "2977",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3311",
        "ok": "3311",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3377",
        "ok": "3377",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "1.25",
        "ko": "-"
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2807",
        "ok": "2807",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3394",
        "ok": "3394",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2962",
        "ok": "2962",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "225",
        "ok": "225",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2824",
        "ok": "2824",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2977",
        "ok": "2977",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3311",
        "ok": "3311",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3377",
        "ok": "3377",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "1.25",
        "ko": "-"
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
