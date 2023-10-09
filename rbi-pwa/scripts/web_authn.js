window.createCredentials = async function () {
    try {
        const options = {
            publicKey: {
                rp: {name: window.location.hostname},
                user: {
                    id: new Uint8Array([0]), // Здесь не нужна проверка, это все проверяется локально
                    name: "Rosbank",
                    displayName: "Invest",
                },
                challenge: new Uint8Array([21]),
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
        console.log(error.message);
        return false;
    }
};

window.authenticate = async function () {
    try {
        const options = {
            publicKey: {
                rpId: window.location.hostname,
                challenge: new Uint8Array([0]), // Здесь не нужна проверка, это все проверяется локально
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