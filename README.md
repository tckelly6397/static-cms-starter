# What to do
- Create a basic html site with editable places
- Set up decap
- Disable authentication
- Hook up Github to decap
- Try to edit the site
- View changes in github

# If this works
- Set up cognito
- Enable authentication
- Rpeat above steps

# If authentication works
- Set up s3, cloudfront and the domain
- Test everything from a live site

# Finally
- Hook up a lambda@edge function to ensure no users can make changes even if they make it to the /admin
- Make this repetable

# Note
- Cognito should be a seperate stack because it will be deployed once while multiple sites might be deployed using s3, cloudfront, etc.
