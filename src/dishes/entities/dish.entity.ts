import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  name: string;

  @Column({nullable: true})
  description: string;

  @Column({nullable: false})
  type: string;

  @Column({nullable: false})
  origin: string;

  @Column({nullable: false})
  price: number;
}
