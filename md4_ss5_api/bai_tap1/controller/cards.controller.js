const db = require("../model/db");

module.exports.getAll = (req, res) => {
    db.execute("SELECT * FROM card_user ORDER BY create_at DESC")
      .then((data) => {
        let [rows] = data;
        res.status(200).json({
          status: "success",
          data: rows,
        });
    })
      .catch((err) => {
        res.status(500).json({
          status: "fail",
          message: err,
        });
    });
};

module.exports.create = (req, res) => {
let {id,point,value} = req.body;
// console.log(req.body);

db.execute("INSERT INTO card_user VALUES(?,?,?,?)", [id, point, value, new Date()])
    .then((data) => {
    let [rows] = data;
    res.status(200).json({
        status: "success",
        data: rows,
    });
    })
    .catch((err) => {
    res.status(500).json({
        status: "fail",
        message: err,
    });
    });
};

module.exports.updateOne = (req, res) => {
    let { id } = req.params;
    let { point,value } = req.body;
    // console.log(id);
    // console.log(req.body);
    db.execute("UPDATE card_user SET point =?, value=? WHERE id =?", [point,value, id])
      .then((data) => {
        let [rows] = data;
        res.status(200).json({
          status: "success",
          data: rows,
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: "fail",
          message: err,
        });
      });
  };

  module.exports.deleteOne = (req, res)=>{
    let {id} = req.params;
    db.execute("DELETE FROM card_user WHERE id = ?", [id])
    .then((data) => {
        let [rows] = data;
        res.status(200).json({
            message:"delete one successfully",
            data: rows,
        })
    })
    .catch((err) => console.log(err))
}