import { Entity, Column,  CreateDateColumn, 
    PrimaryColumn, Timestamp } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Timestamp;

    constructor(){
        if (! this.id) this.id = uuid();
    }
}

export { User };