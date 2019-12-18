export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_PDegFvy3DhwqCP6pubkLA1zH",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-uploads-bucketti"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://fq4oadpwdj.execute-api.eu-west-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_jCFGaIEVQ",
    APP_CLIENT_ID: "6pffds9cjdggusoakeu190t1ud",
    IDENTITY_POOL_ID: "eu-west-1:d36b426f-010e-417d-9e30-60203fa28110"
  }
};
