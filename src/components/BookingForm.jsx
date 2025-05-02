import React from 'react';

function BookingForm(){
    const [date,setDate]= React.useState("");
    const [time,setTime]= React.useState("");
    const [guests,setGuests]= React.useState("");
    const [occasion,setOccasion]= React.useState("");
    
    function handleSubmit(event){
        event.preventDefault();
        props.SubmitForm(event);
    }
    function handleChange(event){
        const val = event.target.value;
        setDate(val);
        props.dispatch(val);
    }
    function handleGuests(event){
        const val = event.target.value;
        setGuests(val);
    }
    function handleOccasion(event){
        const val = event.target.value;
        setOccasion(val);
    }
    
    
    return(
        <div>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input onChange={handleChange} value={date} id='book-date' type='date'/>
                        </div>
                        {/*Select Time*/}
                        <div>

                        </div>
                        {/*Select Guests*/}
                        <div>
                            <label htmlFor='book-guests'>Number Of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={handleGuests}/>
                        </div>
                        {/*Select Occasion*/}
                        <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id="book-occasion" value={occasion} key={occasion} onChange={handleOccasion}>
                            <option>BirthDay</option>
                            <option>Anniversary</option>
                            <option>Family Meet-Up</option>
                        </select>
                        </div>
                        {/*Submit Button*/}
                        <div className='btnRecieve'>
                            <input aria-label='on Click'  type="submit" value={"Make Your Reservation"} />
                        </div>

                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default BookingForm;