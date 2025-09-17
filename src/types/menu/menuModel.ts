export interface MenuRequest {
  provinceId: number;
}

export interface ItemMenuResponse {
  id: number;
  name: string;
  icon: string;
  url: string;
  cateCode: number;
}

export interface MenuResponse {
  id: number;
  name: string;
  subname: string;
  icon: string;
  cateCode: number;
  childrens: ItemMenuResponse[];
}
