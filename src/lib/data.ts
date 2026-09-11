import data from '../../content/ultgear.json';
export const site: any = (data as any).site;
export const products: any[] = (data as any).products;
export const byCategory = (c: string) => products.filter(p => p.category === c);
