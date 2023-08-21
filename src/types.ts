// export type Blog = {
//   title: string,
//   tag: string,
//   tagline: string, 
//   date: string,
//   content: JSX.Element,
//   coverImg: string
// }

export type Blog = {
  title: string,
  tag: string,
  tagline: string, 
  link: string,
  coverImg: string
}

export type Service = {
  title: string, 
  description: string,
  image:{src: string, alt: string}
}