import { BaseEntity } from '../models/base';
import { Role } from './role.entity';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    password?: string;
    rolePermissions: Role[];
    constructor(partial: Partial<User>);
}
