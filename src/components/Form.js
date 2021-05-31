import React from 'react';

function Form() {
  return (
    <form>
      <div className='input-wrapper'>
        <input type='text' placeholder='Enter your name' />
      </div>

      <div className='input-wrapper'>
        <input type='text' placeholder='Enter your email' />
      </div>

      <div className='input-wrapper'>
        <input type='text' placeholder='Order Number' />
      </div>

      <div className='input-wrapper'>
        <input type='text' placeholder='Phone Number' />
      </div>

      <div className='textarea-wrapper'>
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          placeholder="What's on your mind"
        ></textarea>
      </div>

      <button>Send message</button>
    </form>
  );
}

export default Form;
