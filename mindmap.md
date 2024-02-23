# Demo use AFJ and ACA-py

## Overview

## Setup

- Setup Nodejs environment for AFJ (Agent in Server): Version v0.4.0
- Setup React Native environment for AFJ (Agent in Mobile): Version v0.4.0
- Setup ACA-py Mediators 

## Hyperledger Aries Framework JavaScript 0.4.0

### 0.3.0

### 0.4.0


##  Demo 1: 2 agent in nodejs environment

### Features
- Creating a connection
- Offering a credential 
- Requesting a proof
- Sending basic messages

### Usage

#### Setup connection
- Select 'receive connection invitation' in Alice and 'create connection invitation' in Faber
- Faber will print a invitation link which you then copy and paste to Alice
- You have now set up a connection!

#### To offer a credential 
- Select 'offer credential' in Faber
- Faber will start with registering a schema and the credential definition accordingly
- You have now send a credential offer to Alice!
- Go to Alice to accept the incoming credential offer by selecting 'yes'.
#### To request a proof
- Select 'request proof' in Faber
- Faber will create a new proof attribute and will then send a proof request to Alice!
- Go to Alice to accept the incoming proof request
#### To send a basic message
- Select 'send message' in either one of the Agents
- Type your message and press enter
- Message sent!
#### Exit
- Select 'exit' to shutdown the agent.
#### Restart
- Select 'restart', to shutdown the current agent and start a new one

## Demo 2: 2 agent in React Native, 1 Mediator with Aca-py


## Link references

- [Credo.js.org](https://credo.js.org/)
