import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { Schedule } from "./schedulesUsersProperties.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column()
  admin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: string;

  @OneToMany(() => Schedule, (schedules) => schedules.user)
  schedules: Schedule[];

}