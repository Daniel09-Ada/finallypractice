import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import "./Form.css"


const Form = (props) => {

    const [text , setText] = useState("")
    const [number , setNumber] = useState("")
    const [img , setImg] = useState("")

    const textChange = (e) => {
        setText(e.target.value)
        // console.log(text);
    }

    const numberChange = (e) => {
        setNumber(e.target.value)
        // console.log(number);
    }

    const imgChange = (e) => {
        setImg(e.target.value)
        // console.log(img);
    }

    
    const dataValue = () => {
        const expens = {
            name: text,
            price: number,
            img: img,
            id: Math.random().toString()
        }
        
        props.data(expens)

        // console.log(expens);    
        

    }


  return (
    <>

    <form>
        <div>
            <h1>Новые товары</h1>
            <Input onChange = {textChange} value = {text} type = "text" placeholder = "Название товара" ></Input>
            <Input onChange = {numberChange} value = {number} type = "number" placeholder = "Цена товара"></Input>
            <Input onChange = {imgChange} value = {img} type = "text" placeholder = "Фото товара"></Input>
            <Button onClick={dataValue}>Добавить</Button>

        </div>
        
    </form>
      
    </>
  )
}

export default Form
