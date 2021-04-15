export interface Link {
  uid?: string;
  type: LinkType;
  value: string;
}

export type LinkType =
  | 'snapchat'
  | 'instagram'
  | 'url'
  | 'facebook'
  | 'github'
  | 'linkedin'
  | 'reddit'
  | 'tiktok'
  | 'twitter';
