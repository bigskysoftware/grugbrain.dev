<style type="text/css">
body {
    margin: 40px auto;
    max-width: 768px;
    line-height: 1.6;
    font-size: 20px;
    color: #444;
    padding: 0 10px;
        
}

h1, h2, h3 {
    line-height: 1.2
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}
a {
    color: #444;
}
</style>

<div>
  <a href="https://www.redbubble.com/i/sticker/Programmer-Grug-by-colossalbreaker/42915272.EJUG5">
    <img alt="grug" src="grug.png" style="float: left; height: 120px; margin-right: 20px; clear: both"/>
  </a>
  <h1>
     The Grug Brained Developer<br/>
     <small>A layman's guide to thinking like the self-aware smol brained</small>
  </h1>
</div>

# Introduction

this a collection of thoughts on software development by grug brain developer

grug brain developer not very smart, but grug brain developer program many long year and learn some things
although mostly still confused

grug brain developer try collect learns into small, easily digestible and funny page, not only for you, the young grug, but also for him
because as grug brain developer get older he forget important things, like what had for breakfast or if put pants on

big brained developers are many, and many not expected to like this

*THINK* they are big brained developers many, many more even, and many more even definitely hate this

is fine!  

is free country sort of and end of day not really matter too much, but grug hope you have fun reading and maybe learn from
 many, many mistakes grug make over long program life

# <a name="grug-on-complexity"></a>[The Eternal Enemy: Complexity](#grug-on-complexity)

number one predator of grug is complexity

complexity bad

say again:

complexity *very* bad

_you_ say now:

complexity *very*, *very* bad

given choice between complexity and one on one with t-rex, grug take t-rex: at least grug can see t-rex

complexity is spirit demon that enter codebase through well-meaning but ultimately very clubbable non grug-brain
developers and project managers who not fear complexity spirit demon or even know about

one day code base understandable and grug can get work done, everything good.  next day impossible: complexity spirit 
deamon has entered the code and very dangerous situation!  grug not see complexity demon, but grug feel its presence.

## <a name="grug-on-saying-no"></a>[Saying No](#grug-on-saying-no)

best weapon against complexity spirit demon is magic word: "no"

"no, grug not build that feature"

"no, grug not build that abstraction"

"no, grug not put water on body every day or drink less black think juice you stop ask"

note, this good engineering advice but bad career advice: "yes" is magic word for more shiney rock and put in
charge of large tribe of developers.  sad but true: learn "yes" then learn blame others when fail, ideal career advice

but grug must be true to grug, and "no" is magic grug word.  Hard to say, especially if you nice grug and don't like
disappointing people, but it get easier over time even though shiney rock pile not as high as might otherwise be.  Is ok:
how many shiney rock grug really need anyway?

## <a name="grug-on-saying-ok"></a>[Saying ok](#grug-on-saying-ok)

sometimes compromise necessary or no shiney rock, mean no stegosaurus meat, not good.   in this situation grug
recommend "ok"

"ok, grug build that feature"

then grug spend time think of 80/20 solution to problem and build that instead.  80/20 solution say "we get 80 want at 
20 code"  Solution not have all bell-whistle that project manager want, but work and deliver most value, and keep complexity
spirit at bay for most part

sometimes probably best just not tell project manager and do it 80/20 way.  easier forgive than permission, and project managers
mind like butterfly at times often forget what even supposed to do or move on or get fired

grug see many such cases

## <a name="grug-on-factring-your-code"></a>[Factoring Your Code](#grug-on-factring-your-code)

next strategy is harder: break code base up properly (fancy word: "factor your code properly")  here is hard give general
advice because each system so different.  however, one thing grug come to believe: do not factor your application too early

early on in project everything very abstract and like water: very little solid holds for grug's struggling brain to hang 
on to.  take time to develop "shape" of system and learn what even doing.  grug try not to factor in early part of project
and then, at some point, good cut-points emerge from code base  

good cut point has a narrow interface with rest of system: small number of functions or abstractions that hide complexity
demon internally, like trapped in crystal.  

grug quite satisfied when complexity demon trapped properly in crystal, is best!

grug watch patiently as cut points emerge from code and slowly refactor, with code base taking shape over time along
with experience.  no hard and fast rule for this: grug know cut point when grug see cut point, just take time to build 
skill in seeing

sometimes grug go too early and get abstractions wrong, so grug bias towards waiting

big brain developers often not like this at all and invent many abstractions start of project.  
grug tempted to reach for club and scream "you no maintain code!  you move on next architecture 
committee!  grug smash you now!" but grug learn control passions, major
difference between grug and animals

instead grug try to limit damage of big brain developer by giving them thing like
UML diagram (not hurt code, throw away anyway) or by demanding working demo tomorrow

working demo especially good trick: force big brain make something to actually work to talk about and code to look at that do
thing, will help big brain see reality on ground more quickly.  remember!  big brain have big brain!  need only be harness 
for good and not in service of complexity demon spirt on accident

best grug brain able to herd multiple big brain in right direction and produce many complexity demon trap crystals

also call demo approach "prototype", sound fancier

grug say prototype early in software making, _especially_ if many big brains

# <a name="grug-on-testing"></a>[Testing](#grug-on-testing)

grug have love/hate relationship with test: test save grug many, many time and grug love and respect test.  

unfortunatel also test shamans exist.  test shaman make test idol, demand things like "test first" before grug even write 
code or have any idea what grug doing!  how grug test what grug not even understand?

"Oh, don't worry: the tests will show you what you need to do."

grug once again find grug slowly reaching for club

grug prefer write tests after prototype phase, when code has begun firm up.  

but, note well: grug must here be disciplined!  

easy to move on and not write tests because "work on grugs machine"!

but this bad: no guarantee work on other machine and no guarantee work in future on grug machine, many times

test shaman have point on importance of test, even if test shaman never complete a useful
feature in life and talk only about test all time, deserve club often

also, test shaman often talk unit test very much, but grug not find so useful.  grug experience that ideal tests are not 
unit test or either end-to-end test, but in-between test

unit tests fine, ok, but break and make refactor hard as API change and, frankly, not too useful many bugs anyway, often
throw away

end to end tests good, show system work, but hard to understand when break and drive grug crazy very often, sometimes
grugs just end up ignoring because "oh, that break all time."  bad.

in-between tests, grug hear shaman call "integration tests" sometime often with sour look on face. grug say 
are sweet spot according to grug: high level enough to test correctness of system, low level enough that, with debugger,
easy enough to see what break

grug prefer some unit tests, many more integration test as cut point emerge, and small, curated end-to-end test suite
that is kept working religiously, focus on most common UI features and a few important edge cases

this ideal set of test.  you may not like, but this peak testing

# <a name="grug-on-agile"></a>[Agile](#grug-on-agile)

agile not terrible, not good.  end of day, not worst way to organize development, maybe better than others grug supposes.

danger, however, is agile shaman!  many, many shiney rock lost to agile shaman and, whenever project fail, agile shaman
say "you didn't do agile right!"  beware!

grug reach for club when too much agile talk happen, begin swing wildly when agile shaman enter room

prototyping, tools and hiring good grugs key to success: agile process usually not help and sometimes hurt if taken
too seriously

# <a name="grug-on-refactoring"></a>[Refactoring](#grug-on-refactoring)

refactoring fine activity and often good idea, especially later in project when things firmed up

however, grug note that many times in career "refactors" go horribly off rails and end up causing more harm than good

grug not sure exactly why some refactors work well, some fail, but grug notice that the larger the refactor, the more
likely failure appear to be

so grug try to keep refactors relatively small and not be "too far out from shore" during refactor.  ideally system works
entire time and each step of finish before other begin.  end-to-end tests are life saver here, but often very hard to understand
why broke... such is refactor life.

also grug notice that introducing too much abstraction often lead to refactor failure and system failure.  good example
was J2EE, many big brain sit around thinking too much abstraction, nothing good came of it many people hurt.  another 
good example when company grug work for introduce OSGi to help manage the complexity demon in code base.  not only
not help, but make complexity demon more powerful, and took multiple man years of best developers to boot!  bad!

# <a name="grug-on-microservices"></a>[Microservices](#grug-on-microservices)

grug wonder why big brain take hardest problem, factoring system correctly, and introduce network call too

seem very confusing to grug

# <a name="grug-on-tools"></a>[Tools](#grug-on-tools)

grug love tool.  tool what separate grug from dinosaurs.  tool allow grug brain to create code that not possible otherwise
by doing thinking for grug, always good relief!. grug always spend time in new place learning tools around him to maximize
his productivity: learn tools for two weeks make development often twice faster

code completion in IDE allow grug to not have remembered all API.  java programming impossible without it for grug 
brain. really make grug think some time

good debugger worth weight in shiney rocks, in fact more: when faced with bug grug would often trade all shiney rock and
perhaps few children for good debugger and anyway debugger no weigh anything far as grug can tell.  

grug always recommend new programmer learn available debugger very deeply, features like conditional break points, expression
evaluation, etc

grug say never be not improving tooling

# <a name="grug-on-type-systems"></a>[Type Systems](#grug-on-type-systems)

grug like type systems make programming easier.  for grug, type systems most value when grug hit period on keyboard and
list of things grug can do pop up.  this 90% of value of type system or more

beware big brains here!

certain type big brain think in type systems and talk in lemmas, very dangerous

big brain type system shaman often say type correctness main point type system, but grug note big brain type system 
shaman not often ship any code.  grug suppose code never shipped is correct, in some sense, but not really what grug mean
when say correct

also danger abstraction too high, and big brain code become astral projection of platonic generic turing model of 
computation into code base.  grug confused and agree some level very elegant but also very hard do anything like 
record number of club inventory for Grug Inc. task at hand

generics especially dangerous here, grug limit generics to container classes for most part where most value add

most value type system come: hit dot see what grug can do, never forget!

# <a name="grug-on-expression-complexity"></a>[Expression Complexity](#grug-on-expression-complexity)

grug once like to minimize lines of code as much as possible.  write code like this:

```js
  if(contact && !contact.isActive() && (contact.inGroup(FAMILY) || contact.inGroup(FRIENDS))) {
    // ...
  }
```

over time grug learn this hard debug, and learn prefer write like so:

```js
  if(contact) {
    var contactIsInactive = !contact.isActive();
    var contactIsFamilyOrFriends = contact.inGroup(FAMILY) || contact.inGroup(FRIENDS);
    if(contactIsInactive && contactIsFamilyOrFriends) {
        // ...
    }
  }
```

grug hear screams from young grugs at horror of many line of code and pointless variable and grug prepare defend self with club

grug swing club wildly and scream: "easier debug!  see result of each expression more clearly and good name!  easier
understand conditional expression!  EASIER DEBUG!"

definitely easier debug and once club fight end and young grug think a bit, they realize grug right

grug still catch grug writing code like first example and often regret, so grug not judge young grug

# <a name="grug-on-closures"></a>[Closures](#grug-on-closures)

grug like closures for right job and that job usually abstracting operation over collection of objects

grug warn closures like salt, type systems and generics: small amount go long way, but easy spoil things too much use

javascript developers call special complexity demon spirit "callback hell" because too much closure used by libraries
very sad but also javascript developer get what deserved

# <a name="grug-on-logging"></a>[Logging](#grug-on-logging)

grug huge fan of logging and encourage lots of it, especially in cloud deployments.  some non-grugs say logging expensive
and not important.  grug used think this way

funny story: grug learn idol rob pike working on logging at google and decide: "if rob pike working on logging, what
grug do there?!?" so not pursue.  turn out logging _very_ important to google so of course best programmers work on it, grug!  

don't be such grug brain, grug, much less shiney rock now!  

oh well, grug end up at good company anyway and rob pike dress habit increasingly erratic, so all work out in end, but 
point stand: logging very important!

grug tips on logging are:

* log all major branches within code
* if "request" span multiple machine in cloud infrastructure, include request ID so logs can be grouped
* if possible make log level dynamically controlled, so grug can turn on/off when need debug issue (many!)
* if possible make log level per user, so can debug specific user issue

last two points are especially handy when fighting bugs in production systems often

unfortunately log libraries often very complex (java, why you do?) but worth investing time in getting 
logging infrastructure "just right" pay off big later in grug experience

logging need taught more in schools, grug think

# <a name="grug-on-concurrency"></a>[Concurrency](#grug-on-concurrency)

grug, like all sane developer, fear concurrency

as much as possible, grug try to rely on simple concurrency models like stateless web request handlers and simple
remote job worker queues where jobs no interdepend

optimistic concurrency seem work well for web stuff

occasionally grug reach for [thread local variable](https://en.wikipedia.org/wiki/Thread-local_storage), usually when 
writing framework code

some language have good concurrent data structure, like java [ConcurrentHashMap](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html)
but still need careful grug work to get right

grug has never used erlang, hear good things, but language look wierd to grug sorry

# <a name="grug-on-apis"></a>[APIs](#grug-on-apis)

grug love good apis.  good apis don't make grug think too much

unfortunately, many apis very bad, make grug think quite a bit.  this happen for many reasons, here two:

* API creators think in terms of implementation of API, rather than in terms of use of API
* API creators think too abstract and big brained

usually grug not care too deeply about detail of api: want write file or sort list or whatever, just want to call
`write()` or `sort()` or whatever.  but big brain api developers say:

"not so fast, grug!  is that file *open for write*? did you define a *Comparator* for that sort?"

grug find self reaching for club again

not care about that stuff right now, just want sort and write file!

grug recognize that big brain api designer have point and that _sometime_ these things matter, but often do not.
big brain api developers better if design for simple cases with simple api, make complex cases possible
with more complex api

grug call this "layering" apis: two or three different apis at different level complexity for various grug needs

also, if object oriented, put api on thing instead of elsewhere

java worst at this!  grug want filter list!

"Did you convert it to a stream?"

fine, grug convert to stream

"OK, now you can filter."  

OK, but need return list!  now stream!  

"Did you collect it in a list?"

grug reaching for club yet again

put common thing like `filter()` on list and make return list big brain java api developer!  nobody care about stream or
even heard of stream before is not networking api!

# <a name="grug-on-front-end-development"></a>[Front End Development](#grug-on-front-end-development)

some non-grugs, when faced with web development say: 

"I know, I'll split my front end and back end codebase up and use a hot new SPA library talking to a GraphQL JSON API."

now you have two complexity demon spirit lairs and, what is worse, front end complexity demon spirit even more powerful and 
have hold on entire industry as far as grug can tell

back end developers try keep things simple and can work ok, but front end get very complex very quickly and introduce lots of code

even when just need put form information into database or simple brochure site!  everyone do this now!  

grug not sure why except maybe facebook and google say so, but that not seem very good reason to grug

grug not like big complex front end libraries everyone use

grug create [htmx](https://htmx.org) and [hyperscript](https://hyperscript.org) to avoid

keep complexity low, simple HTML, avoid lots javascript, the natural ether of complexity demon

maybe they work for you, but no job postings, sorry

react better for job, but also you alcolyte of complexity demon whether you like or not, sorry

# <a name="grug-on-fads"></a>[Fads](#grug-on-fads)

grug note lots of fads in development, especially front end development  

back end better more boring because all bad ideas have been tried at this point maybe.  still trying all bad ideas in 
front end development so still much change and hard to know

grug recommend taking all revolutionary new approaches with grain of salt: big brains have been working for long 
time on computers now, most ideas have been tried at least once.  grug not saying can't learn new tricks, but also
a lot of time wasted on recycled bad ideas, and lots of complexity demon power come from putting new idea willy
nilly into code base

note!  very good if senior grug willing to say publicly: "hmmm, this too complex for grug"!

this make it ok for junior grugs to admit too complex not understand as well.  Now complexity demon has no power over 
them!  good!

important to make thinking face and look big brained when saying.  be prepared for big brain or, worse and more common, 
*thinks* is big brain to make fun.  be strong!  club useful here, but sense of humor and especially
last failed project by big brain very useful, so collect  

# <a name="grug-reads"></a>[Reads](#grug-reads)

grug like these:

* [Worse is Better](https://www.dreamsongs.com/WorseIsBetter.html)
* [A Philosophy of Software Design](https://www.goodreads.com/en/book/show/39996759-a-philosophy-of-software-design)

# <a name="lol-lmao"></a>[Conclusion](#lol-lmao)

remember: complexity *very*, *very* bad