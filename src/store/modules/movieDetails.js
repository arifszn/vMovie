const state = {
    isMovieDetailsButtonPress: false,
    movieId: null
};

const mutations = {
    'MOVIE_DETAILS_BUTTON_PRESSED' (state, movieId) {
        state.isMovieDetailsButtonPress = true;
        state.movieId = movieId;
    },
    'MOVIE_DETAILS_BUTTON_CLOSED' (state) {
        state.isMovieDetailsButtonPress = false;
    }
};

const actions = {
    movieDetailsButtonPressed: ({commit}, movieId) => {
        commit('MOVIE_DETAILS_BUTTON_PRESSED', movieId);
        
    },
    movieDetailsButtonClosed: ({commit}) => {
        commit('MOVIE_DETAILS_BUTTON_CLOSED');
        
    }
};

const getters = {
    getMovieDetailsButtonStatus: state => {
        return state.isMovieDetailsButtonPress;
    },
    getMoviePopupId: state => {
        return state.movieId;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}