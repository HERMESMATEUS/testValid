export function Model_gettopartists(data) {
    return {
        setGeo: data.topartists.artist,
        headerGeo: data.topartists['@attr']
    }
}