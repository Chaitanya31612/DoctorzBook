let chai = require("chai");
let chaiHttp = require("chai-http");
const Booking = require("../models/Booking");
const Doctors = require("../models/Doctors");
chai.use(chaiHttp);
let should = chai.should();
let server = require("../server");

describe("Check API", () => {
  describe("/GET check", () => {
    it("it should GET {API is working} message", (done) => {
      chai
        .request(server)
        .get("/api/check")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});

// register
describe("Register API", () => {
  describe("/POST register", () => {
    it("it should GET auth token and user after register", (done) => {
      let data = {
        name: "test1",
        email: "test111@test.com",
        password: "test",
      };
      chai
        .request(server)
        .post("/api/register")
        .send(data)
        .end((err, res) => {
          should.exist(res.body);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.message.should.be.eql("user created successfully");
          done();
        });
    });
  });
});

// login
describe("Login API", () => {
  describe("/POST login", () => {
    it("it should GET auth token and user after login", (done) => {
      let data = {
        email: "test@test.com",
        password: "test",
      };
      chai
        .request(server)
        .post("/api/login")
        .send(data)
        .end((err, res) => {
          should.exist(res.body);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("token");
          res.body.should.have.property("user");
          res.body.message.should.be.eql("user found, token sent");
          done();
        });
    });
  });
});

// getDoctors
describe("getDoctors API", () => {
  describe("/GET getDoctors", () => {
    it("it should GET all doctors", (done) => {
      chai
        .request(server)
        .get("/api/getDoctors")
        .end((err, res) => {
          should.exist(res.body);
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
});

// getDoctorsSorted
describe("getDoctorsSorted API", () => {
  describe("/GET getDoctorsSorted", () => {
    it("it should GET all doctors sorted by given coordinates", (done) => {
      let data = { long: 25.0, lat: 34.0 };
      chai
        .request(server)
        .post("/api/getDoctorsSorted")
        .send(data)
        .end((err, res) => {
          should.exist(res.body);
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
});

// getDoctor
// describe("getDoctor API", () => {
//   describe("/GET getDoctor", () => {
//     it("it should GET doctor by id", (done) => {
//       let data = new Doctors({
//         user_id: "5e9f8f8f8f8f8f8f8f8f8f8",
//         doctorName: "a",
//         hospitalName: "a",
//         hospitalAddress: "a",
//         specialization: "a",
//         fees: 200,
//         city: "a",
//         state: "a",
//         country: "India",
//         location: {
//           type: "Point",
//           coordinates: [],
//         },
//       });
//       chai
//         .request(server)
//         .get("/api/getDoctor/" + data.id)
//         .send(data)
//         .end((err, res) => {
//           should.exist(res.body);
//           res.should.have.status(200);
//           res.body.should.be.a("object");
//           done();
//         });
//     });
//   });
// });

// getBooking
// describe("/GET/:id booking", () => {
//   it("it should GET a booking by the given id", (done) => {
//     let booking = new Booking({
//       user_id: "5e9f8f8f8f8f8f8f8f8f8f8",
//       doctor_id: "5e9f8f8f8f8f8f8f8f8f8f8",
//       bookingDate: "2020-01-01",
//       start: 10,
//       end: 11,
//     });
//     booking.save((err, booking) => {
//       chai
//         .request(server)
//         .get("/getBooking/" + booking.id)
//         .send(booking)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a("object");
//           done();
//         });
//     });
//   });
// });
