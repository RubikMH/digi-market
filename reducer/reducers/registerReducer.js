const initialValue = {
    Name: null,
    Family: null,
    Email: null,
    Password: null,
    register: false,
};

export default function registerReducer(state = initialValue, action) {
    switch (action.type) {
        case "register":
            return {
                ...state,
                Name: action.payload.valueFrom.Name,
                Family: action.payload.valueFrom.Family,
                Email: action.payload.valueFrom.Email,
                Password: action.payload.valueFrom.Password,
                register: action.payload.register,
            };
        default:
            return state;
    }
}