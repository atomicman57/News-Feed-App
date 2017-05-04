import dispatcher from "../dispatcher/dispatcher"
import * as api from "../utils/newsapi"

export function getSources() {
    api.getSources(function (data) {
        dispatcher.dispatch({
            type: 'GET_SOURCES',
            data,
        });
    })

}

export function getHeadlines(source, sort) {
    api.getHeadlines(source, sort, function (data) {
        dispatcher.dispatch({
            type: 'GET_ARTICLES',
            data,
        });
    })

}