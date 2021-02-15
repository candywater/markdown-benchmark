## markdown - benchmark for js lib

### Intro

though there was a benchmark exists, it is do not include markdown-it, and the version it tested was too old.
I forked it, found it is hard to fix (after upgrade grunt etc, it has a bug),
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

+ A markdown data (700+lines) to HTML for 1000 loops
