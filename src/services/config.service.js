angular.module("app").factory("ConfigService", [
  function () {
    var service = {};

    service.apiBase =
      "https://quiz-env.eba-mdn2hbcr.us-west-2.elasticbeanstalk.com/";

    return service;
  },
]);
