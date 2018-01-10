Developing a Skill with the Alexa Skills Kit Command Line Interface (ASK CLI) and Skill Management API (SMAPI)?

Supporting English-speaking users with different locales such as British, Indian, Canadian, Australian?

__Save time and ensure consistency by maintaining a single set of Publishing Information!__

Just download [ses.js](https://github.com/samdobson/alexa-simple-english-skill/raw/master/ses.js), rename your existing [Skill Manifest](https://developer.amazon.com/docs/smapi/skill-manifest.html) to ``skill-src.json`` and run ``node ses.js`` to build your manifest.

_Voila! No more time-consuming and error-prone copy-paste._

#### Usage notes
* Save ``ses.js`` to the same directory as your manifest.
* Define name, description etc. only for "en-US" (as well as, of course, any non-English locales)
* Feel free to adapt for your purposes!
