import React, { useState } from 'react'
import './App.css'
import { Button, Drawer } from 'antd'
import { useForm } from 'react-hook-form'


function App() {
    const [open, setOpen] = useState(false)
    const [size, setSize] = useState()
    const showModal = ()=>{
        setSize('large')
        setOpen(true)
    }
    const onClose = ()=>{
        setOpen(false)
    }
    const{
        register,
        formState:{
            errors,
            isValid,
        },
        handleSubmit,
        reset
    } = useForm({
        mode:'onBlur'
    })
    const onSubmit = (data)=>{
        console.log(data)
        reset()
    }
    const el =[
        {name:'Tashkent'},
        {name:'Andijon'},
        {name:'Samarqand'},
        {name:'Fargona'},
        {name:'Namangan'},
        {name:'Xorazm'},
        {name:'Qoraqolpogiston'},
        {name:'Navoiy'},
        {name:'Qashqadaryo'},
        {name:'Surxandaryo'},
        {name:'Buxoro'},
        {name:'Jizzax'},
        {name:'Sirdaryo'},
    ]
  return(
    <>
    <Button onClick={showModal} type='primary'>
        Open
    </Button>
    <Drawer title="Your info" onClose={onClose} open={open} size={size} color='black'>
    <form onSubmit={handleSubmit(onSubmit)} >
        <label>
            <h3>FirstName</h3>
            <input type="text"{...register("FirstName",
                {
                    required:"Mr.Write your FirstName!",
                    minLength:{
                        value:2,
                        message:'Mr.Your name is not long try again please'
                    }
                }
            )} />

        </label>
        <label>
            <h3>LastName</h3>
            <input type="text" {...register('LastName',
                {
                    required:"Mr.Write your LastName",
                    minLength:{
                        value:3,
                        message:'Mr.Your LastName is not Long'
                    }
                }
            )}/>
        </label>
        <label>
            <h3>Phone Number</h3>
            <input type="tel" {...register("PhoneNumber",
            {
                required:'Mr.Write your phone number',
                minLength:9,
                message:'Mr.Your phone number not valid'
            }
            )}/>
        </label>
        <label>
            <fieldset>
            <legend>Adress</legend>
            <select>
            {el.map((el)=>{
                return(
                    <>
                    <option value="">{el.name}</option>
                    </>
                )
            })}
            </select>
            </fieldset>
        </label>
        <div style={{height:'40px'}}>
            {errors?.FirstName && <p color='red' >{errors?.FirstName?.message || "Error"}</p>}
        </div>
        <button type="submit" disabled={!isValid}>Create</button>
    </form>
    </Drawer>
    </>
  )
}

export default App
