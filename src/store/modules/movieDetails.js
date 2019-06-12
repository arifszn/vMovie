const state = {
    isMovieDetailsButtonPress: false
};

const mutations = {
    'MOVIE_DETAILS_BUTTON_PRESSED' (state) {
        state.isMovieDetailsButtonPress = true;
        console.log(state.isMovieDetailsButtonPress);
    },
    'MOVIE_DETAILS_BUTTON_CLOSED' (state) {
        state.isMovieDetailsButtonPress = false;
        console.log(state.isMovieDetailsButtonPress);
    }
};

const actions = {
    movieDetailsButtonPressed: ({commit}) => {
        commit('MOVIE_DETAILS_BUTTON_PRESSED');
        
    },
    movieDetailsButtonClosed: ({commit}) => {
        commit('MOVIE_DETAILS_BUTTON_CLOSED');
        
    }
};

const getters = {
    getMovieDetailsButtonStatus: state => {
        return state.isMovieDetailsButtonPress;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}