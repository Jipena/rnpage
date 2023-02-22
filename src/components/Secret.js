import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

const myKey = "jesper";
export const SecretComponent = () => {
    let keyInput = "";

    document.addEventListener("keydown", (key) => {
        keyInput += key.key;
        if(myKey === keyInput){
            
        }
        else{
            setTimeout(() =>{
                keyInput = ""
            }, 2000
            )
        }
    })
}