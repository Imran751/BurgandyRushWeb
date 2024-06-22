module.exports = {
  name: "burgandirushweb",
  version: "1.0.0",
  extra: {
    clerkPublishableKey:
      process.env.pk_test_cG9ldGljLWZvd2wtNTEuY2xlcmsuYWNjb3VudHMuZGV2JA,
  },
  expo: {
    android: {
      package: "com.imran.burgandirushweb",
    },
    extra: {
      eas: {
        projectId: "39944990-3908-4bd0-8034-bc43469f6724",
      },
    },
  },
};
