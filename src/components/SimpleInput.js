import React,{useState} from 'react'

function SimpleInput(props)
{
    
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = (!enteredNameIsValid && enteredNameTouched);


    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = (!enteredEmailIsValid && enteredEmailTouched);


    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid)
        formIsValid = true;
    
    const nameInputChangeHandler = (event) =>
    {
        setEnteredName(event.target.value);
    } 

    const nameInputBlurHandler = event =>
    {
        setEnteredNameTouched(true);
    }
    const emailInputChangeHandler = event =>
    {
        setEnteredEmail(event.target.value);
    }
    const emailInputBlurHandler = event =>
    {
        setEnteredEmailTouched(true);
    }

    const formSubmissionHandler = event =>
    {
        event.preventDefault();
        setEnteredNameTouched(true);
        
        // if (!enteredNameIsValid)
        //     return;
        
        console.log(enteredName + ' ' + enteredEmail);
        
        setEnteredName('');
        setEnteredNameTouched(false);
        setEnteredEmail('');
        setEnteredEmailTouched(false);
   }
    const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

      const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';


    
    return (
      <form onSubmit={formSubmissionHandler}>
     {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
        <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-mail</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}></input>
                {emailInputIsInvalid && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
            </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
    )
}

export default SimpleInput
