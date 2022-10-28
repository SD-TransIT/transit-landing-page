import React, { useRef } from 'react';

import { useForm } from 'react-hook-form';
import Button from './Button';
import Input from './Input';
import TextField from './TextField';

import { RiCloseLine } from "react-icons/ri";

import '../styles/requestForm.css';

type RequestFormType = {
  setIsOpen: (value: boolean) => void
}

const RequestForm = ({ setIsOpen }: RequestFormType) => {
  const myRef = useRef<HTMLInputElement | null>(null)

    const { register, handleSubmit, formState: { errors } } = useForm({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
      shouldUnregister: true,
      defaultValues: {
        fullName: '',
        companyName: '',
        phoneNumber: null,
        email: '',
        message: '',
        consent: false
      }
    });

  const onSubmit = async (data:any) => {
    console.log('data', data)
  }

  return (
    <>
      <div className="modal-header">
        <p className="heading">Request a Demo</p>
        <RiCloseLine className='modal-close-btn' onClick={() => setIsOpen(false)}/>
      </div>
      <div className="modal-label">
        <p>Please fill out the form below to request your demo.</p>
      </div>
      <div className='form-container' ref={myRef as React.RefObject<HTMLDivElement>}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className='input-field'>
              <Input
                {...register('fullName', { required: true })}
                name='fullName'
                label='Full name'
                
                placeholder='Type your name'
                type='text'
                isInvalid={Boolean(errors.fullName)}
                isRequired
                id='fullName'            
                />
            </div>
            <div className='input-field'>
              <Input
                {...register('companyName', { required: true })}
                name='companyName'
                label='Company Name'
                placeholder='Type your company name'
                type='text'
                isInvalid={Boolean(errors.companyName)}
                isRequired
                />
            </div>
          </div>
          <div>
            <div className='input-field'>
              <Input
                {...register('phoneNumber')}
                name='phoneNumber'
                label='Phone number'
                placeholder='Type your phone number'
                type='text'
                isInvalid={Boolean(errors.phoneNumber)}
                />
            </div>
            <div className='input-field'>
              <Input
                {...register('email', { required: true })}
                name='email'
                label='Email'
                placeholder='Type your email'
                type='text'
                isInvalid={Boolean(errors.email)}
                isRequired
                />
              </div>
            </div>
          <div className='input-field'>
            <TextField
              {...register('message', { required: true })}
              name='message'
              label='Your message'
              placeholder='Type your message'
              isInvalid={Boolean(errors.message)}
              isRequired
              />
          </div>
          <div className='checkbox-container'>
            <input
              className='checkbox'
              {...register('consent')}
              name='consent'
              value='true'
              type='checkbox'
              />
            <p>I agree to the processing of my personal data and would like to receive emails about my request</p>
          </div>
          <div className='submit-button'>
            <Button  disabled={false} label='Send Request' type='submit'/>
          </div>
        </form>
      </div>
    </>
  )
}

export default React.forwardRef(RequestForm)
