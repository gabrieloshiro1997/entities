import { BaseEntity } from '../models/base';
import { User } from './user.entity';
export declare class Role extends BaseEntity {
    name: string;
    description: string;
    userId: string;
    user: User;
    constructor(partial: Partial<Role>);
}
