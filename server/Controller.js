module.exports = {
  // get: (req, res, next) => {
  //   const dbInstance = req.app.get("db");

  //   dbInstance
  //     .get()
  //     .then(users => res.status(200).send(houses))
  //     .catch(error => {
  //       res.status(500).send({ errorMessage: "something went wrong" });
  //       console.log("error", error);
  //     });
  // },
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const {
      student_name,
      student_age,
      skill_level,
      desired_skill,
      resorts
    } = req.body;

    console.log("the user id", req.user.id);

    console.log("and this is req.session", req.session);

    if (req.user == null) {
      return res.status(401);
    }

    dbInstance
      .update_students([
        student_name,
        student_age,
        skill_level,
        desired_skill,
        resorts,
        req.session.user.user_id
      ])
      .then(result => {
        console.log("11111response", result);
        res.status(400);
      })
      .catch(error => {
        console.log("22222error", error);
        res.status(500).send({ errorMessage: "something went wrong" });
      });
  }
};
