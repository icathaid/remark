'use strict';

 let remark = require('remark');
 let guide = require('remark-preset-lint-markdown-style-guide');
 let html = require('remark-html');
 let report = require('vfile-reporter');
 
var dammit = remark.create();