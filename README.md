# Batch Refresh Instagram Tokens

A simple Node.js script for batch refreshing Instagram tokens in an interval by using Github Actions.

## Usage

- Fork Repository
- Change content of `tokens.js` with tokens that you want reissue in an interval.
- Enable Github Actions on **Actions** tab. 



## Notes

* Current Instagram API says that tokens are valid for.60 days. If it is renewed within this 60 days, the expiration date is extended again by 60 days starting from the renewed date. 

- A token can't be refreshed if user changed password or revokes app's access. 
- You can see the output in actions tab to check if a token's refresh is failed and why.
