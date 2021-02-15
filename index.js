const fs = require('fs')
var Benchmark = require('benchmark');
var marked = require("marked")
var markdown_it = require("markdown-it")()
var markdown_js = require("markdown").markdown
var showdown = require("showdown")
var showdown_converter = new showdown.Converter()

const TEST_FILE_SHOWDOWNJS = "./testdata/showdown/data.txt"
const TEST_FILE_MARKED = "./testdata/marked/data.txt"
const TEST_FILE_RANDOM_1000_LINES = "./testdata/showdown/data.txt"
const TEST_FILE_RANDOM_10000_LINES = "./testdata/showdown/data.txt"
const TEST_FILE_RANDOM_100000_LINES = "./testdata/showdown/data.txt"

// startTest(TEST_FILE_SHOWDOWNJS)
startTest(TEST_FILE_MARKED)

function startTest(filename){
  var data = ""
  try {
    data = fs.readFileSync(filename, 'utf8')
  } catch (err) {
    console.error(err)
  }
  testSuite(data)
}

function testSuite(data){
  var suite = new Benchmark.Suite;
  // add tests
  suite
  .add('Marked#test', function() {
    marked(data)
  })
  .add('Markdown-it#test', function() {
    markdown_it.render(data)
  })
  .add('Markdown-js(Archived)#test', function() {
    markdown_js.toHTML(data)
  })
  .add('Showdown#test', function() {
    showdown_converter.makeHtml(data)
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });
  
  // logs:
  // => RegExp#test x 4,161,532 +-0.99% (59 cycles)
  // => String#indexOf x 6,139,623 +-1.00% (131 cycles)
  // => Fastest is String#indexOf
}