export type listLogElement = {
    title:string;
    sub:string;
    href:string;
}

export type cardLogElement = {
    title: string;
    sub: string;
    list: Array<listLogElement>;
  };