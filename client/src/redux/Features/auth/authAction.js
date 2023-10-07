import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const userLogin = createAsyncThunk('auth/login',
async({role,email,password},{rejectWithValue})=>
{
    try {
        const {data} =await API.post('/auth/login',{role,email,password})

        if(data.success)
        {
            localStorage.setItem('token',data.token)
            toast.success(data.message)
            window.location.replace("/")
        }
        return data
    } catch (error) {
        if(error.response && error.response.data.message)
        {
            return rejectWithValue(error.response.data.message)
        }
        else 
        {
            return rejectWithValue(error.message)
        }
    }
})

export const userRegister =createAsyncThunk('auth/register',async ({
    name,
    role,
    email,
    password,
    phone,
    organisationName,
    address,
    hospitalName,
    website
},{rejectWithValue})=>
{
    try {
        const {data} = await API.post('/auth/register',{ name,
            role,
            email,
            password,
            phone,
            organisationName,
            address,
            hospitalName,
            website})

            if(data.success)
            {
                toast.success(data.message)
                window.location.replace('/login')
                // console.log(window.location);

            }
            return data;
    } catch (error) {
        if(error.response && error.response.data.message)
        {
            return rejectWithValue(error.response.data.message)
        }
        else 
        {
            return rejectWithValue(error.message)
        }
    }
})

// current user
export const getCurrentUser = createAsyncThunk('auth/getCurrentUser',async({rejectWithValue})=>
{
   
    try {
        const res = await API.get('/auth/current-user')
        if(res?.data)
        {
            return res.data
        }
    } catch (error) {
        if(error.response && error.response.data.message)
        {
            return rejectWithValue(error.response.data.message)
        }
        else 
        {
            return rejectWithValue(error.message)
        }
    }
})