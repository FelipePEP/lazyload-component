// hack para usar as extensoes scss como classes

declare module '*.scss' {
    const content: {[className: string]: string}
    export = content
}