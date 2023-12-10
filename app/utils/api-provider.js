class ApiProvider {
    static baseUrl = 'https://api.jikan.moe/v4';

    static async getAnimeFullById(id) {
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/full`);
        return await response.json();
    }

    static async getAnimeById(id) {
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}`);
        return await response.json();
    }

    static async getAnimeCharacters(id) {
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/characters`);
        return await response.json();
    }

    static async getAnimeStaff(id) {
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/staff`);
        return await response.json();
    }

    static async getAnimeEpisodes(id) {
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/episodes`);
        return await response.json();
    }

    static async getAnimeEpisodesById(id, episodeId) {
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/episodes/${episodeId}`);
        return await response.json();
    }

    static async getAnimeNews(id) {
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/news`);
        return await response.json();
    }

    static async getAnimeForum(id){
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/forum`);
        return await response.json();
    }

    static async getAnimeVideos(id){
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/videos`);
        return await response.json();
    }

    static async getAnimeVideosEpisodes(id, episodeId){
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/videos/episodes`);
        return await response.json();
    }

    static async getAnimePictures(id){
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/pictures`);
        return await response.json();
    }

    static async getAnimeStatistics(id){
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/statistics`);
        return await response.json();
    }

    static async getAnimeMoreInfo(id){
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/moreinfo`);
        return await response.json();
    }

    static async getAnimeRecommendations(id){
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/recommendations`);
        return await response.json();
    }

    static async getAnimeUserUpdates(id){
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/userupdates`);
        return await response.json();
    }

    static async getAnimeReviews(id){
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/reviews`);
        return await response.json();
    }

    static async getAnimeStreaming(id){
        const response = await fetch(`${ApiProvider.baseUrl}/anime/${id}/streaming`);
        return await response.json();
    }

    static async getAnimeSearch(query){
        const response = await fetch(`${ApiProvider.baseUrl}/anime?q=${query}&order_by=popularity&sfw`);
        console.log(`${ApiProvider.baseUrl}/anime?sfw`);
        return await response.json();
    }


    static async getTopAnime() {
        const response = await fetch(`${ApiProvider.baseUrl}/top/anime`);
        return await response.json();
    }

    static async getTopCharacters() {
        const response = await fetch(`${ApiProvider.baseUrl}/top/characters`);
        return await response.json();
    }

}

export default ApiProvider;
