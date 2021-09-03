import { Entity } from '../interfaces/entity';
export declare abstract class BaseEntity implements Entity {
    id: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}
