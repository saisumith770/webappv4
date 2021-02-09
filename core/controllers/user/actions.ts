import routes from './routes'
import states from './states'

import ChannelStates from '../channel/states'

import { Error } from '../auth/events'

import { user_data, user_state } from './interface'

//get user info and update state
const defaultParam = {
    payload: {
        user_id: true,
        photo: true,
        username: true,
        domain: true,
        created_at: true,
        tags: true,
        description: true,
        viewers: true,
        subscription: true,
        vods: true,
        channelInfo: true,
        state: true,
        channel_trailer: true,
        activity: true,
        integrations: true
    },
    me: true
}

function info(
    params?: {
        payload?: Record<string, boolean>,
        me?: boolean,
        domain?: string
    }
) {
    const { payload, domain, me } = { ...defaultParam, ...params }
    routes.info(payload, me, domain)
        .then(data => {
            if (data.status === 401) Error.emit({ type: "Account Error", message: "we we're not able to fetch your account. If this was an unexpected behaviour please report it on our discord server." })
            else {
                if (me) {
                    states.info.set(data)
                    states.state.set(data.activity.state)
                }
                ChannelStates.current_channel.set(data)
                ChannelStates.current_channel_state.set(data.activity.state)
            }
        })
        .catch(() => {
            Error.emit({ type: "Invalid Behaviour", message: "please report this issue as soon as possible. This could be because our servers were down or there's been a data breach." })
            return false
        })
}

//update user info and state
function update(payload: { user_id: string, data: user_data }) {
    routes.update(payload)
        .then(data => {
            if (data.status) states.info.patch(data.data)
            else console.log('err')
        })
}

//get the current state
function updateState(user_id: string, payload: { state: user_state }) {
    routes.state(user_id, payload)
        .then(data => {
            if (data.status === 200) states.state.set(payload.state)
        })
}

export default {
    info,
    update,
    updateState
}