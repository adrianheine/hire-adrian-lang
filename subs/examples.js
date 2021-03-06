"use strict";

var lib = require('../lib'),
  linkTo = lib.linkTo.bind(undefined, 'Examples');

module.exports = {
  'Advertisement generator': {
    desc: 'In <time>2012</time>, I wrote two interactive advertisement widgets and a generator for those widgets for a major online store.</p><p>The generator was implemented as a server-less single-page app with ' + linkTo(['Skills', 'Twitter Bootstrap']) + '. I used ' + linkTo(['Skills', 'Grunt.js']) + ' for automating the build process which included building the widgets and the generator from a common configuration as well as linting and compressing the ' + linkTo(['Skills', 'JavaScript']) + ' and ' + linkTo(['Skills', 'CSS']) + ' ressources.</p><p>The ad widgets were interactive and dynamically loaded product data from the live server. The widget size was fully configurable, and the content and layout ' + linkTo(['Skills', 'Responsive'], 'responded') + ' to the size. They had working fallback modes for users without JavaScript enabled and behaved and looked well in every browser down till Internet Explorer 7. At the same time, the compressed total JavaScript source for the widgets weighted 10 kB and 11 kB, respectively.',
    links: {},
    year: 2012,
    shortdesc: 'serverless singlepage responsive'
  },
  'Hire Adrian Heine': {
    desc: 'I built »Hire Adrian Heine« in <time datetime="2012-01">January 2012</time>. It is powered by a ' + linkTo(['Skills', 'Node.js']) + ' server using the ' + linkTo(['Skills', 'Express'], 'Express web framework') + ' with ' + linkTo(['Skills', 'Pug'], 'Pug templates') + ' and proxied by a ' + linkTo(['Skills', 'nginx']) + ' on a ' + linkTo(['Skills', 'Debian']) + ' server. I initially used ' + linkTo(['Skills', 'Ender.js']) + ' but since moved to plain browser APIs. An example is the ' + linkTo(['Skills', 'HTML5'], 'HTML5 History API') + ' that I use for providing a smoother navigation in modern browsers.</p><p>Sketching, doing a concept, coding and writing the texts took me about 20 hours.',
    links: {github: 'adrianheine/hire-adrian-heine'},
    year: 2012,
    shortdesc: 'nodejs responsive'
  },
  'partial.js': {
    desc: 'Partial.js is a toolkit for partial function application in ' + linkTo(['Skills', 'JavaScript']) + '. I wrote a <a href="https://ada.adrianlang.de/partial-application-js" title="The blog post »Partial function application in JavaScript«">blog post</a> on this subject in <time datetime="2011-06">June 2011</time> and did two <a href="https://adrianlang.de/talks/partial2.pdf" title="Talk on partial function application in JavaScript">talks</a> on partial function application in JavaScript and partial.js at the Berlin and Hamburg JavaScript user groups.',
    links: {github: 'adrianheine/partial-js'},
    year: 2011,
    shortdesc: 'js library functional talks blogpost'
  },
  'libomb': {
    desc: 'libomb is a ' + linkTo(['Skills', 'PHP']) + ' library implementing the ' + linkTo(['Skills', 'OpenMicroBlogging'], 'OpenMicroBlogging protocol') + '. I wrote it in <time datetime="2009">Summer 2009</time> and used it to replace the self-baked OMB implementation in ' + linkTo(['Skills', 'StatusNet']) + '.',
    links: {gitorious: 'libomb'},
    year: 2009,
    shortdesc: 'php library communication'
  }
};
