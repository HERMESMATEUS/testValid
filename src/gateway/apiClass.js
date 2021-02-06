import NetInfo from "@react-native-community/netinfo";

export default class API {

    URL_BASE = null;
    token = null;
    headers_Default = {};

    static _setURL_BASE = async (URL_BASE) => {
        API.URL_BASE = URL_BASE;
        return true
    };

    static _setHeaders_default = (headers_Default) => {
        console.log(headers_Default)
        API.headers_Default = headers_Default;
    }

    static _setToken = (token) => API.token = token;

    static _deleteToken = () => API.token = null;

    _getHeaders(customHeaders = {}) {
        const defaultHeaders = {}
        if (API.token) defaultHeaders.Authorization = `TOKEN ${API.token}`;
        return { headers: defaultHeaders, ...API.headers_Default, ...customHeaders }
    }

    _getUrl = (path) => encodeURI(`${API.URL_BASE}${path}`);

    static async _get({ endPoint, params = {}, UnAuthorized }) {
        const self = new API();
        let Url = self._getUrl(`${endPoint}?${new URLSearchParams({ ...params })}`)
        return await self.sendRequest(Url, { method: 'GET' }, UnAuthorized);
    }

    async sendRequest(url, method, UnAuthorized) {
        const timeout = 10000;
        const controller = new AbortController();
        let isConnected = false; await NetInfo.fetch().then(state => isConnected = state.isConnected);

        if (isConnected) {
            const id = setTimeout(() => controller.abort(), timeout);
            try {
                const response = await fetch(url, {
                    ...this._getHeaders(method),
                    signal: controller.signal
                });
                let data = await response.json();
                clearTimeout(id);
                switch (response.status) {
                    case 200: {
                        return { success: true, data: data, status: response.status }
                    }
                    case 400: return { success: false, message: `${response.message}  ${response.status}`, status: 400 };
                    case 401: UnAuthorized({ success: false, message: "UnAuthorized", status: 401 }); break
                    case 403: UnAuthorized({ success: false, message: "Forbidden", status: 403 }); break
                    default:
                        return { success: false, message: `"A communication error has occurred, please try again" ${response.status}`, status: response.status };
                }
            } catch (error) {
                return { success: false, message: `${error} Catch`, status: "Catch" };
            }
        }
        else {
            return { success: false, message: "Remember that you must be connected to the internet to make use of the application", status: "NetWork" };
        }

    }

}