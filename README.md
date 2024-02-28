### [justin-schrader.com/resume](https://justin-schrader.com/resume)

## Why did I make this repo?
I created my resume in HTML/CSS years ago (because why not?) but recently got tired of manually compressing and uploading it.

### Before
1. Make an update
1. Merge to master
1. `npm build` locally
1. Open HTML, select "print", then "save as PDF"
1. Upload both HTML and PDF files to 2 different servers (justin.beer and justin-schrader.com)

### Now
1. Make an update
1. Merge to master

GitHub actions now takes care of the rest. When I merge resume updates into master, it is compressed, uploaded, and a PDF is generated automatically using `puppeteer` 🏝️

A bit overkill, but fun to set up!
