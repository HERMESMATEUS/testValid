import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { _setGeo } from '@redux/actions/geoAction';

import { EndPoint_gettopartists } from '@gateway/endpoints';

import ContainComponent from '@components/contain.component';
import LoaddingComponent from '@components/loadding.component';
import ListComponent from '@components/list.component';

const Gettopartists = ({ navigation }) => {

    const dispatch = useDispatch();
    const [waiting, setWaiting] = React.useState(true);
    const { setGeo, headerGeo } = useSelector(state => state.geo);

    const getGeoPartists = () => {
        EndPoint_gettopartists()
            .then((data) => { dispatch(_setGeo(data)); setWaiting(false) })
            .catch((e) => console.log(e))
    }

    React.useEffect(() => {
        getGeoPartists();
    }, []);

    return <ContainComponent>
        <ListComponent
            header={headerGeo}
            data={setGeo}
            onClick={(item) => navigation.navigate('GettopartistsDescription', item)}
        />
        <LoaddingComponent show={waiting} />
    </ContainComponent>
}

export default Gettopartists;