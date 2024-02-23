import type { RegisterCredentialDefinitionReturnStateFinished } from "@aries-framework/anoncreds";
import type { ConnectionRecord, ConnectionStateChangedEvent } from "@aries-framework/core";
import type {IndyVdrRegisterSchemaOptions, IndyVdrRegisterCredentialDefinitionOptions} from "@aries-framework/indy-vdr";
import type BottomBar from 'inquirer/lib/ui/bottom-bar';
import { ConnectionEventTypes, KeyType, TypedArrayEncoder, utils } from "@aries-framework/core";

import {ui} from 'inquirer';

import {BaseAgent,indyNetworkConfig} from './BaseAgent';
import { Color, Output, greenText, purpleText, redText } from './OutputClass'

export enum RegistryOptions{
    indy = 'did:indy',
    cheqd = 'did:cheqd',

}


export class Faber extends BaseAgent{
    public outOfBandId?: string
    public credentialDefinition?:RegisterCredentialDefinitionReturnStateFinished
    public anoncredsIssuerId?: string
    public ui: BottomBar

    public constructor(port: number, name: string){
        super({port, name})
        this.ui  = new ui.BottomBar()

    }

    public static async build(): Promise<Faber>{
        const faber = new Faber(9001, 'faber')
        await faber.initializeAgent()
        return faber
    }

    public async importDid(registry: string){
        // NOTE: we assume the did is already registered on the ledger, we just store the private key in the wallet
        // and store the existing did in the wallet
        // indy did is based on private key (seed)
        const unqualifiedIndyDid = ''
        const cheqdDid = ''
        const indyDid = `did:indy:${indyNetworkConfig.indyNamespace}:${unqualifiedIndyDid}`
        const did = registry === RegistryOptions.indy?indyDid: cheqdDid


        await this.agent.dids.import({
            did, 
            overwrite:true,
            privateKeys:[
                {
                    keyType: KeyType.Ed25519,
                    privateKey: TypedArrayEncoder.fromString('afjdemoverysercure00000000000000'),
                }
            ]
        })
        this.anoncredsIssuerId = did
        
    }

    private async getConnectionRecord(){
        if (!this.outOfBandId) {
            throw Error(redText(Output.MissingConnectionRecord))
        }
      
        const [connection] = await this.agent.connections.findAllByOutOfBandId(this.outOfBandId)
      
        if (!connection) {
            throw Error(redText(Output.MissingConnectionRecord))
        }
      
        return connection
    }

    private async printConnectionInvite(){
        // TODO:
    }

    private async waitForConnection(){
        //TODO:
    }

    public async setupConnection(){
        //TODO:
    }

    private printSchema(){
        //TODO:
    }
    private async registerSchema(){
        //TODO:
    }

    private async registerCredentialDefinition(schemaId: string){
        //TODO:
    }

    public async issueCredential(){
        //TODO:
    }

    public async printProofFlow(print: string){
        //TODO:
    }

    private async newProofAttribute(){
        //TODO:
    }

    public async sendProofRequest(){
        //TODO:
    }

    public async sendMessage(message:string){
        //TODO:



    }

    public async exit(){
        console.log(Output.Exit)
        await this.agent.shutdown()
        process.exit(0)
    }

    public async restart(){
        await this.agent.shutdown()
    }

}



