import React from 'react';
import Input from '../input';
import "./style.css";
import Button from '../button';
import Select from '../select';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { itemSchema } from '../../constants/formValidate';

const ItemForm = ({
    mode = 'onChange',
    onSubmit,
    options,
    defaultValueTitle = "",
    defaultValueTask = "",
    title = "",
    placeholderTitle="Title",
    placeholderTask="Task",
    buttonText="Create"
}) => {
    const { register, handleSubmit, reset, formState: { errors, isValid, isDirty }, } = useForm({
        resolver: yupResolver(itemSchema),
        mode: mode,
    });
    const onSubmitHandler = (data) => {
        onSubmit(data)
        reset()
    };

    return (
        <form className='Item-form' onSubmit={handleSubmit(onSubmitHandler)}>
            {title && <h2 className='Item-form__title'>{title}</h2>}
            <div className='Item-form__block'>
                <Input 
                register={register("title")} 
                defaultValue={defaultValueTitle} 
                placeholder={placeholderTitle}
                errorText={errors.title && errors.title?.message?.toString()}
                />
                <Input 
                register={register("task")} 
                defaultValue={defaultValueTask} 
                placeholder={placeholderTask}
                errorText={errors.task && errors.task?.message?.toString()}
                />
                <Select register={register("status")} options={options} />
                <Button text={buttonText} disabled={!isValid} />
            </div>
        </form>
    );
};

export default ItemForm;