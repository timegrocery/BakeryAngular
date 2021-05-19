import { HoaDon } from './hoa-don.model';
import { CtHoaDon } from './ct-hoa-don.model';

export interface OrderResponses {
    hoaDon: HoaDon;
    chiTietHoaDon: CtHoaDon[];
}
