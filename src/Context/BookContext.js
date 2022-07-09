import React, { useState, createContext, useEffect } from "react";
import axios from 'axios'
import { useMoralis } from "react-moralis";
import { Web3Storage } from "web3.storage/dist/bundle.esm.min";
export const BookContext = createContext();

export const BookContextProvider = (props) => {
    const { Moralis } = useMoralis();
    const[data, setData] = useState()
const API_Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzOEQzNkJhOTIwOWU0NDhCMzZEOGYwNzQ2MzE4ZGFiNmUyNzUwQmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTczNDI2NzMzMDcsIm5hbWUiOiJVbnRvdWNoZWQgYXJjaGlldmUifQ.t3zZU9B7HVdsJTKXajBRuNDsE6piX0tjWQqtSPP23h4";
const client = new Web3Storage({ token: API_Token})
const untouchedA = Moralis.Object.extend("UntouchedArchieve");
const UntoucheDdata  = new untouchedA();

// let Item = {
//     name: name,
//     subject: subject,
//     category: category,
//     file: file,
//     website: website,
//     description: description,
//     checkbox: checkbox
// }
function addData(Item){
    alert(Item,'Item');
   console.log(Item,"Item")
    const blob = new Blob(
        [
            JSON.stringify(Item),
        ],
        { type: "application/json"}
    );
  const files = [
      new File([blob], "data.json"),
  ];
  console.log(files);
  return files;

}
    async function storeFiles(){
        let files = addData()
        const cid = await client.put(files);
        UntoucheDdata.set("CID", cid);
        UntoucheDdata.save();
        console.log("stored files with cid", cid);
        axios.get( `https://${cid}.ipfs.infura-ipfs.io/data.json`)
        .then(function (response) {
       setData(response.data)
    
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }) 
        
        return cid;
    }
    console.log(data);
    return (
        <BookContext.Provider
            value={{
                addData,
                storeFiles,
                data
            }}
        >
            {props.children}
        </BookContext.Provider>
    );






}

