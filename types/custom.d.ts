

declare module '*.png' {
  const image: any;
  export default image;
}
declare module '*.svg' {
    const content: any;
    export default content
}

declare module '*.css' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
  
  declare module '*.sass' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
  
  declare module '*.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
