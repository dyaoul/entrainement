let MastermindVerifier = artifacts.require('MastermindVerifier')
let MastermindPrize = artifacts.require('MastermindPrize')


contract('MastermindVerifier', accounts => {
  beforeEach(async function () {
      this.verifierContract = await MastermindVerifier.new({from: accounts[0]})
      this.contract = await MastermindPrize.new({from: accounts[0]})
      let tx = this.contract.setVerifierAddress(this.verifierContract.address, {from: accounts[0]})
  })

  it('fail to update address if not the owner', async function () {
    try {
      let tx = await this.contract.setVerifierAddress(this.verifierContract.address, {from: accounts[1]})
      asset.fail("setVerifierAddress was not restricted to owners!")
    } catch (error) {
      const expectedError = "Ownable: caller is not the owner"
      const actualError = error.reason
      assert.equal(actualError, expectedError, "Should not be permitted")
    }
  })

  it('successfully set verifier contract address', async function () {
    let tx = this.contract.setVerifierAddress(this.verifierContract.address, {from: accounts[0]})
    assert(true,"No errors were thrown")
  })

  it('passes for right values', async function () {
      A = ["0x0cfd909be9b572925e780fc78816a98e4e5ca55212b5fef91fa95f275b8a507a", "0x1f2ed1c9cdb23034f532726a974df1aeb4061492d149f6db6fb440cc96520112"]
      B = [["0x29b424e0e961d5f251233af45550dab753fa35e6b8f2c8eda9be5b6ae70c302e", "0x2851f4e0fe1c5e403e972177aa6d2cdfb5de28a4bf8b31e039305e1c1d10d50d"], ["0x26555c599f943c1de68c2020775fb6897fc39823d3fb97cff98486dc31184df0", "0x047c733d398729efca6a55ac65763e36ce76021e595664c770761003659d59dc"]]
      C = ["0x2da73126a757ec7e6654ad869cce48e66885d0933fa8248bdf0936d5a9522f40", "0x21ad42de2512505d508d63d9cd4940777edc77cd4f848b894c2df6a871f0b042"]
      D = ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000002", "0x0000000000000000000000000000000000000000000000000000000000000003", "0x0000000000000000000000000000000000000000000000000000000000000004", "0x0000000000000000000000000000000000000000000000000000000000000001"]

      let tx = await this.contract.solve(A, B, C, D)
      assert.equal(tx.logs.length, 2);
  })

  it('check for events emited', async function () {
    A = ["0x0cfd909be9b572925e780fc78816a98e4e5ca55212b5fef91fa95f275b8a507a", "0x1f2ed1c9cdb23034f532726a974df1aeb4061492d149f6db6fb440cc96520112"]
    B = [["0x29b424e0e961d5f251233af45550dab753fa35e6b8f2c8eda9be5b6ae70c302e", "0x2851f4e0fe1c5e403e972177aa6d2cdfb5de28a4bf8b31e039305e1c1d10d50d"], ["0x26555c599f943c1de68c2020775fb6897fc39823d3fb97cff98486dc31184df0", "0x047c733d398729efca6a55ac65763e36ce76021e595664c770761003659d59dc"]]
    C = ["0x2da73126a757ec7e6654ad869cce48e66885d0933fa8248bdf0936d5a9522f40", "0x21ad42de2512505d508d63d9cd4940777edc77cd4f848b894c2df6a871f0b042"]
    D = ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000002", "0x0000000000000000000000000000000000000000000000000000000000000003", "0x0000000000000000000000000000000000000000000000000000000000000004", "0x0000000000000000000000000000000000000000000000000000000000000001"]

    let tx = await this.contract.solve(A, B, C, D)
    assert.equal(tx.logs[0].event, "Transfer");
    assert.equal(tx.logs[1].event, "MastermindChallengeSolved");
  })

  it('fail for incorrect values', async function () {
      A = ["0x1", "0x2"]
      B = [["0x29b424e0e961d5f251233af45550dab753fa35e6b8f2c8eda9be5b6ae70c302e", "0x2851f4e0fe1c5e403e972177aa6d2cdfb5de28a4bf8b31e039305e1c1d10d50d"], ["0x26555c599f943c1de68c2020775fb6897fc39823d3fb97cff98486dc31184df0", "0x047c733d398729efca6a55ac65763e36ce76021e595664c770761003659d59dc"]]
      C = ["0x2da73126a757ec7e6654ad869cce48e66885d0933fa8248bdf0936d5a9522f40", "0x21ad42de2512505d508d63d9cd4940777edc77cd4f848b894c2df6a871f0b042"]
      D = ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000002", "0x0000000000000000000000000000000000000000000000000000000000000003", "0x0000000000000000000000000000000000000000000000000000000000000004", "0x0000000000000000000000000000000000000000000000000000000000000001"]

      try {
        let tx = await this.contract.solve(A, B, C, D)
        asset.fail("shall not solve with bad inputValues")
      } catch (error) {
        const expectedError = "Incorrect solution"
        const actualError = error.reason
        assert.equal(actualError, expectedError, "Should fail")
      }
  })
})
