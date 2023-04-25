import { useState } from "react";

function useForm(model) {


    const [fieldsData, setFieldsData] = useState({ ...model });
    const [errors, setErrors] = useState({});
    // const orgModel = useRef({ ...fieldsData });

    const update = e => {

        const name = e.target.name;
        const val = e.target.value;

        const newObj = { ...fieldsData }
        newObj[name].value = val;

        valid(name, val);

        setFieldsData(newObj);
    }

    const valid = (name, val) => {
        let msg = '';
        for (const key in fieldsData[name].valid) {
            const vObj = fieldsData[name].valid[key];
            switch (key) {
                case 'maxLength': (val.length > vObj.val) && (msg = vObj.msg); break;
                case 'minLength': (val.length < vObj.val) && (msg = vObj.msg); break;
                case 'min': (val < vObj.val) && (msg = vObj.msg); break;
                case 'max': (val > vObj.val) && (msg = vObj.msg); break;
                default: msg = ''; break;
            }
        }
        const newErr = { ...errors }
        newErr[name] = msg;
        setErrors(newErr);
    }

    const reset = () => {
        setFieldsData(model);
    }

    const getProps = name => ({ value: fieldsData[name].value, onChange: update })

    const data = {};
    for (const key in fieldsData) {
        data[key] = fieldsData[key].value;
    }

    return [getProps, errors, data, reset];

}

export default useForm;