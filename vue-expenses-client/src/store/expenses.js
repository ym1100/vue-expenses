import Api from '@/services/api'
import { GET_EXPENSE, ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE, ADD_ALERT } from '@/store/_actionTypes'
import { SET_EXPENSE, CREATE_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE } from '@/store/_mutationTypes'

const state = {
    expenses: []
};

const actions = {
    
}

const mutations = {
    
}

export const expense = {
    namespaced: true,
    state,
    actions,
    mutations
};