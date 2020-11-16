import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('idea')
export default class Ideas {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
  
  @Column()
  description: string;

  @Column()
  category: string;
}