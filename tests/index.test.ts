// chai imports: regular and for http requests
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

describe("Server up and runing", () => {
  it("GET/hello-world => should have status 200 in welcome page", done => {
    chai
      .request("http://localhost:3333")
      .get("/hello-world")
      .end((_, res) => {
        chai.expect(res).have.status(200);
        done();
      });
  });
});
