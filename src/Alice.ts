import type { ConnectionRecord, CredentialExchangeRecord, ProofExchangeRecord } from "@aries-framework/core";
import { BaseAgent } from './BaseAgent'
import { greenText, Output, redText } from './OutputClass'

export class Alice extends BaseAgent{
    public connected: boolean
}