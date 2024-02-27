### [justin-schrader.com/resume](https://justin-schrader.com/resume)

## Why this repo
I created my resume in HTML/CSS years ago, but recently got tired of manually compressing and uploading it.

### Before
- Make an update
- `npm build`
- Open HTML, select "print", then "save as PDF"
- Upload both HTML and PDF files to 2 different servers (justin.beer and justin-schrader.com)

### Now
- Make an update
- Merge to master

GitHub actions now takes care of the rest. When I merge resume updates into master, it is compressed, uploaded, and a PDF is generated automatically using `puppeteer` 🏝️

Admittedly a bit overkill, but fun to set up!
