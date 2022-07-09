import React, { useContext, useState } from "react";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { useMoralis } from "react-moralis";
import { BookContext } from "../Context/BookContext";
const axios = require('axios'); 

function UploadForm() {


    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [category, setCategory] = useState(null);
    const [file, setFile] = useState(null);
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [checkbox, setCheckbox] = useState();
    const[data, setData] = useState()
    const nameEvent = (e) => {
        setName(e.target.value)
    }
    console.log(name);

    const subjectEvent = (e) => {
        setSubject(e.target.value || null)
    }
    console.log(subject);

    const categoryEvent = (e) => {
        setCategory(e.target.value)
    }
    console.log(category);

    const websiteEvent = (e) => {
        setWebsite(e.target.value)
    }
    console.log(website);

    const descriptionEvent = (e) => {
        setDescription(e.target.value)
    }
    console.log(description);

    const fileEvent = (e) => {
        setFile(e.target.files[0])
    }
    console.log(file);

    const checkboxEvent = (e) => {
        setCheckbox(e.target.checked)
    }
    console.log(checkbox);

    let Item = {
        name: name,
        subject: subject,
        category: category,
        file: file,
        website: website,
        description: description,
        checkbox: checkbox
    }
    console.log(Item);
    
    function onFormSubmit(e) {
        e.preventDefault()
        console.log(Item,'form submit');
      
        setName('');
        setSubject('');
        setCategory('');
        setFile(null);
        setWebsite('')
        setDescription('');
        setCheckbox(null);
        addData(Item);
        storeFiles()
       
    }
   
// Web3Storage
const { Moralis } = useMoralis();
const bookContext = React.useContext(BookContext);
const {addData, storeFiles} = bookContext;

const API_Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIzOEQzNkJhOTIwOWU0NDhCMzZEOGYwNzQ2MzE4ZGFiNmUyNzUwQmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTczNDI2NzMzMDcsIm5hbWUiOiJVbnRvdWNoZWQgYXJjaGlldmUifQ.t3zZU9B7HVdsJTKXajBRuNDsE6piX0tjWQqtSPP23h4";
const client = new Web3Storage({ token: API_Token})
const untouchedA = Moralis.Object.extend("UntouchedArchieve");
const UntoucheDdata  = new untouchedA();


// function addData(){
//     const blob = new Blob(
//         [
//             JSON.stringify(Item),
//         ],
//         { type: "application/json"}
//     );
//   const files = [
//       new File([blob], "data.json"),
//   ];
//   console.log(files);
//   return files;

// }
// async function storeFiles(){
//     let files = addData()
//     const cid = await client.put(files);
//     UntoucheDdata.set("CID", cid);
//     UntoucheDdata.save();
//     console.log("stored files with cid", cid);
//     axios.get( `https://${cid}.ipfs.infura-ipfs.io/data.json`)
//     .then(function (response) {
//    setData(response.data)

//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       }) 
    
//     return cid;
// }
// console.log(data);
    return (
        <div style={{ backgroundColor: "aliceblue" }} className="col">
            <div className="form-style-2 offset-4 row-8">
                <div className="form-style-2-heading">Upload any files from here</div>
                <form action="" method="" onSubmit={onFormSubmit}>
                    <label for="field1"><span>Name <span className="required">*</span></span><input value={name} onChange={nameEvent} placeholder="Your name" type="text" class="input-field" name="field1" /></label>

                    <label for="field2"><span>Subject <span className="required">*</span></span><input value={subject} placeholder="Subject" onChange={subjectEvent} type="text" class="input-field" name="field2" /></label>

                    <label for="field4"><span>Category</span><select value={category || null} name="field4" onChange={categoryEvent} className="select-field">
                        <option value="Book">Book</option>
                        <option value="Documents">Documents</option>
                        <option value="Newspaper">Newspaper</option>
                        <option value="Website / Snapshot">Website / Snapshot</option>
                    </select></label>

                    {

                    }
                    <label for="field6"><span>Choose file</span><input className="file-input" value={undefined} onChange={fileEvent} type="file"></input></label>

                    <label for="field7"><span>Add website</span><input value={website} className="add-url" placeholder="add URL" onChange={websiteEvent} type="url"></input></label>

                    <label for="field5"><span>Description</span><textarea value={description} onChange={descriptionEvent} name="field5" className="textarea-field"></textarea></label>

                    <label><input className="terms-checkbox" value={checkbox} onChange={checkboxEvent} type="checkbox"></input>I agree to terms and conditions.</label>

                    <label><span> </span><input type="submit" value="Submit" /></label>
                </form>
            </div>
        </div>

    )
}


export default UploadForm;