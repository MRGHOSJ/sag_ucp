export interface underListProps {
    title:string;
    href:string;
  }
  
export interface listProps {
title:string;
href:string;
icon:string;
ul?:Array<underListProps>;
}

export interface ElementProps {
title: string;
list: Array<listProps>;
}