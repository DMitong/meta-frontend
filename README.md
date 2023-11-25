## Counter DAPP

This project implements a simple decentralised application that has both a backend written in solidity and a frontend component.

### Backend

This is a Solidity smart contract that implements a simple counter. It allows you to get the current value of the counter and also increment it by one.

### Getting Started

To use this contract, you need a Solidity development environment set up. You can use tools like Remix or Hardhat to compile and deploy this contract.

### Contract Details

The contract has the following functions:

- getCounter()
  This function is a view function, meaning it does not modify the state of the contract. It returns the current value of the counter.

- incrementCounter()
  This function increments the counter by one. It does not return any value.

### Frontend

In this repository is also the code that deploys the frontend and interacts with it using the thirdweb SDK. To make use of the frontend or run it, you will need to create a Next.js project and have a working knowledge of typescript.

### Contributing

If you find any issues with the contract or have suggestions for improvement, feel free to open an issue or submit a pull request.

### License

This contract is available under the UNLICENSED license.
