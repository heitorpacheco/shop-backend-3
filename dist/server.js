"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

_app2.default.get('/gets', (req, res) => {
  return res.json({ ok: true });
});

_app2.default.listen(3333);
