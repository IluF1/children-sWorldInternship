import { currentUrl } from '@/features/utils/constants/constants';

const parts: string[] = String(currentUrl).split('/');
export const productId: string = parts[parts.length - 1];