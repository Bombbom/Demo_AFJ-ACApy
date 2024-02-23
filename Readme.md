# Demo use AFJ and ACA-py 
- Aries Framework JavaScript
- Aries CloudAgent Python
## Detail Explains 

### Setup NodeJS Environment
- Add dependency packages

```
yarn add @aries-framework/core@^0.4.0 @aries-framework/node@^0.4.0
yarn add @aries-framework/askar@^0.4.0 @hyperledger/aries-askar-nodejs@^0.1.0
yarn add @aries-framework/anoncreds@^0.4.0 @aries-framework/anoncreds-rs@^0.4.0 @hyperledger/anoncreds-nodejs@^0.1.0
yarn add @aries-framework/indy-vdr@^0.4.0 @hyperledger/indy-vdr-nodejs@^0.1.0
yarn add @inquirer/prompts
```


- If you use Node.js version 18.x, add this code to the package. json

```
{
  "resolutions": {
    "ref-napi": "npm:@2060.io/ref-napi"
  }
}
```