# Rosetta specimen giveaway promo

## Activate promo

The order is important.

1. comment out texts about the promo being over
2. uncomment texts about the promo being active
3. uncomment the form code in the `index.html`
4. change texts and links to corresponding typefaces (in `index.html` and `landing.html`)
5. duplicate form on Wufoo 
6. change the Wufoo form ID from the old to the new form, e.g. `s9t656j1jqcbi8` in `<div id="wufoo-s9t656j1jqcbi8">` (the code repeats several times in the code. Replace it everywhere.) You get the new code on Wufoo (form > Share).
7. update the form with the current typefaces/specimens
8. `git commit` & `git push`

## Deactivate promo

1. uncomment texts about the promo being over
2. comment out texts about the promo being active
3. comment out the form code in the `index.html`
4. export entries from Wufoo form, delete all entries from Wufoo
5. `git commit` & `git push`
