# Warn Common Password

## About ##

This simple browser extension shows a warning notification to the user when they enter a common password in any Password or Security answer field, in any website.

It checks the entered password/security answer against a wordlist of size 1 Million! 

This extension works entirely offline - as it comes bundled with common passwords wordlist publicly made available by Ben at : https://github.com/berzerk0/Probable-Wordlists. Ben published it under Creative Commons license.

## Disclaimer ## 

This addon works entirely offline and does not make any network request. The "common Passwords list" is obtained from the Github Repo : https://github.com/berzerk0/Probable-Wordlists and it is NOT generated or collected by the developer of this addon.  This addon simply "reuses" a publicly available list in the repository above.

## License ##

This extension is licensed under GPLv3 (GNU GENERAL PUBLIC LICENSE - version 3)

### TODO ### 

1) Benchmark against Trie.js - Done - initial trie setup takes a few seconds for big list of 1 million words .. indexof or includes seems better as number of times search to be performed is very small.

2) Find a way to use a compression algorithm to compress data.min.js and decompress in code to reduce addon size and increase word list size 
(currently it's 1 Million words, maybe increase it later if we compress. We can use lz-string.js..)

3) Add settings page to let user choose wordlist size - if they are on slower device (maybe old android device running Firefox), they can choose top 300 thousand instead of 1 Million, for example.

