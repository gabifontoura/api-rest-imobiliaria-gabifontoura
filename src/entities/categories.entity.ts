import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")

class Category {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 45, unique: true })
    name: string;

    @OneToMany(() => RealEstate, (realState) => realState.category)
    realEstate: RealEstate[];
}

export {
    Category
}