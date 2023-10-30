var client_id = '';
var client_secret = '';

let accessToken = null;

// Hàm kiểm tra tính hiệu lực của token
function isTokenValid(token) {
    if (!token) {
        return false;
    }
    const currentTime = Date.now() / 1000; // Chuyển đổi sang giây
    return token.expires_at > currentTime;
}

// Hàm lấy token mới
async function fetchNewAccessToken() {
    const apiURL = 'https://accounts.spotify.com/api/token';
    const response = await fetch(apiURL, {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    const data = await response.json();
    
    // Tính toán thời gian hết hạn của token (thường là 3600 giây)
    data.expires_at = Date.now() / 1000 + data.expires_in;

    return data.access_token;
}

// Hàm lấy hoặc làm mới token
export async function getAccessToken() {
    if (accessToken && isTokenValid(accessToken)) {
        return accessToken;
    }

    const newToken = await fetchNewAccessToken();
    accessToken = newToken;
    return newToken;
}

export async function getOneArtist(artistID) {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/artists?ids=${artistID}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json();
    return data.artists;
}


export async function getArtists() {
    const token = await getAccessToken();
    const response = await fetch('https://api.spotify.com/v1/artists?ids=1Xyo4u8uXC1ZmMpatF05PJ,6OzE2OdvV2tGAxSBsBuZ74,57g2v7gJZepcwsuwssIfZs,0V2DfUrZvBuUReS1LFo5ZI,2aQnC3DbZB9GbauvhAw7ve,5HZtdKfC4xU0wvhEyYDWiY', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json();
    return data.artists;
}

export async function getRecommendTrack() {
    const token = await getAccessToken();
    const response = await fetch('https://api.spotify.com/v1/recommendations?seed_artists=1Xyo4u8uXC1ZmMpatF05PJ&seed_genres=alternative%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json();
    return data?.tracks;
}

export async function getArtistTracks(artistID) {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=VN`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json();
    return data?.tracks;
}

export async function getArtistAlbums(artistID) {
    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json();
    return data?.items;
}