const InitialCountersState = {
    catList: [
    {id: 456, name: 'The Cheshire Cat', livesCount: 9},
    {id: 123, name: 'Cat in The Hat', livesCount: 6},
    {id: 234, name: 'Witch\'s Black Cat', livesCount: 6},
    {id: 345, name: 'Happy Fat Cat', livesCount: 6}
]
};

const todo = (state = InitialCountersState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default todo;
