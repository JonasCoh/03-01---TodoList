import postFormModel from '../../../models/postFormModel';
import useForm from '../../../Services/useForm';
import './PostAdd.css';


// function TestComp() {
//     console.log(props);
//     return <>1</>
// }

function PostAdd() {

    // const cat1 = { name: 'Mitzi', age: 4 }
    // const cat2 = { ...cat1 }
    // const getObj = n => ({ name: n, age: 4 })

    const [data, update, init] = useForm(postFormModel.fields);

    // const t = { value: data.title.value, onChange: update }
    // const b = { value: data.body.value, onChange: update }

    // const getProps = name => ({ value: data[name].value, onChange: update })

    // const t = getProps('title');
    // const b = getProps('body');

    return (
        <div className="PostAdd">

            {/* <TestComp {...cat1} /> */}

            <form>

                <label>
                    <label> Title </label>
                    <input type="text" name='title' {...init('title')} />
                </label>

                <label>
                    <label> Body </label>
                    <input type="text" name='body' {...init('body')} />
                </label>



                <button> Send </button>
            </form>

        </div>
    )


}
export default PostAdd;