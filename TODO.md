## To Do:
- [x] Change dictionary structure
	- [x] Add what district they're in
	- [x] Senate has only "Statewide" district or no district 
	- [x] Statewide has Governer, Leiutenant, etc. districts 

- [x] Change table structure
	- [x] Only two candidates, side by side 
	- [x] replace checkbox with entire card button
	- [x] you can only select one candidate at a time (radio buttons)
	- [x] Reconsider the table, maybe replace it with something else
	- [x] delete table headers
	- [x] Change candidate to district and move candidate to be child of district
	- [x] Render title and hr for each District, then two Candidates
	- [x] Bigger photos

- [ ] Add more information in printable vote card
	- [x] Add What they're running for and for what district
	- [x] format and align better
	- [x] add information of website, etc.

- [ ] set up SHARE buttons
	- [x] fix email link not showing anything in body or subject
 	- [ ] look into text-to-yourself or email-to-yourself buttons
	- [x] add better looking icons
	- [x] change print button to icon

- [ ] Create two styling options
	- [ ] cryptowat.ch and are.na references – flat style, square edges
	- [ ] coinbase buy/sell page reference – 


- [ ] Fix is-no-tab-selected if state-congress is empty bug
- [ ] Fill out rest of states' dictionaries


- [ ] Change images to import up front for faster load time

- [ ] Fix Whatsapp 
  <WhatsappShareButton
    url="https://github.com"
    title={
      "I filled out my Midterm Elections voting card at GunControlMap.com" +
      shareQuote +
      "\n"
    }
  >
    <IoWhatsapp size={18} color="#25d366" />
  </WhatsappShareButton>


- [ ] image placeholders

- [ ] switch from reactstrap to flexbox or grid (FCC for hints)
	- [ ] also change collapse to show voting card first