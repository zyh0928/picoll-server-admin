// import User from "./user";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Global } from "typings";
import { objectConverter } from "@/util/ormConverter";

@Entity("user_authority")
export default class UserAuth {
  @PrimaryGeneratedColumn({
    type: "tinyint",
    comment: `primary`,
    unsigned: !0
  })
  public id: number;

  @Column({
    type: "varchar",
    comment: `authority name`,
    transformer: objectConverter
  })
  public name: Global.I18n;

  @Column({
    type: "smallint",
    default: 1,
    comment: `authority power`
  })
  public power: string;

  @Column({
    type: "tinyint",
    default: 0,
    unsigned: !0
  })
  public sort: number;

  // @OneToMany(type => User, user => user.auth)
  // users: User[];
}
