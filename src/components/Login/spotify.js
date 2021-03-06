const getAccessUrl = () => {
    const authEndpoint = 'https://accounts.spotify.com/authorize'
    // Replace with your app's client ID, redirect URI and desired scopes
    const clientId = '7a5bd131e8184ad78d98ce4ad2952e7d'
    const scopes = [
        'user-read-currently-playing',
        'user-read-recently-played',
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-top-read',
        'user-read-email', 
        'user-read-private',
        'streaming'
    ]
    const url = new URL(authEndpoint)
    url.searchParams.set('client_id', clientId)
    url.searchParams.set('redirect_uri', process.env.SPOTIFY_CALLBACK)
    url.searchParams.set('scope', scopes.join(' '))
    url.searchParams.set('response_type', 'token')
    return url.href
}

export const accessUrl = getAccessUrl()