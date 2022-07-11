const express = require("express");
const router = express();
const Qna = require("../models/qna");

router.get("", (req, res, next) => {
  console.log(req.query);
  const pageSize = +req.query.pageSize;
  const currentPage = +req.query.currentPage;
  const qnaQuary = Qna.find();
  if (pageSize && currentPage) {
    qnaQuary.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }

  let fetchedQna;

  qnaQuary
    .then((qnas) => {
      fetchedQna = qnas;
      return Qna.count();
    })
    .then((count) => {
      res.status(200).json({ qnas: fetchedQna, count: count });
    })
    .catch((err) => {
      res.status(400).json("There is no post");
    });
});

router.get("/:id", (req, res, next) => {
  Qna.findOne({ _id: req.params.id })
    .then((qna) => {
      res.status(200).json(qna);
    })
    .catch((err) => {
      res.status(400).json("There is no post");
    });
});

router.post("", (req, res, next) => {
  console.log("qna get");
  console.log(req.body);
  const qna = new Qna({
    title: req.body.title,
    content: req.body.content,
    imagePath: req.body.imagePath,
  });
  qna
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json("Something went wrong, try again");
    });
});

router.delete("/:id", (req, res, next) => {
  Qna.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json("Something went wrong, try again");
    });
});

router.put("/:id", (req, res, next) => {
  const qna = new Qna({
    _id: req.body._id,
    title: req.body.title,
    content: req.body.content,
    imagePath: req.body.imagePath,
  });
  Qna.updateOne({ _id: req.params.id }, qna)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json("Something went wrong, try again");
    });
});

module.exports = router;
