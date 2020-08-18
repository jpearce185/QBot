export const environment = {
    production: false,
    apiBaseUrl: "https://btprosqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://btprosqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "c42960f5-c561-46d6-aa4b-15ade90b55e9",
        clientId: "88b695c2-96ac-4983-a334-a47482ee5c57",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
