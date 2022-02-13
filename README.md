# worldroamer
Follow the steps below to deploy locally

1. clone the repository
2. `cd` into the cloned repository
3. Create `.env` file with the follwing contents \
```JWT_SECRET = <YOUR_JWT_SECRET>
REFRESH_TOKEN_SECRET = <YOUR_REFRESH_TOKEN_SECRET>
SESSION_EXPIRY = 60 * 15. 
REFRESH_TOKEN_EXPIRY = 60 * 60 * 24 * 30. 
MONGO_DB_CONNECTION_STRING = <CREDENTIALS_TO_YOUR_MONGODB_DB>.
COOKIE_SECRET = <YOUR_COOKIE_SECRET>.
WHITELISTED_DOMAINS = http://localhost:3000,http://localhost:3001
```
- You may wish to replace the whitelisted domain according to your requirements
- You may use the `,` if you wish to whitelist multiple domains
4. run `npm update`
5. run `npm start`
6. `cd` into `client` directory
7. Create `.env` file with the following contents
`REACT_APP_API_ENDPOINT = http://localhost:8081/`
- you may need to change the domain according to your local server's port
8. run `npm update`
9. run `npm start`

The application should be available at `http://localhost:3000` already!
