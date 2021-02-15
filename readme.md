## markdown - benchmark for js lib

### Intro

though there was a benchmark exists, it is do not include markdown-it, and the version it tested was too old.
I forked it, found it is hard to fix (after upgrade grunt etc, it would have a bug),
so I decided to open a new repo to benchmark them.

+ older benchmard work
[https://github.com/mpneuried/markdown-benchmark](https://github.com/mpneuried/markdown-benchmark)

### what's in here

here is a benchmark for these js-markdown-lib .

+ [Marked](https://github.com/markedjs/marked)
+ [Markdown-it](https://github.com/markdown-it/markdown-it)
+ [Markdown-js (Archived)](https://github.com/evilstreak/markdown-js)
+ [Showdown](https://github.com/showdownjs/showdown)

### how to compare

simply use follwing ways.

+ case A: markdown data (740+lines) to HTML (from showdown.js live demo)
+ case B: markdown data (36+lines) to HTML (from marked.js live demo)
+ case C: markdown data (246+lines) to HTML (from markdown-it.js live demo)

### spec

PC|MacBook Pro(13-inch, M1, 2020)   
--|--
CPU| M1  
RAM| 16GB  
Harddisk|SSD  
node| nodejs v15.7.0  


### result

#### case A

```bash
<===./testdata/showdown/data.txt===>
Marked#test x 939 ops/sec ±2.01% (90 runs sampled)
Markdown-it#test x 1,135 ops/sec ±0.42% (95 runs sampled)
Markdown-js(Archived)#test x 394 ops/sec ±1.17% (90 runs sampled)
Showdown#test x 203 ops/sec ±1.71% (87 runs sampled)
Fastest is Markdown-it#test
```

#### case B

```bash
<===./testdata/marked/data.txt===>
Marked#test x 12,376 ops/sec ±0.82% (97 runs sampled)
Markdown-it#test x 17,801 ops/sec ±0.43% (97 runs sampled)
Markdown-js(Archived)#test x 3,154 ops/sec ±0.60% (98 runs sampled)
Showdown#test x 2,592 ops/sec ±1.57% (93 runs sampled)
Fastest is Markdown-it#test
```

#### case C

```bash
<===./testdata/markdown-it/data.txt===>
Marked#test x 2,518 ops/sec ±1.35% (95 runs sampled)
Markdown-it#test x 3,290 ops/sec ±3.32% (92 runs sampled)
Markdown-js(Archived)#test x 1,230 ops/sec ±1.58% (91 runs sampled)
Showdown#test x 636 ops/sec ±1.59% (92 runs sampled)
Fastest is Markdown-it#test
```