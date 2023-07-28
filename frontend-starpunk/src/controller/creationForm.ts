interface state {
    email: string;
    userName: string;
    passWord: string;
    day: string;
    month: string;
    year: string;
    pin: number;
    gender: string;
}
import { ChangeEvent, MouseEvent } from "react";
import axios from 'axios';
import {token} from "../../../umi-config.json"
import {HTTPAPI} from "../../../umi-config.json"
export class creationForm {
    public days: number[];
    public months: number[];
    public years: number[];
    private state: state;
    constructor() {
        this.days = Array.from({ length: 31 }, (_, i) => 1 + i);
        this.months = Array.from({ length: 12 }, (_, i) => 1 + i);
        this.years = Array.from({ length: 93 }, (_, i) => 1931 + i);
        this.state =
        {
            email: "",
            userName: "",
            passWord: "",
            day: "dd",
            month: "mm",
            year: "yyyy",
            pin: 0,
            gender: "male" 
        }
    }
    public setEmail(event: ChangeEvent<HTMLInputElement>): void {
        this.state.email = event.target.value;
    }
    public setUserName(event: ChangeEvent<HTMLInputElement>): void {
        this.state.userName = event.target.value;
    }
    public setPassWord(event: ChangeEvent<HTMLInputElement>): void {
        this.state.passWord = event.target.value;
    }
    public setDay(event: ChangeEvent<HTMLSelectElement>): void {
        this.state.day = event.target.value;
    }
    public setMonth(event: ChangeEvent<HTMLSelectElement>): void {
        this.state.month = event.target.value;
    }
    public setYear(event: ChangeEvent<HTMLSelectElement>): void {
        this.state.year = event.target.value;
    }
    public setPin(event: ChangeEvent<HTMLInputElement>): void {
        this.state.pin = Number.parseInt(event.target.value);
    }
    public setGender(event: ChangeEvent<HTMLSelectElement>): void {
        this.state.gender = event.target.value;
    }
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }
    public OnVetifyEmail = (): void => {
        const emailInput = document.querySelector<HTMLInputElement>("#email");
        if (this.isValidEmail(this.state.email)) {
            emailInput?.setAttribute("class", "form-control");
        } else {
            emailInput?.setAttribute("class", "form-control is-invalid");
        }
    }
    public OnVetifyName = (): void => {
        const userNameInput = document.querySelector<HTMLInputElement>("#userName");
        if (this.state.userName.length < 4 || this.state.userName.length > 18) {
            userNameInput?.setAttribute("class", "form-control is-invalid");
        } else {
            userNameInput?.setAttribute("class", "form-control");
        }
    }
    public OnVetifyPassWord = (): void => {
        const passWordInput = document.querySelector<HTMLInputElement>("#passWord");
        if (this.state.passWord.length < 12 || this.state.passWord.length > 20) {
            passWordInput?.setAttribute("class", "form-control is-invalid");
        } else {
            passWordInput?.setAttribute("class", "form-control");
        }
    }
    public OnVetifyPin = (): void => {
        const pindInput = document.querySelector<HTMLInputElement>("#pin");
        if (this.state.pin.toString().length === 6) {
            pindInput?.setAttribute("class", "form-control");
        } else {
            pindInput?.setAttribute("class", "form-control is-invalid");
        }
    }
    public alertBox=(msg:string):void=>
    {
        document.querySelector<HTMLDivElement>("#user-alert")?.setAttribute("class", "alert alert-danger");
        document.querySelector<HTMLDivElement>("#user-alert")!.innerHTML=msg;
    }
    public OnSubmit = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
        event.preventDefault();
        if (this.state.day === "dd" || this.state.month === "mm" || this.state.year === "yyyy") {
            this.alertBox("BirthDay ERR");
        } else {
            const birthday = `${this.state.day}/${this.state.month}/${this.state.year}`
            if (this.isValidEmail(this.state.email)
                && this.state.passWord.length > 11
                && this.state.passWord.length < 21
                && this.state.userName.length > 3
                && this.state.userName.length < 19
                && this.state.pin.toString().length === 6) {
                await axios.post(HTTPAPI.creation_user,
                    {
                        email: this.state.email,
                        userName: this.state.userName,
                        passWord: this.state.passWord,
                        birthday: birthday,
                        pin: this.state.pin ,
                        gender: this.state.gender ,
                        token: token.pin 
                    }).then(respon=>{
                        const status = respon.data.status ;
                        if(status === "email-active")
                        {
                            document.querySelector<HTMLInputElement>("#email")?.setAttribute("class", "form-control is-invalid");
                            this.alertBox("Email already");
                        }else
                        if(status === "name-active")
                        {
                            document.querySelector<HTMLInputElement>("#userName")?.setAttribute("class", "form-control is-invalid");
                            this.alertBox("UserName already");
                        }else
                        if(status === "successed")
                        {
                            return  window.location.replace('/');
                        }
                    });

            } else {
                console.log("not");
            }
        }
    }

}   