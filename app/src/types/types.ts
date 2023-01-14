import { FormEventHandler, ChangeEventHandler } from "react";

export type PostData = {
    name: string;
    username: string;
    message: string;
    id: number;
    likes: number;
}

export type User = {
    name: string;
    username: string;
    id: string;
}

export type DataForm = {
    handleSubmit: FormEventHandler;
    handleChange: ChangeEventHandler;
}