/* eslint-disable import/no-anonymous-default-export */
export default (posts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            // eslint-disable-next-line eqeqeq
            return posts.filter((post) => post._id !== action.payload);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts;
    }
}