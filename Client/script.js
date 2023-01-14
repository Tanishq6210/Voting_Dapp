let abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "idx",
        "type": "uint256"
      }
    ],
    "name": "increaseVote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "idx",
        "type": "uint256"
      }
    ],
    "name": "getVotes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWinner",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

let contractAddress = "0xA7226EC1D3B0110dA71FB088CFec4f4BFAcd24F5";
const accounts = ethereum.request({
  method: 'eth_requestAccounts',
});

const web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(abi, contractAddress)


function getAllVotes() {
  contract.methods.getVotes(0).call()
  .then((result) => {
    document.getElementById("goma").innerHTML = result;
    console.log(result)
  });
  contract.methods.getVotes(1).call()
  .then((result) => {
    document.getElementById("peach").innerHTML = result;
    console.log(result)
  });
  contract.methods.getVotes(2).call()
  .then((result) => {
    document.getElementById("shinchan").innerHTML = result;
    console.log(result)
  });
  contract.methods.getVotes(3).call()
  .then((result) => {
    document.getElementById("doraemon").innerHTML = result;
    console.log(result)
  });
}


function voteGoma() {

  console.log("Vote Goma")
  contract.methods.increaseVote(0)
    .send({
      from: "0x66a9633AC8E529B6CcD8E4c752901A71FcDf54A7",
    })
    .then((result) => {
      console.log(result)
      contract.methods.getVotes(0).call()
        .then((result) => {
          document.getElementById("goma").innerHTML = result;
          console.log(result)
      })
    });
}

function votePeach() {
  console.log("Vote Peach")
  contract.methods.increaseVote(1)
    .send({
      from: "0x66a9633AC8E529B6CcD8E4c752901A71FcDf54A7",
    })
    .then((result) => {
      console.log(result)
      contract.methods.getVotes(1).call()
        .then((result) => {
          document.getElementById("peach").innerHTML = result;
          console.log(result)
      })
    });
}

function voteShinchan() {
  console.log("Vote Shinchan")
  contract.methods.increaseVote(2)
    .send({
      from: "0x66a9633AC8E529B6CcD8E4c752901A71FcDf54A7",
    })
    .then((result) => {
      console.log(result)
      contract.methods.getVotes(2).call()
        .then((result) => {
          document.getElementById("shinchan").innerHTML = result;
          console.log(result)
      })
    });
}

function voteDoraemon() {
  console.log("Vote Doraemon")
  contract.methods.increaseVote(3)
    .send({
      from: "0x66a9633AC8E529B6CcD8E4c752901A71FcDf54A7",
    })
    .then((result) => {
      console.log(result)
      contract.methods.getVotes(3).call()
        .then((result) => {
          document.getElementById("doraemon").innerHTML = result;
          console.log(result)
      })
    });
}

function checkWinner() {
  contract.methods.getWinner().call()
  .then((result) => {
    if(result == 0) {
      document.getElementById('winner').innerHTML = "GOMU!!!!"
    } else if(result == 1) {
      document.getElementById('winner').innerHTML = "PEACH!!!!"
    } else if(result == 2) {
      document.getElementById('winner').innerHTML = "SHINCHAN!!!!"
    } else {
      document.getElementById('winner').innerHTML = "DORAEMON!!!!"
    }
  });
}