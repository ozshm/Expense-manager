
function Form({formProps}) {

    let fieldItems = formProps.fields.map( (field) => {

        const formControl = 'form-control' + (field.inputType === 'checkbox' ? ' form-control-check' : '');
        return (
            <div key={field.name} className={formControl}>
                <label> {field.label} </label>
                <input
                    type={field.inputType}
                    name={field.name}
                    onChange={field.onChange}
                    />
            </div>
        )
    })



    return (
        <>
            <div>
                <form className='add-form' method='POST' onSubmit={formProps.onSubmit}>
                    {fieldItems}

                    {
                        formProps.response.message && <p style={{color: 'red'}}> {formProps.response.message} </p>
                    }
                    <div className='buttons'>
                        <input
                            type='submit'
                            value={formProps.button.value}
                            className='btn btn-block'
                        />
                    </div>

                </form>
            </div>
        </>

    )

}



export default Form;
