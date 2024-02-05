window.createCredentials = async function () {
    try {
        const options = {
            publicKey: {
                rp: {name: window.location.hostname},
                user: {
                    id: new Uint8Array([0]), // Аутентификация происходит локально, нет риска перехвата данных, использование константных id и challenge безопасно

                    name: "Rosbank",
                    displayName: "Invest",
                },
                challenge: new Uint8Array([0]), // Аутентификация происходит локально, нет риска перехвата данных, использование константных id и challenge безопасно
                pubKeyCredParams: [{alg: -7, type: "public-key"}],
                authenticatorSelection: {
                    authenticatorAttachment: "platform",
                    userVerification: "required",
                    requireResidentKey: true,
                },
                timeout: 60000,
            },
        };
        const credentials = await navigator.credentials.create(options);
        return !!credentials;
    } catch (error) {
        console.log("Ошибка авторизации ${error.message}" );
        throw new Error(error.message);
    }
};

window.authenticate = async function () {
    try {
        const options = {
            publicKey: {
                rpId: window.location.hostname,
                challenge: new Uint8Array([0]), // Аутентификация происходит локально, нет риска перехвата данных, использование константных id и challenge безопасно
                pubKeyCredParams: [{alg: -7, type: "public-key"}],
                authenticatorSelection: {
                    authenticatorAttachment: "platform",
                    userVerification: "required",
                    requireResidentKey: true,
                },
                timeout: 60000,
            },
        };
        const assertion = await navigator.credentials.get(options);

        return !!assertion;
    } catch (error) {
        console.log('Authentication failed: ' + error.message);

        return false;
    }
};

window.isWebAuthnAvailable = function() {
    return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get);
};