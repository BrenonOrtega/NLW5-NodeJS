import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Timestamp } from "typeorm";

import { v4 as uuid } from "uuid";

class Setting {
    
    @PrimaryColumn()
    id : string;

    @Column()
    username : string;

    @Column()
    chat : boolean;

    @UpdateDateColumn()
    updated_at : Timestamp;

    @CreateDateColumn()
    created_at : Date;

    constructor() {
        if (! this.id ) this.id = uuid();
    }
}

export { Setting };