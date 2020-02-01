## Design pattern decisions

Design patterns decision were made early on:
* High security (challenges can only be completed after generation of a ZKP)
* Max re-use of existing libraries - open-zepelin
* Work around the public nature of the blockchain

Comment on item 3: any proof given would be visible publicly on the blockchain would provide any user the capability to reuse the same after decoding since all data is preserved. To avoid such a scenario a more complex protocol not implemented here would be required to add ownership of the proof. The easiest would would be to add a decryption layer of the proof with a need to proove the ownership of the private key in additon to proof of challenge. 
