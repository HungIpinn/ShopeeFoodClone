export interface BannerRequest {
  categoryId: number;
  placeid: number;
}

export interface BannerResponse {
  bannerId: number;
  link: string;
  pathUrl: string;
  pathUrlWeb: string;
  backgroundColorLeft: string;
}
