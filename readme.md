## markdown - benchmark for js lib

### Intro

Though there was a benchmark, it do not include markdown-it, and the versions it tested were too old.
I forked it, and found it is hard to upgrade to newer version
(after upgrade grunt, coffeescript and etc, it would have a bug, and really hard to fix it),
so I decided to open a new benchmark fro them.

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

```
<===./testdata/showdown/data.txt===>
Marked#test x 939 ops/sec ±2.01% (90 runs sampled)
Markdown-it#test x 1,135 ops/sec ±0.42% (95 runs sampled)
Markdown-js(Archived)#test x 394 ops/sec ±1.17% (90 runs sampled)
Showdown#test x 203 ops/sec ±1.71% (87 runs sampled)
Fastest is Markdown-it#test
```

#### case B

```
<===./testdata/marked/data.txt===>
Marked#test x 12,376 ops/sec ±0.82% (97 runs sampled)
Markdown-it#test x 17,801 ops/sec ±0.43% (97 runs sampled)
Markdown-js(Archived)#test x 3,154 ops/sec ±0.60% (98 runs sampled)
Showdown#test x 2,592 ops/sec ±1.57% (93 runs sampled)
Fastest is Markdown-it#test
```

#### case C

```
<===./testdata/markdown-it/data.txt===>
Marked#test x 2,518 ops/sec ±1.35% (95 runs sampled)
Markdown-it#test x 3,290 ops/sec ±3.32% (92 runs sampled)
Markdown-js(Archived)#test x 1,230 ops/sec ±1.58% (91 runs sampled)
Showdown#test x 636 ops/sec ±1.59% (92 runs sampled)
Fastest is Markdown-it#test
```

### lib-size(browser)

test browser: Firefox Dev v86.0b6  
cdn site:https://www.jsdelivr.com  
date: 2021 Feb 15th  

name|gzip size(kb)|real size(kb)
--|--|--
[marked.min.js](https://cdn.jsdelivr.net/npm/marked/marked.min.js)|15.55|42.85
[markdown-it](https://cdn.jsdelivr.net/npm/markdown-it@12.0.4/dist/markdown-it.min.js)|33.05|98.25
<!-- [markdown-js (Archived)](https://cdn.jsdelivr.net/npm/markdown@0.5.0/lib/markdown.min.js)|6.72(*)|16.29(*) -->
[showdown](https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js)|24.33|73.9

*: out of date

### code high light support


name|highlight
--|--
[Marked](https://github.com/markedjs/marked)|yes
[Markdown-it](https://github.com/markdown-it/markdown-it)|yes
[Showdown](https://github.com/showdownjs/showdown)|yes
