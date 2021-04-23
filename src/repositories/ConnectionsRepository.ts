import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../models/connection";

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {    }

export { ConnectionsRepository };