import API from '@gateway/apiClass';
import { Alert } from 'react-native';
import { Model_gettopartists } from '@gateway/modelData';

function UnAuthorizedDefault(data) {
    console.log('UnAuthorized data => ', data);
    Alert.alert(
        '', `UnAuthorized`,
        [
            { text: 'Aceptar', onPress: () => null }
        ],
        { cancelable: false }
    )
}

export async function EndPoint_gettopartists() {
    let params = {
        method: "geo.gettopartists", country: "spain", format: "json",
        api_key: "829751643419a7128b7ada50de590067"
    }
    let response = await API._get({ endPoint: "", params, UnAuthorizedDefault });
    if (response.success === true) return Model_gettopartists(response.data);
    else throw response.message;
}