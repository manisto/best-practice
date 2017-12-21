declare module '*.html' {
    let html: string;
    export default html;
}

declare global {
    var angular: ng.IAngularStatic;
}

export {};