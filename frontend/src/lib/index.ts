const backendIp: string = "127.0.0.1";

export const backend = {
    get: async <Type>(endpoint: string, params: object = {}): Promise<Type> => {
        const url = new URL(`http://${backendIp}:3000/${endpoint}.php`);
        url.search = new URLSearchParams(params).toString();
        const result = await fetch(url.toString());
        return await result.json();
    },
    post: async <Type>(endpoint: string, params: object = {}): Promise<Type> => {
        const result = await fetch(`http://${backendIp}:3000/${endpoint}.php`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        return await result.json();
    }
}

export const cookies = {
    get: (key: string) => {
        let cname = key + '=';
        let decoded_cookie = decodeURIComponent(document.cookie);
        let ca = decoded_cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return undefined;
    },
    set: (key: string, value: string) => {
        document.cookie = `${key}=${value};`;
    },
    delete: (key: string) => {
        document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
}

export const assets = {
    getAssetUrl: (filepath: string) => `/src/lib/assets/${filepath}`
}

export const loginutil = {
    login: (username: string, authkey: string) => {
        cookies.set("authkey", authkey);
        cookies.set("loggedAs", username);
    },
    logout: () => {
        cookies.get("authkey");
        cookies.get("loggedAs");
    }
}