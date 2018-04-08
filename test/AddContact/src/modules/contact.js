export const ADD_CONTACT = 'contact/ADD_CONTACT';


const initialState = [
    {
        name: "Rajiv Kumar",
        contact: 9424107224,
    },
    {
        name: "Rajiv Jain",
        contact: 9424107224,
    },
    {
        name: "Rajiv Sahu",
        contact: 9424107224,
    }
];


export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_CONTACT:
            return [
                ...state,
                {
                    name: action.name,
                    contact: action.contact
                }
            ]

        default:
            return state;
    }
};


export const addContactCall = (name, contact) => {
    console.log("Add user: ", name);
    return dispatch => {
        dispatch({
            type: ADD_CONTACT,
            name,
            contact
        });

    };
};
