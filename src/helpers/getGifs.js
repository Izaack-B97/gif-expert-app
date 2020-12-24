export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=x4MsguogEaSJ411Yz6Bz1V57Ao10yKYy`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    // console.log(data);

    const giphys = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return giphys;
}
