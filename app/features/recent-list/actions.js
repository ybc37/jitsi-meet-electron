// @flow

import { REMOVE_RECENT_ITEM } from './actionTypes';

/**
 * Removes a recent list item.
 *
 * @param {Object} conference - Conference Details.
 * @returns {{
 *     type: REMOVE_RECENT_ITEM,
 *     conference: Object
 * }}
 */
export function removeRecentItem(conference: Object) {
    return {
        type: REMOVE_RECENT_ITEM,
        conference
    };
}
