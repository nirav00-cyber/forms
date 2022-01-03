import React from 'react'

function BasicForm(props) {
    return (
        <form>
            <div className='control-group'>
                <div className='form-control'>
                    <label htmlFor='name'>First Name</label>
                    <input id='name' type='text'/>
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input id='email' type='text'/>
                </div>
                <div className='form-actions'>
                    <button>Submit</button>
                </div>
            </div>
            
        </form>
    )
}

export default BasicForm;
