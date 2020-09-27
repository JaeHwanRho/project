var express = require('express');
var router = express.Router();

const pool = require('../utils/mysql');
const pool_3 = pool.pool_3;

router.get('/', async function(req, res, next) {
    try{
      const connection = await pool_3.getConnection();
      const [results] = await connection.query('SELECT * FROM reservation');
      connection.release();
      res.json({ status: 200, arr: results });
    } catch (err) {
      console.log(err);
      res.json({ status: 500, msg: '테이블명 오타로 인한 서버 에러입니다!' });
    }
  });

  router.post('/', async function(req, res, next) {
    try{
      const { name, restaurant, time, number_of_people } = req.body;
      const connection = await pool_3.getConnection();
      await connection.query('INSERT INTO reservation(name, restaurant, time, number_of_people) VALUES(?, ?, ?, ?)', [name, restaurant, time, number_of_people]);
      connection.release();
      res.json({ status: 201, msg: '저장 성공!' });
    } catch (err) {
      console.log(err);
      res.json({ status: 500, msg: '알 수 없는 문제!' });
    }
  });

  module.exports = router;