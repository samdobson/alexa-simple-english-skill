var fs = require('fs');
LOCALES = ["en-GB", "en-CA", "en-IN", "en-AU"]
f = require('./skill-src.json');
locale_data = f["skillManifest"]["publishingInformation"]["locales"]["en-US"];
for (var i in LOCALES) { f["skillManifest"]["publishingInformation"]["locales"][LOCALES[i]] = locale_data; }
fs.writeFile("./skill.json", JSON.stringify(f, null, 2), () => {});
