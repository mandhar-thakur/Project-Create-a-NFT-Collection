/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,type,value,color) {
    const NFT = {
        "name":name,
        "type":type,
        "value":value,
        "color":color,
    }
    NFTs.push(NFT);
    console.log("We have Minted "+ name + "\n");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
let i=0;
for (i=0;i<NFTs.length;i++){
    //console.log(NFTs[i]);
    console.log("Here is metadata for NFT -: "+(i+1)+"\n");
    console.log("Name : "+ NFTs[i].name);
    console.log("Type : " + NFTs[i].type);
    console.log("Value : " + NFTs[i].value);
    console.log("Color : " + NFTs[i].color+"\n");
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTs.length);
}

// call your functions below this line
mintNFT("gold","exclusive",5000,"yellow");
mintNFT("silver","limited",2500,"gray");
mintNFT("bronze","common",1000,"brown");
mintNFT("wood","forall",100,"green");

listNFTs();

getTotalSupply();
