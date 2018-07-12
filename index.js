'use strict';

 let remark = require('remark');
 let guide = require('remark-preset-lint-markdown-style-guide');
 let html = require('remark-html');
 let report = require('vfile-reporter');
 
 remark()
  .use(guide)
  .use(html)
  .process('*emphasis* and _importance_', function (err, file) {
    console.log(String(file));
    console.error(report(err || file));
  });