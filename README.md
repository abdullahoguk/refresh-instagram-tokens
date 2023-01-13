# Batch Refresh Instagram Tokens

A simple Node.js script for batch refreshing Instagram tokens in an interval by using Github Actions.

## Usage

- Fork Repository (Make private)
- Change content of `tokens.js` with tokens that you want reissue in an interval.
- If you are using `main` branch, add BRANCH_NAME repository secret with value of `main` in repository settings (under Security > Secrets and variables > Actions ) 
- Enable Github Actions on **Actions** tab. 



## Notes

* Current Instagram API says that tokens are valid for.60 days. If it is renewed within this 60 days, the expiration date is extended again by 60 days starting from the renewed date. 

- A token can't be refreshed if user changed password or revokes app's access. 
- You can see the output in actions tab to check if a token's refresh is failed and why.
- If your repository is public, your tokens might be invalidated since Facebook partnered with Github on scanning program. You can get a message with someting like this:
```
Access token invalidation FYI
This application has been identified as having access tokens associated with 
it posted in a public GitHub repository. As a preventative security measure,
we have invalidated the session for these particular tokens.
As stated in our Platform Terms, you must not transfer or 
share access tokens and secret keys, 
except with a Service Provider who helps you build, 
run or operate your app. These tokens must be kept secret 
and not shared publicly. Disclosing access tokens to the public 
may result in unauthorized access to your app. This action was taken as part of 
the GitHub secret scanning program. We have partnered with GitHub 
on this scanning program to protect Instagram users 
by automatically invalidating Instagram access tokens 
when they are shared in a public GitHub repository.

```
