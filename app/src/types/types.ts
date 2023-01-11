import { FormEventHandler, ChangeEventHandler } from "react";

export type PostData = {
    name: string;
    username: string;
    message: string;
    id: string;
}

export type DataUser = {
    name: string;
    username: string;
}

export type DataForm = {
    handleSubmit: FormEventHandler;
    handleChange: ChangeEventHandler;
}