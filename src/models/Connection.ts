import {  PrimaryColumn, JoinColumn,
            Column, Entity, ManyToOne, 
            UpdateDateColumn, CreateDateColumn } from "typeorm";

import { User } from "./User";
import { v4 as uuid } from "uuid";

@Entity("connections")
class Connection {

    @PrimaryColumn()
    id: string;

    @ManyToOne( () => User)
    @JoinColumn({ name: "user_id" })
    user: User; 

    @Column()
    admin_id: string;

    @Column()
    user_id: string;

    @Column()
    socket_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id) this.id = uuid();
    }
}

export { Connection };