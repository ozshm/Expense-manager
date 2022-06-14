import Header from "../components/Header";
import Form from "../components/Form";


function ShowReport({report}) {

    return (
        <div>
            <h3>
                {
                    report?.body &&
                    `The total cost for ${report.monthAndYear} is ${JSON.stringify(report.body)}`
                }
                
            </h3>
        </div>
    )

}

function Container( { title, pre, image, formProps, report}) {
    return (
        <div className='container' >
            <Header title={title}/>
            {formProps && <Form formProps ={formProps}/>}
            {report && <ShowReport report = {report}/>}
            {pre && <pre> {pre} </pre> }
            {image && <img src = {image} alt = 'mern' height = '400' style={{padding: 20, margin:10}}/>}
        </div>
    );
}


export default Container;
