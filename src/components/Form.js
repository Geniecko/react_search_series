import React from 'react';

import './Form.css'

const Form = (props) => {
   return ( 
   	<div className = 'form-panel'>
         <form>
			<input 
				type="text" 
				placeholder = 'wpisz nazwę filmu' 
				value = {props.value}
				onChange = {props.handleInputChange}
			/>
         		{/* <button>SZUKAJ</button>	 */}
         </form>
      </div>
   );
}
 
export default Form;