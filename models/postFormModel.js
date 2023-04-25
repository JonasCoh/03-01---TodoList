import appConfig from "../Config/appConfig";

const postFormModel = {

    fields: {
        title: {
            value: '',
            valid: {
                maxLength: { val: 20, msg: 'Cant be longer then 20' },
                minLength: { val: 4, msg: 'Cant be shorter then 4' },
            }
        },

        body: {
            value: '',
            valid: {
                maxLength: { val: 20, msg: 'Cant be longer then 20' },
                minLength: { val: 4, msg: 'Cant be shorter then 4' },
            }
        },
        userId: {
            value: 0,
            valid: {
                max: { val: 10, msg: 'Cant be more then 10' },
                min: { val: 1, msg: 'Cant be lower then 2' },
            }
        }
    },
    add: {
        url: appConfig.posts,
        method: 'post',
    },
    update: {
        url: appConfig.posts,
        method: 'put',
    },
    del: {
        url: appConfig.posts,
        method: 'delete',
    }
}

export default postFormModel;